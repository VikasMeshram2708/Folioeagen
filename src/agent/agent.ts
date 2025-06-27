import { HumanMessage } from '@langchain/core/messages';
import { MemorySaver } from '@langchain/langgraph';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { env } from '../../env';
import { llm, recordEducation, recordEmployment, recordSkills, tools } from '../tools/tools';

// initialize memory to persist state between graph runs
const agentCheckPointer = new MemorySaver();
const agent = createReactAgent({
  llm,
  tools,
  checkpointer: agentCheckPointer
});

(async () => {
  const agentFinalState = await agent.invoke({
    messages: [new HumanMessage('What is the current whether in gondia maharashtra india')]
  }, {
    configurable: {
      thread_id: '42'
    }
  });

  console.log('whether in gondia - ', agentFinalState.messages[agentFinalState.messages.length - 1].content);

  const agentNextState = await agent.invoke({
    messages: [new HumanMessage('And what about nagpur maharashtra india')]
  }, {
    configurable: {
      thread_id: '42'
    }
  });

  console.log('whether in nagpur - ', agentNextState.messages[agentNextState.messages.length - 1].content);
})();
