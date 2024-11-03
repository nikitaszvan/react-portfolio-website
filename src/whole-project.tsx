// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { ChevronDown, ChevronRight, Github, ExternalLink, Code, Cloud, Database, Home, User, Briefcase, Mail, ChevronUp, Coffee, Gamepad, Headphones, Camera } from 'lucide-react'
// import Image from 'next/image'

// export default function Component() {
//   const [expandedSections, setExpandedSections] = useState({
//     frontend: false,
//     backend: false,
//     database: false,
//     devops: false,
//   })

//   const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({})
//   const [hoveredHobby, setHoveredHobby] = useState<string | null>(null)
//   const [activeSection, setActiveSection] = useState('')

//   const sectionRefs = {
//     home: useRef<HTMLElement>(null),
//     about: useRef<HTMLElement>(null),
//     work: useRef<HTMLElement>(null),
//     contact: useRef<HTMLElement>(null),
//   }

//   const toggleSection = (section: keyof typeof expandedSections) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }))
//   }

//   const toggleJobDescription = (index: number) => {
//     setExpandedJobs(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }))
//   }

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5,
//     }

//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id)
//         }
//       })
//     }

//     const observer = new IntersectionObserver(observerCallback, observerOptions)

//     Object.values(sectionRefs).forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current)
//       }
//     })

