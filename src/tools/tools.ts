import { tool } from '@langchain/core/tools';
import { ChatDeepSeek } from '@langchain/deepseek';
import { MemorySaver } from '@langchain/langgraph';
import { createReactAgent, ToolNode } from '@langchain/langgraph/prebuilt';
import * as z from 'zod/v4';
import { env } from '../../env';

// skill schema
const skillSchema = z.object({
  name: z.string(),
  rating: z.number()
});

// skill schema type
type SkillSchema = z.infer<typeof skillSchema>;

// employment schema
const employmentSchema = z.object({
  title: z.string(),
  companyName: z.string(),
  companyDetails: z.string(),
  myRole: z.string(),
  summary: z.string(),
  tenure: z.string().describe('ISO 8601 date string'),
});
// employment schema type
type EmploymentSchema = z.infer<typeof employmentSchema>;

// education schema
const educationSchema = z.object({
  education: z.string(),
  degreeName: z.string(),
  collegeName: z.string(),
  universityName: z.string(),
  tenure: z.string().describe('ISO 8601 date string')
});

// education schema
type EducationSchema = z.infer<typeof educationSchema>;

// skill tool
export const recordSkills = tool(
  async (data: SkillSchema) => {
    console.log('data', data);
  },
  {
    name: 'recordSkills',
    description: 'It records the skills details of the user.',
    schema: skillSchema,
  }
);

// employment tool
export const recordEmployment = tool(
  async (data: EmploymentSchema) => {
    console.log('employment-data', data);
  },
  {
    name: 'recordEmployment',
    description: 'It records the employment details of the user.',
    schema: employmentSchema
  }
);

// education tool
export const recordEducation = tool(
  async (data: EducationSchema) => {
    console.log('edu-data', data);
  },
  {
    name: 'recordEducation',
    description: 'It records the education details of the user.',
    schema: educationSchema
  }
);

export const llm = new ChatDeepSeek({
  apiKey: env.DEEPSEEK_API_KEY,
  model: 'deepseek-chat',
  // deepseek-r1:7b
  maxCompletionTokens: 100,
});

export const tools = [recordSkills, recordEmployment, recordEducation];
// export const toolNode = Object.entries(tools.map(tool => [tool.name, tool]));
export const toolNode = new ToolNode(tools);

export const llmWithTools = llm.bindTools(tools);
