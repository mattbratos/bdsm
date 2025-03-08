import Link from "next/link"
import { Brain, MonitorSmartphone, Rocket } from "lucide-react"
import Section from "@/components/section"

export default function Features() {
  const services = [
    {
      name: "Website",
      description:
        "Professional website design and development with exceptional UX. Perfect for businesses looking to stand out online.",
      icon: MonitorSmartphone,
      link: "/sugar-mommy?need=website",
    },
    {
      name: "MVP",
      description:
        "Get your Minimum Viable Product built quickly and efficiently. Turn your startup idea into reality with our expertise.",
      icon: Rocket,
      link: "/sugar-mommy?need=mvp",
    },
    {
      name: "AI",
      description:
        "Incorporate cutting-edge AI into your products and services. Enhance functionality with custom AI solutions.",
      icon: Brain,
      link: "/sugar-mommy?need=ai",
    },
  ]

  return (
    <Section 
      heading="What Do You Need?"
      subheading="Select one of our core services to get started with a custom quote"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <Link
            href={service.link}
            key={service.name}
            className="group relative flex flex-col bg-background/30 border border-primary/20 p-8 h-full text-center hover:bg-primary/5 transition-colors pixel-corners overflow-hidden"
          >
            <div className="relative z-10">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-none bg-primary text-primary-foreground pixel-corners mb-6 group-hover:animate-pulse">
                <service.icon className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-pixel-heading text-primary mb-4">{service.name}</h3>
              <p className="text-base text-muted-foreground font-geist-mono flex-grow">{service.description}</p>
              <div className="mt-6 inline-flex items-center justify-center px-5 py-2 border border-primary text-sm font-geist-mono text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors pixel-corners">
                Get a Quote
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
              <div className="absolute inset-0 bg-primary pattern-grid-lg"></div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

