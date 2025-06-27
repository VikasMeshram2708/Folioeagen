import type { AIMessage } from '@langchain/core/messages';
import { HumanMessage } from '@langchain/core/messages';
import { MessagesAnnotation, StateGraph } from '@langchain/langgraph';
import { llm, llmWithTools, toolNode } from '../tools/tools';

// node

type LLMCallState = typeof MessagesAnnotation.State;

async function shouldContinue({ messages }: LLMCallState) {
  // llm decides whether to call a it or not

  const lastMessage = messages[messages.length - 1] as AIMessage;

  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }

  //   const result = await llmWithTools.invoke([
  //     {
  //       role: 'system',
  //       content: 'You are an advanced AI assistant integrated into a portfolio management system. Your primary role is to help users record, analyze, and manage their professional skills, employment history, and educational background. You have access to specialized tools for handling structured data about users' skills, jobs, and education. Always provide clear, accurate, and actionable responses. If you need more information from the user to complete a task, ask concise follow-up questions. Ensure your answers are relevant to personal and professional development.',
  //     },
  //     ...state.messages
  //   ]);

  return {
    messages: '__end__'
  };
}

// node 2 -> actually calls the tools
async function callModel(state: LLMCallState) {
  const response = await llm.invoke(state.messages);

  // return a list, because this will get added to the existing list

  return { messages: [response] };
}

// define the new graph
const workflow = new StateGraph(MessagesAnnotation)
  .addNode('agent', callModel)
  .addEdge('__start__', 'agent')
// start is special name for entrypoint
  .addNode('tools', toolNode)
  .addEdge('tools', 'agent')
  .addConditionalEdges('agent', async ({ messages }) => {
    // llm decides whether to call a tool or not
    const lastMessage = messages[messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    // Return a string branch name, not an object, to match expected type
    return '__end__';
  });

//   compile into langchain runnable.

const app2 = workflow.compile();

// use the agent

(async () => {
  const finalState = await app2.invoke({
    messages: [new HumanMessage('What is the wheather in gondia, maharashtra, India')],
  });
  console.log('wheather in gondia - ', finalState.messages[finalState.messages.length - 1].content);

  const nextState = await app2.invoke({
    // including the messages from the previous run gives the LLM context
    messages: [...finalState.messages, new HumanMessage('What about nagpur')]
  });

  console.log('wheather in ngp - ', nextState.messages[nextState.messages.length - 1].content);
})();
