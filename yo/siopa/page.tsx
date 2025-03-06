"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"

export default function AIChatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the BDSM Software AI assistant. I can help you with project details and provide price estimates. What kind of project are you interested in?",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = "I'll need more information to help you with that."

      if (input.toLowerCase().includes("ai") || input.toLowerCase().includes("artificial intelligence")) {
        response =
          "For AI integration projects, our pricing typically starts at $10,000 for basic implementations and can go up to $50,000+ for complex, custom solutions. Would you like to tell me more about your specific AI needs?"
      } else if (input.toLowerCase().includes("ux") || input.toLowerCase().includes("user experience")) {
        response =
          "Our UX design services range from $5,000 for a basic UX audit to $30,000+ for a complete redesign with user research and testing. What specific UX challenges are you facing?"
      } else if (
        input.toLowerCase().includes("price") ||
        input.toLowerCase().includes("cost") ||
        input.toLowerCase().includes("estimate")
      ) {
        response =
          "To provide an accurate estimate, I'll need to know more about your project scope, timeline, and specific requirements. Could you share more details about what you're looking to build?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/yo" className="flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          <h1 className="ml-4 text-xl font-semibold text-gray-900">Project Estimator</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full p-4">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user" ? "bg-primary text-white" : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white text-gray-800 border border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-150"></div>
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
            className="flex-1 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="bg-primary text-white p-2 rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            Note: This is a placeholder chatbot. In a real implementation, this would be connected to an AI service
            using the AI SDK to provide accurate project estimates and information.
          </p>
        </div>
      </main>
    </div>
  )
}

