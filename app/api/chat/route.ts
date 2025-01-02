
import { streamText, } from 'ai';
import { openai } from '@/app/openai';

export async function POST(
    req: Request,
) {


    const { messages } = await req.json()
    const result = streamText({
        model: openai('qwen-plus'),
        system: 'You are a helpful assistant.',
        messages,
        tools: {
            //     addResource: tool({
            //         escription: `add a resource to your knowledge base.
            //   If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,

            //     })
        }
    });
    return result.toDataStreamResponse();
}