//     return () => {
//       observer.disconnect()
//     }
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     sectionRefs[sectionId as keyof typeof sectionRefs].current?.scrollIntoView({
//       behavior: 'smooth'
//     })
//   }

//   const navItems = [
//     { icon: Home, label: 'Home', href: '#home' },
//     { icon: User, label: 'About', href: '#about' },
//     { icon: Briefcase, label: 'Works', href: '#work' },
//     { icon: Mail, label: 'Contact', href: '#contact' },
//   ]

//   const jobHistory = [
//     {
//       title: "Senior Web Developer",
//       company: "Tech Innovations Inc.",
//       period: "Jan 2020 - Present",
//       description: "Led development of cutting-edge web applications using React and Node.js. Mentored junior developers and implemented best practices in code reviews. Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget. Implemented CI/CD pipelines to streamline deployment processes and improve overall development efficiency.",
//       image: "/placeholder.svg?height=100&width=100"
//     },
//     {
//       title: "Full Stack Developer",
//       company: "Digital Solutions Ltd.",
//       period: "Mar 2017 - Dec 2019",
//       description: "Developed and maintained multiple client websites using a variety of technologies including JavaScript, PHP, and MySQL. Implemented responsive designs and improved site performance, resulting in a 40% increase in page load speed. Worked closely with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience across all devices.",
//       image: "/placeholder.svg?height=100&width=100"
//     },
//     {
//       title: "Junior Developer",
//       company: "Startup Ventures",
//       period: "Jun 2015 - Feb 2017",
//       description: "Assisted in the development of a social media management platform using Ruby on Rails and PostgreSQL. Gained experience in agile methodologies and collaborative development practices. Participated in daily stand-ups and sprint planning sessions, contributing to the team's overall productivity and project success.",
//       image: "/placeholder.svg?height=100&width=100"
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Product Manager",
//       testimonial: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise made our project a huge success.",
//       image: "/placeholder.svg?height=100&width=100"
//     },
//     {
//       name: "Michael Chen",
//       role: "Tech Lead",
//       testimonial: "An exceptional talent who consistently delivers high-quality work. Their problem-solving skills and dedication to excellence are truly remarkable.",
//       image: "/placeholder.svg?height=100&width=100"
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "UX Designer",
//       testimonial: "A brilliant collaborator who brings both technical expertise and creative insight to every project. It's been a joy working together.",
//       image: "/placeholder.svg?height=100&width=100"
//     }
//   ]

//   const hobbies = [
//     { 
//       icon: Coffee, 
//       label: 'Coffee Enthusiast',
//       images: [
//         "/placeholder.svg?height=200&width=200&text=Coffee+Beans",
//         "/placeholder.svg?height=200&width=200&text=Espresso+Machine",
//         "/placeholder.svg?height=200&width=200&text=Latte+Art"
//       ]
//     },
//     { 
//       icon: Gamepad, 
//       label: 'Casual Gamer',
//       images: [
//         "/placeholder.svg?height=200&width=200&text=Gaming+Console",
//         "/placeholder.svg?height=200&width=200&text=Mobile+Gaming",
//         "/placeholder.svg?height=200&width=200&text=Board+Games"
//       ]
//     },
//     { 
//       icon: Headphones, 
//       label: 'Music Lover',
//       images: [
//         "/placeholder.svg?height=200&width=200&text=Vinyl+Records",
//         "/placeholder.svg?height=200&width=200&text=Concert",
//         "/placeholder.svg?height=200&width=200&text=Music+Studio"
//       ]
//     },
//     { 
//       icon: Camera, 
//       label: 'Amateur Photographer',
//       images: [
//         "/placeholder.svg?height=200&width=200&text=DSLR+Camera",
//         "/placeholder.svg?height=200&width=200&text=Landscape+Photo",
//         "/placeholder.svg?height=200&width=200&text=Portrait+Shot"
//       ]
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-dot-pattern bg-fixed flex">
//       <div className="fixed inset-0 bg-gradient-to-br from-background to-background/80 backdrop-blur-3xl -z-10" />
      
//       {/* Mini Side Navigation */}
//       <nav className="fixed left-0 top-0 h-full w-16 bg-background/50 backdrop-blur-lg border-r border-primary/10 flex flex-col items-center justify-center space-y-8 z-50">
//         {navItems.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToSection(item.label.toLowerCase())}
//             className={`p-3 rounded-lg transition-colors group relative ${
//               activeSection === item.label.toLowerCase()
//                 ? 'bg-primary text-primary-foreground'
//                 : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
//             }`}
//           >
//             <item.icon className="h-6 w-6" />
//             <span className="absolute left-full ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//               {item.label}
//             </span>
//           </button>
//         ))}
//       </nav>

//       <main className="flex-1 ml-16">
//         <div className="max-w-5xl mx-auto px-4 py-12 space-y-32">
//           {/* Hero Section */}
//           <section ref={sectionRefs.home} id="home" className="flex items-center gap-12 min-h-[calc(100vh-200px)]">
//             <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex-shrink-0 animate-pulse">
//               <div className="absolute inset-1 rounded-full bg-background" />
//             </div>
//             <div className="space-y-4">
//               <h1 className="text-5xl font-bold tracking-tight">
//                 I'm Jarek –{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
//                   designer and engineer
//                 </span>
//               </h1>
//               <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
//                 I love building products. I have a decade of experience with over 15 digital products.
//               </p>
//             </div>
//           </section>

//           {/* Playful Section */}
//           <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl relative overflow-hidden">
//             <div className="text-center mb-12 relative z-10">
//               <h2 className="text-3xl font-bold mb-4">When I'm Not Coding...</h2>
//               <p className="text-xl text-muted-foreground">Here's a glimpse into my world outside of work</p>
//             </div>
//             <div className="flex justify-center items-start gap-8 flex-wrap relative z-10">
//               {hobbies.map((hobby, index) => (
//                 <div 
//                   key={index} 
//                   className="text-center group relative"
//                   onMouseEnter={() => setHoveredHobby(hobby.label)}
//                   onMouseLeave={() => setHoveredHobby(null)}
//                 >
//                   <div className="w-24 h-24 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
//                     <hobby.icon className="w-12 h-12 text-primary transition-all duration-300 group-hover:scale-110" />
//                   </div>
//                   <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">{hobby.label}</p>
                  
//                   <div className={`absolute left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-300 ${hoveredHobby === hobby.label ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
//                     <div className="flex gap-2 justify-center">
//                       {hobby.images.map((src, imgIndex) => (
//                         <div key={imgIndex} className="relative w-32 h-32 rounded-lg overflow-hidden shadow-xl">
//                           <Image
//                             src={src}
//                             alt={`${hobby.label} image ${imgIndex + 1}`}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* About Me Section */}
//           <section ref={sectionRefs.about} id="about" className="space-y-12">
//             <div className="space-y-4 text-center max-w-3xl mx-auto">
//               <h2 className="text-3xl font-bold">About Me</h2>
//               <p className="text-xl text-muted-foreground">
//                 Hi, I'm Jarek Doe. A versatile developer proficient in various tech stacks.
//               </p>
//             </div>
            
//             {/* Skills */}
//             <div className="grid gap-6 relative">
//               <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent -z-10 rounded-3xl blur-3xl" />
              
//               {/* Frontend Development */}
//               <div className="border border-primary/10 rounded-xl backdrop-blur-sm bg-background/50">
//                 <button
//                   onClick={() => toggleSection('frontend')}
//                   className="w-full p-6 flex justify-between items-center hover:bg-primary/5 transition-colors rounded-xl group"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                       <Code className="h-6 w-6" />
//                     </div>
//                     <span className="font-semibold text-lg">Frontend Development</span>
//                   </div>
//                   {expandedSections.frontend ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
//                 </button>
//                 {expandedSections.frontend && (
//                   <div className="p-6 border-t space-y-4 animate-in slide-in-from-top-2">
//                     <p className="text-muted-foreground">
//                       Specializing in creating responsive and interactive user interfaces with a focus on performance and accessibility.
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {['React', 'NextJS', 'TypeScript', 'Tailwind CSS'].map((skill) => (
//                         <div
//                           key={skill}
//                           className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
//                         >
//                           {skill}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Backend Development */}
//               <div className="border border-primary/10 rounded-xl backdrop-blur-sm bg-background/50">
//                 <button
//                   onClick={() => toggleSection('backend')}
//                   className="w-full p-6 flex justify-between items-center hover:bg-primary/5 transition-colors rounded-xl group"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                       <Cloud  className="h-6 w-6" />
//                     </div>
//                     <span className="font-semibold text-lg">Backend Development</span>
//                   </div>
//                   {expandedSections.backend ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
//                 </button>
//                 {expandedSections.backend && (
//                   <div className="p-6 border-t space-y-4 animate-in slide-in-from-top-2">
//                     <p className="text-muted-foreground">
//                       Building robust and scalable server-side applications with modern technologies.
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {['NodeJS', 'Express', 'Python', 'Django'].map((skill) => (
//                         <div
//                           key={skill}
//                           className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
//                         >
//                           {skill}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Database Management */}
//               <div className="border border-primary/10 rounded-xl backdrop-blur-sm bg-background/50">
//                 <button
//                   onClick={() => toggleSection('database')}
//                   className="w-full p-6 flex justify-between items-center hover:bg-primary/5 transition-colors rounded-xl group"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                       <Database className="h-6 w-6" />
//                     </div>
//                     <span className="font-semibold text-lg">Database Management</span>
//                   </div>
//                   {expandedSections.database ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
//                 </button>
//                 {expandedSections.database && (
//                   <div className="p-6 border-t space-y-4 animate-in slide-in-from-top-2">
//                     <p className="text-muted-foreground">
//                       Designing and managing efficient database systems for optimal data storage and retrieval.
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map((skill) => (
//                         <div
//                           key={skill}
//                           className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
//                         >
//                           {skill}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* Projects Section */}
//           <section ref={sectionRefs.work} id="work" className="space-y-12">
//             <h2 className="text-3xl font-bold text-center">My Projects</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "E-commerce Platform",
//                   description: "A full-stack e-commerce solution with user authentication.",
//                   image: "/placeholder.svg"
//                 },
//                 {
//                   title: "Weather App",
//                   description: "Real-time weather application that provides live weather updates.",
//                   image: "/placeholder.svg"
//                 },
//                 {
//                   title: "Task Management Tool",
//                   description: "Collaborative task management platform with real-time updates.",
//                   image: "/placeholder.svg"
//                 }
//               ].map((project, i) => (
//                 <Card key={i} className="group hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm border-primary/10">
//                   <CardContent className="p-0">
//                     <div className="relative h-48 bg-primary/5">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
//                       />
//                     </div>
//                     <div className="p-6 space-y-4">
//                       <h3 className="font-semibold text-lg">{project.title}</h3>
//                       <p className="text-sm text-muted-foreground">{project.description}</p>
//                       <div className="flex gap-3">
//                         <Button size="sm" variant="outline" className="group/button">
//                           <Github className="h-4 w-4 mr-2 group-hover/button:scale-110 transition-transform" />
//                           Code
//                         </Button>
//                         <Button size="sm" variant="outline" className="group/button">
//                           <ExternalLink className="h-4 w-4 mr-2 group-hover/button:scale-110 transition-transform" />
//                           Demo
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>

//           {/* Job History */}
//           <section className="space-y-12">
//             <h2 className="text-3xl font-bold text-center">My Job History</h2>
//             <div className="space-y-12 relative">
//               <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent -z-10 rounded-3xl blur-3xl" />
              
//               {jobHistory.map((job, i) => (
//                 <div key={i} className="relative pl-12 pb-12 last:pb-0">
//                   <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20" />
//                   <div 
//                     className={`absolute left-0 w-3 h-3 bg-primary rounded-full transition-all duration-500 ease-in-out ${
//                       expandedJobs[i] ? 'top-full -translate-y-full' : 'top-0'
//                     }`}
//                   />
//                   <div className="space-y-4 bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10">
//                     <div className="flex items-center gap-6">
//                       <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-primary/10 flex-shrink-0">
//                         <Image
//                           src={job.image}
//                           alt={`${job.company} logo`}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg">{job.title}</h3>
//                         <p className="text-primary font-medium">{job.company}</p>
//                         <p className="text-sm text-muted-foreground">{job.period}</p>
//                       </div>
//                     </div>
//                     <div className="relative">
//                       <p className={`text-muted-foreground leading-relaxed ${expandedJobs[i] ? '' : 'line-clamp-2'}`}>
//                         {job.description}
//                       </p>
//                       {job.description.length > 100 && (
//                         <button
//                           onClick={() => toggleJobDescription(i)}
//                           className="mt-2 text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
//                           aria-expanded={expandedJobs[i]}
//                           aria-controls={`job-description-${i}`}
//                         >
//                           {expandedJobs[i] ? (
//                             <>
//                               Show less
//                               <ChevronUp className="h-4 w-4" />
//                             </>
//                           ) : (
//                             <>
//                               Show more
//                               <ChevronDown className="h-4 w-4" />
//                             </>
//                           )}
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Voices of Success */}
//           <section className="space-y-12">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold">Voices of Success</h2>
//               <p className="text-xl text-muted-foreground">
//                 Hear from the professionals who've experienced the impact of my work firsthand.
//               </p>
//             </div>
//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, i) => (
//                 <Card key={i} className="bg-background/50 backdrop-blur-sm border-primary/10">
//                   <CardContent className="p-6 text-center space-y-4">
//                     <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden">
//                       <Image
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">{testimonial.name}</h3>
//                       <p className="text-sm text-primary">{testimonial.role}</p>
//                     </div>
//                     <p className="text-muted-foreground leading-relaxed">{testimonial.testimonial}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>

//           {/* Contact Form */}
//           <section ref={sectionRefs.contact} id="contact" className="space-y-12">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold">Get in Touch</h2>
//               <p className="text-muted-foreground">
//                 I'm always excited to connect, collaborate, or just chat. Drop me a message, and I'll get back to you as soon as possible!
//               </p>
//             </div>
//             <Card className="max-w-md mx-auto bg-background/50 backdrop-blur-sm border-primary/10">
//               <CardContent className="p-6">
//                 <form className="space-y-4">
//                   <div className="space-y-2">
//                     <Input 
//                       placeholder="Your Name" 
//                       className="bg-background/50 border-primary/20 focus-visible:ring-primary"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Input 
//                       type="email" 
//                       placeholder="your@email.com" 
//                       className="bg-background/50 border-primary/20 focus-visible:ring-primary"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Textarea 
//                       placeholder="Your message here..." 
//                       className="min-h-[150px] bg-background/50 border-primary/20 focus-visible:ring-primary"
//                     />
//                   </div>
//                   <Button className="w-full">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </section>
//         </div>
//       </main>
//     </div>
//   )
// }