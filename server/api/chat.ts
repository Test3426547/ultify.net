import { streamText, StreamData } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey;
  if (!apiKey) throw new Error('Missing OpenAI API key');
  const openai = createOpenAI({
    apiKey: apiKey,
  });

  return defineEventHandler(async (event: any) => {
    const { messages } = await readBody(event);

    const data = new StreamData();
    data.append({ test: 'value' });

    const result = await streamText({
      model: openai('gpt-4-turbo'),
      onFinish() {
        data.close();
      },
      messages,
    });

    return result.toAIStreamResponse({ data });
  });
});