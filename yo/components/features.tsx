import { Brain, Lightbulb, Users, BarChart } from "lucide-react"

export default function Features() {
  const features = [
    {
      name: "AI Integration",
      description:
        "Implement cutting-edge artificial intelligence solutions to automate processes, gain insights, and enhance customer experiences.",
      icon: Brain,
    },
    {
      name: "UX Design",
      description:
        "Create intuitive, engaging user experiences that delight your customers and keep them coming back for more.",
      icon: Lightbulb,
    },
    {
      name: "User Research",
      description:
        "Understand your users' needs, behaviors, and motivations to create products that truly resonate with them.",
      icon: Users,
    },
    {
      name: "Data Analytics",
      description: "Leverage the power of data to make informed decisions and drive business growth.",
      icon: BarChart,
    },
  ]

  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transform Your Business with AI & UX
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of services is designed to help your business thrive in the digital age.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

