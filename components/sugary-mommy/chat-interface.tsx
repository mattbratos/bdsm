"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Send, Info } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useChat } from "ai/react";
import { PresetButton } from "./preset-button";
import { MessageItem } from "./message-item";

// Make sure to export the component as a named export
export function ChatInterface() {
  const searchParams = useSearchParams();
  const need = searchParams.get("need");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showMarkdownInfo, setShowMarkdownInfo] = useState(false);
  const initialRenderRef = useRef(true);

  // Use the AI SDK's useChat hook
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
    append,
  } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hi gorgeous! I'm the Sugar Mommy AI. How can I help you?",
      },
    ],
  });

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to send a message programmatically using the append method from useChat
  const sendMessage = (message: string) => {
    if (isLoading) return;

    // Use the append method to add a user message and get a response
    append({
      role: "user",
      content: message,
    });
  };

  // Handle initial message based on URL parameter - run only once after initial render
  useEffect(() => {
    // Only run this effect once after the component mounts
    if (initialRenderRef.current) {
      initialRenderRef.current = false;

      // If we have a need parameter, send the corresponding message
      if (need) {
        const needMap: Record<string, string> = {
          website: "I need a website",
          mvp: "I need an MVP",
          ai: "I need AI integration",
        };

        const message = needMap[need] || "";
        if (message) {
          // Longer timeout to ensure the chat is fully initialized
          setTimeout(() => {
            sendMessage(message);
          }, 1000);
        }
      }
    }
  }, []); // Empty dependency array ensures this runs only once

  const presetMessages = [
    { label: "I need a Website", message: "I need a website" },
    { label: "I need an MVP", message: "I need an MVP" },
    { label: "I need AI", message: "I need AI integration" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="scanlines"></div>
      {/* <div className="noise"></div> */}
      <header className="bg-background/80 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-pixel-body">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-pixel-heading text-foreground">
              Sugar Mommy AI
            </h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4 grid-pattern">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] px-4 py-2 bg-background text-foreground border border-primary/20 pixel-corners">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 py-2 px-4 border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pixel-corners font-pixel-body"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-primary text-primary-foreground p-2 hover:bg-primary/90 disabled:opacity-50 pixel-corners"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center text-xs text-muted-foreground">
            <button
              type="button"
              onClick={() => setShowMarkdownInfo(!showMarkdownInfo)}
              className="flex items-center hover:text-primary transition-colors"
            >
              <Info className="h-3 w-3 mr-1" />
              Markdown supported
            </button>
            {showMarkdownInfo && (
              <div className="ml-2">
                (Use *italic*, **bold**, `code`, \`\`\`code blocks\`\`\`, {">"}
                quotes, - lists)
              </div>
            )}
          </div>
        </form>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {presetMessages.map((preset, index) => (
            <PresetButton
              key={index}
              label={preset.label}
              message={preset.message}
              onClick={sendMessage}
              disabled={isLoading}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// Also add a default export as a fallback
export default ChatInterface;
