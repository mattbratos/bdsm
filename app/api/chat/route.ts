import { generateChatResponse } from "@/components/sugary-mommy/chat-api";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Generate the response using the chat API
  const result = await generateChatResponse(messages);

  return result.toDataStreamResponse();
}
