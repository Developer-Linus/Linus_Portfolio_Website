import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import DynamicTyping from "@/components/dynamic-typing"
import ProjectCard from "@/components/project-card"
import BlogPost from "@/components/blog-post"
import ServiceCard from "@/components/service-card"
import Header from "@/components/header"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden py-20 md:py-28"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="container relative mx-auto px-4">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="flex justify-center md:order-1 md:justify-end">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-purple-500 md:h-80 md:w-80">
                  <Image src="https://placehold.co/320x320" alt="Profile Picture" fill className="object-cover" />
                </div>
              </div>
              <div>
                <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                  Hi, I'm <span className="text-purple-400">Linus Langat</span>
                </h1>
                <div className="mb-6 flex h-8 items-center text-xl font-medium md:text-2xl">
                  <span className="mr-2">I'm a</span>
                  <DynamicTyping />
                </div>
                <p className="mb-8 text-lg text-slate-300">
                  I am a dedicated software engineer committed to building fast, scalable, and user-centered solutions.
                  I specialize in transforming users' pain points into memorable experiences through thoughtful design, efficient code, 
                  and a focus on long-term scalability.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Developer-Linus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-800 p-3 transition-colors hover:bg-purple-500"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/linuslangat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-800 p-3 transition-colors hover:bg-purple-500"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://x.com/Developer_Linus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-800 p-3 transition-colors hover:bg-purple-500"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="mailto:linuslangat097@gmail.com"
                    className="rounded-full bg-slate-800 p-3 transition-colors hover:bg-purple-500"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Skills</h2>
              <div className="mx-auto h-1 w-20 bg-purple-500"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Technical Skills */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="mb-6 text-center text-2xl font-semibold">Technical Skills</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "JavaScript", level: 75 },
                    { name: "Node.js", level: 80 },
                    { name: "Python", level: 70 },
                    { name: "SQL", level: 75 },
                    { name: "Django", level: 80 },
                    { name: "RESTful APIs", level: 85 },
                    { name: "Unit Testing", level: 70 },
                    { name: "Git", level: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="mb-1 flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="mb-6 text-center text-2xl font-semibold">Soft Skills</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "Communication", level: 90 },
                    { name: "Teamwork", level: 95 },
                    { name: "Problem Solving", level: 85 },
                    { name: "Time Management", level: 80 },
                    { name: "Leadership", level: 75 },
                    { name: "Adaptability", level: 90 },
                    { name: "Critical Thinking", level: 85 },
                    { name: "Creativity", level: 80 },
                  ].map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="mb-1 flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="relative py-20"
          style={{
            backgroundImage: "url('https://placehold.co/1920x1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="container relative mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Projects</h2>
              <div className="mx-auto h-1 w-20 bg-purple-500"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-stack e-commerce platform with payment integration and admin dashboard."
                stack={["React", "Node.js", "MongoDB", "Stripe"]}
                imageUrl="https://placehold.co/500x300"
                projectUrl="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates."
                stack={["Next.js", "TypeScript", "Prisma", "Socket.io"]}
                imageUrl="https://placehold.co/500x300"
                projectUrl="#"
              />
              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered application that generates content based on user prompts."
                stack={["Python", "TensorFlow", "React", "FastAPI"]}
                imageUrl="https://placehold.co/500x300"
                projectUrl="#"
              />
              <ProjectCard
                title="Fitness Tracker"
                description="A mobile application to track workouts, nutrition, and progress."
                stack={["React Native", "Firebase", "Redux", "Chart.js"]}
                imageUrl="https://placehold.co/500x300"
                projectUrl="#"
              />
              <ProjectCard
                title="Real Estate Platform"
                description="A platform for listing and searching properties with virtual tours."
                stack={["Vue.js", "Django", "PostgreSQL", "Three.js"]}
                imageUrl="https://placehold.co/500x300"
                projectUrl="#"
              />
              <ProjectCard
                title="Social Media Dashboard"
                description="A dashboard to manage and analyze social media accounts and campaigns."
                stack={["React", "Express", "GraphQL", "D3.js"]}
                imageUrl="https://placehold.co/500x300"
                projectUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Latest Blog Posts</h2>
              <div className="mx-auto h-1 w-20 bg-purple-500"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <BlogPost
                title="Understanding React Hooks"
                excerpt="A deep dive into React Hooks and how they can simplify your code."
                date="April 15, 2023"
                imageUrl="https://placehold.co/500x300"
                url="#"
              />
              <BlogPost
                title="The Future of Web Development"
                excerpt="Exploring emerging technologies that will shape the future of web development."
                date="March 22, 2023"
                imageUrl="https://placehold.co/500x300"
                url="#"
              />
              <BlogPost
                title="Optimizing Database Performance"
                excerpt="Tips and tricks to improve your database performance in production."
                date="February 10, 2023"
                imageUrl="https://placehold.co/500x300"
                url="#"
              />
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#"
                className="inline-flex items-center rounded-md bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
              >
                View All Posts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="relative py-20"
          style={{
            backgroundImage: "url('https://placehold.co/1920x1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="container relative mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Services I Offer</h2>
              <div className="mx-auto h-1 w-20 bg-purple-500"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Web Development"
                description="Custom web applications built with modern technologies to meet your business needs."
                icon="Code"
              />
              <ServiceCard
                title="Mobile App Development"
                description="Native and cross-platform mobile applications for iOS and Android."
                icon="Smartphone"
              />
              <ServiceCard
                title="UI/UX Design"
                description="User-centered design that enhances user experience and engagement."
                icon="Palette"
              />
              <ServiceCard
                title="API Development"
                description="Robust and scalable APIs to power your applications and services."
                icon="Database"
              />
              <ServiceCard
                title="Technical Consultation"
                description="Expert advice on technology stack, architecture, and best practices."
                icon="HeadsetMic"
              />
              <ServiceCard
                title="Code Review & Optimization"
                description="Improve code quality, performance, and maintainability of your existing projects."
                icon="Search"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
              <div className="mx-auto h-1 w-20 bg-purple-500"></div>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center">
                  <Mail className="mx-auto mb-4 h-10 w-10 text-purple-400" />
                  <h3 className="mb-2 text-xl font-semibold">Email</h3>
                  <p className="text-slate-300">linuslangat097@gmail.com</p>
                  <Link
                    href="mailto:contact@example.com"
                    className="mt-4 inline-block text-sm font-medium text-purple-400 hover:text-purple-300"
                  >
                    Send an email
                  </Link>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center">
                  <Linkedin className="mx-auto mb-4 h-10 w-10 text-purple-400" />
                  <h3 className="mb-2 text-xl font-semibold">LinkedIn</h3>
                  <p className="text-slate-300">linkedin.com/in/linuslangat/</p>
                  <Link
                    href="https://www.linkedin.com/in/linuslangat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-purple-400 hover:text-purple-300"
                  >
                    Connect with me
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8">
                <h3 className="mb-6 text-center text-2xl font-semibold">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 focus:border-purple-500 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 focus:border-purple-500 focus:outline-none"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 focus:border-purple-500 focus:outline-none"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 focus:border-purple-500 focus:outline-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image src="https://placehold.co/32x32" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-purple-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-purple-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-purple-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="text-slate-400 transition-colors hover:text-purple-400"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
