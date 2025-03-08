import ReactMarkdown from "react-markdown";
import type { Message } from "ai";

interface MessageItemProps {
  message: Message;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MessageItem({ message }: MessageItemProps) {
  return (
    <div
      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 font-pixel-body ${
          message.role === "user"
            ? "bg-primary text-primary-foreground pixel-corners"
            : "bg-background text-foreground border border-primary/20 pixel-corners"
        }`}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
            h1: ({ children }) => (
              <h1 className="text-xl font-pixel-heading mb-2">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-lg font-pixel-heading mb-2">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-md font-pixel-heading mb-2">{children}</h3>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-5 mb-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-5 mb-2">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary underline hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-primary/50 pl-2 italic my-2">
                {children}
              </blockquote>
            ),
            code: ({ node, inline, className, children, ...props }: CodeProps) => {
              if (inline) {
                return (
                  <code
                    className="bg-secondary/50 px-1 py-0.5 rounded text-sm font-mono"
                    {...props}
                  >
                    {children}
                  </code>
                );
              }
              return (
                <pre className="bg-secondary/50 p-2 rounded-sm my-2 overflow-x-auto">
                  <code className="text-sm font-mono" {...props}>
                    {children}
                  </code>
                </pre>
              );
            },
            strong: ({ children }) => (
              <strong className="font-bold">{children}</strong>
            ),
            em: ({ children }) => <em className="italic">{children}</em>,
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
