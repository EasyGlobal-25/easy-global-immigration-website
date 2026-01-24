import Image from "next/image"
import { Clock, Shield, Users } from "lucide-react"
import { ConsultationForm } from "@/components/consultation-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Consultation | Easy Global Immigration",
  description:
    "Request a free consultation with our immigration experts. Get personalized guidance for your visa and immigration needs.",
}

const benefits = [
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Speak directly with experienced immigration consultants",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24-48 hours",
  },
  {
    icon: Shield,
    title: "Confidential",
    description: "Your information is kept secure and confidential",
  },
]

export default function ConsultationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
            Book a Consultation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Take the first step towards your immigration goals. Fill out the form below and our expert consultants will
            get back to you within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Request Consultation</CardTitle>
                  <CardDescription>
                    Please fill in your details and we will contact you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ConsultationForm />
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/consultation.jpg"
                  alt="Immigration consultation meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg italic text-muted-foreground">
            {"\"Your dreams of a new beginning are just a consultation away. Let us help you navigate the path to your global future.\""}
          </p>
          <p className="mt-4 font-semibold text-foreground">- Easy Global Immigration Team</p>
        </div>
      </section>
    </div>
  )
}
