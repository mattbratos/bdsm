"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would be connected to a real form submission in production
    console.log("Form submitted:", formData)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center bg-background py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-pixel-heading tracking-tight text-foreground sm:text-3xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-muted-foreground font-pixel-body">
            Have a project in mind? Get in touch with us to see how we can help.
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-pixel-body text-foreground">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-primary/20 bg-background text-foreground rounded-none pixel-corners font-pixel-body"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-pixel-body text-foreground">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-primary/20 bg-background text-foreground rounded-none pixel-corners font-pixel-body"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-pixel-body text-foreground">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-primary/20 bg-background text-foreground rounded-none pixel-corners font-pixel-body"
                  required
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-none shadow-sm text-base font-pixel-body text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary pixel-corners"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-3 text-base text-muted-foreground font-pixel-body">
              <p>info@bdsmsoftware.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-3 text-base text-muted-foreground font-pixel-body">
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-3 text-base text-muted-foreground font-pixel-body">
              <p>123 Tech Street, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

