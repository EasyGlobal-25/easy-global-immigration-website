import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Award, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Services for USA, Canada, Australia, UK, New Zealand and more",
    image: "/images/global-reach.jpg",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Experienced consultants with proven success records",
    image: "/images/expert-guidance.jpg",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Tailored solutions for individuals, families, and businesses",
    image: "/images/personalized-service.jpg",
  },
]

const services = [
  "Work Visa",
  "PR Visa",
  "Student Visa",
  "Spousal Sponsorship",
  "Tourist Visa",
  "Mobility Visa",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <Image
          src="/images/hero-immigration.jpg"
          alt="Happy family at airport with travel documents"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <h1 className="max-w-4xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Easy Global Immigration
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium italic text-primary-foreground/90 sm:text-2xl">
            {"\"Guiding your journey beyond borders.\""}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Your trusted partner for immigration and visa services. We help individuals and families achieve their global
            opportunities with expert guidance and personalized support.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <Link href="/consultation">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Easy Global Immigration?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We combine expertise with personalized care to make your immigration journey seamless.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Comprehensive Immigration Services
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                From work permits to permanent residency, we offer a full range of immigration services tailored to your
                unique needs and circumstances.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/global-travel.jpg"
                alt="Global travel and immigration connections"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Take the first step towards your global future. Our expert consultants are ready to guide you through every
            step of the immigration process.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link href="/consultation">
                Request Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
