"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AIChatbot() {
  const searchParams = useSearchParams()
  const need = searchParams.get("need")

  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the BDSM Software AI assistant. I can help you with project details and provide price estimates. What kind of project are you interested in?",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // If need parameter is provided, send a message automatically
    if (need) {
      const needMap: Record<string, string> = {
        website: "I need a website",
        mvp: "I need an MVP",
        ai: "I need AI integration",
      }

      const message = needMap[need] || ""

      if (message) {
        handleSendMessage(message)
      }
    }
  }, [need])

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim()) return

    // Add user message
    const userMessage = { role: "user", content: messageText }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = "I'll need more information to help you with that."

      if (messageText.toLowerCase().includes("website")) {
        response =
          "For website projects, our pricing typically starts at $5,000 for a basic brochure site and can go up to $25,000+ for complex, custom e-commerce solutions. Could you tell me more about what kind of website you need and what features you're looking for?"
      } else if (messageText.toLowerCase().includes("mvp")) {
        response =
          "Building an MVP typically costs between $15,000-$50,000 depending on complexity and features. To give you a more accurate estimate, I'd need to know: What problem does your MVP solve? What are the core features needed? What's your timeline? Do you have designs already?"
      } else if (
        messageText.toLowerCase().includes("ai") ||
        messageText.toLowerCase().includes("artificial intelligence")
      ) {
        response =
          "For AI integration projects, our pricing typically starts at $10,000 for basic implementations and can go up to $50,000+ for complex, custom solutions. What specific AI capabilities are you looking to implement in your business?"
      } else if (
        messageText.toLowerCase().includes("price") ||
        messageText.toLowerCase().includes("cost") ||
        messageText.toLowerCase().includes("estimate")
      ) {
        response =
          "To provide an accurate estimate, I'll need to know more about your project scope, timeline, and specific requirements. Could you share more details about what you're looking to build?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setLoading(false)
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(input)
  }

  const presetMessages = [
    { label: "I need a Website", message: "I need a website" },
    { label: "I need an MVP", message: "I need an MVP" },
    { label: "I need AI", message: "I need AI integration" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="scanlines"></div>
      <div className="noise"></div>
      <header className="bg-background/80 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-pixel-body">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-pixel-heading text-foreground">Project Estimator</h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full p-4 grid-pattern">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] px-4 py-2 font-pixel-body ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground pixel-corners"
                    : "bg-background text-foreground border border-primary/20 pixel-corners"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {loading && (
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
        </div>

        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 py-2 px-4 border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pixel-corners font-pixel-body"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="bg-primary text-primary-foreground p-2 hover:bg-primary/90 disabled:opacity-50 pixel-corners"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {presetMessages.map((preset, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(preset.message)}
              disabled={loading}
              className="bg-background border border-primary/20 text-foreground hover:bg-primary/10 font-pixel-body p-2 pixel-corners transition-colors text-sm"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-muted-foreground font-pixel-body">
          <p>
            Note: This is a placeholder chatbot. In a real implementation, this would be connected to an AI service
            using the AI SDK to provide accurate project estimates and information.
          </p>
        </div>
      </main>
    </div>
  )
}

