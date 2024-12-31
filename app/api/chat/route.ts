



import { streamText } from 'ai';
import { openai } from '@/app/openai';

export async function POST(
    req: Request,

) {

    const { messages } = await req.json()

    const result = streamText({

        model: openai('qwen-plus'),
        system: 'You are a helpful assistant.',
        messages,
    });

    return result.toDataStreamResponse();


}



