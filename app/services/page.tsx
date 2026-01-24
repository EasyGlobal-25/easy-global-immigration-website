import Image from "next/image"
import Link from "next/link"
import {
  Briefcase,
  Home,
  Heart,
  GraduationCap,
  Plane,
  MapPin,
  Users,
  Ticket,
  FileText,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Easy Global Immigration",
  description:
    "Explore our comprehensive immigration services including work visas, PR visas, student visas, spousal sponsorship, and more for USA, Canada, Australia, UK, and New Zealand.",
}

const services = [
  {
    icon: Briefcase,
    title: "Work Visa",
    description:
      "Secure employment opportunities abroad with our expert work visa services. We guide you through employer sponsorship, skilled worker programs, and temporary work permits for various countries.",
    image: "/images/services/work-visa.jpg",
  },
  {
    icon: Home,
    title: "PR Visa",
    description:
      "Make your dream of permanent residency a reality. We specialize in PR applications for USA, Canada, Australia, UK, and New Zealand with comprehensive support through every step.",
    countries: ["USA", "Canada", "Australia", "UK", "New Zealand"],
    image: "/images/services/pr-visa.jpg",
  },
  {
    icon: Heart,
    title: "Spousal Sponsorship Visa",
    description:
      "Reunite with your loved ones through our spousal sponsorship services. We handle family reunification applications with care and attention to ensure a smooth process.",
    image: "/images/services/spousal-visa.jpg",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Pursue your educational dreams abroad. We assist with student visa applications, university admissions guidance, and post-study work permit options.",
    image: "/images/services/student-visa.jpg",
  },
  {
    icon: Plane,
    title: "Tourist / Visitor Visa",
    description:
      "Planning to visit family or explore new destinations? Our visitor visa services ensure hassle-free travel documentation for tourism and short-term visits.",
    image: "/images/services/tourist-visa.jpg",
  },
  {
    icon: MapPin,
    title: "Mobility Visa",
    description:
      "For professionals seeking international mobility, we provide comprehensive support for intra-company transfers and global mobility programs.",
    image: "/images/services/mobility-visa.jpg",
  },
  {
    icon: Users,
    title: "Job Marketing",
    description:
      "Enhance your job prospects with our professional job marketing services. We help present your profile effectively to potential employers worldwide.",
    image: "/images/services/job-marketing.jpg",
  },
  {
    icon: Ticket,
    title: "Ticket Booking",
    description:
      "Complete travel arrangements at your convenience. We offer competitive ticket booking services to complement your immigration journey.",
    image: "/images/services/ticket-booking.jpg",
  },
  {
    icon: FileText,
    title: "Passport Application",
    description:
      "Navigate passport applications and renewals with ease. Our team provides assistance with documentation, form filling, and application tracking.",
    image: "/images/services/passport.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt="Global immigration services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Our Services</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
            Comprehensive immigration and visa services tailored to your unique needs. We guide you through every step
            of your global journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-lg">
                    <service.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  {service.countries && (
                    <CardDescription className="flex flex-wrap gap-2">
                      {service.countries.map((country) => (
                        <span
                          key={country}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {country}
                        </span>
                      ))}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Book a free consultation with our experts. We will assess your situation and recommend the best pathway for
            your immigration goals.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
