import {
    generateId
} from '@ai-sdk/ui-utils';
export async function POST(

) {
    const newId = generateId()

    return Response.json({
        chatId: newId
    })

}



