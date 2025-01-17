export type ToolInvocation = any;
export type JSONValue =
    | null
    | string
    | number
    | boolean
    | { [value: string]: JSONValue }
    | Array<JSONValue>;

export interface Attachment {
    /**
     * The name of the attachment, usually the file name.
     */
    name?: string;

    /**
     * A string indicating the [media type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type).
     * By default, it's extracted from the pathname's extension.
     */
    contentType?: string;

    /**
     * The URL of the attachment. It can either be a URL to a hosted file or a [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).
     */
    url: string;
}


/**
 * AI SDK UI Messages. They are used in the client and to communicate between the frontend and the API routes.
 */
export interface Message {
    /**
  A unique identifier for the message.
     */
    id: string;

    /**
  The timestamp of the message.
     */
    createdAt?: Date;

    /**
  Text content of the message.
     */
    content: string;

    /**
     * Additional attachments to be sent along with the message.
     */
    experimental_attachments?: Attachment[];

    role: 'system' | 'user' | 'assistant' | 'data';

    data?: JSONValue;

    /**
     * Additional message-specific information added on the server via StreamData
     */
    annotations?: JSONValue[] | undefined;

    /**
  Tool invocations (that can be tool calls or tool results, depending on whether or not the invocation has finished)
  that the assistant made as part of this message.
     */
    toolInvocations?: Array<ToolInvocation>;
}



export type UseChatOptions = {
    /**
 * The API endpoint that accepts a `{ messages: Message[] }` object and returns
 * a stream of tokens of the AI chat response. Defaults to `/api/chat`.
 */
    api?: string;


    /**
     * A unique identifier for the chat. If not provided, a random one will be
     * generated. When provided, the `useChat` hook with the same `id` will
     * have shared states across components.
     */
    id?: string;


    /**
 * Initial messages of the chat. Useful to load an existing chat history.
 */
    initialMessages?: Message[];
}