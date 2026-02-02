import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ConsultationForm } from "@/components/consultation-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Easy Global Immigration",
  description:
    "Get in touch with Easy Global Immigration. Reach out via phone, email, or our contact form for all your immigration and visa inquiries.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "globalpathwaysimmigration1@gmail.com",
    href: "mailto:globalpathwaysimmigration1@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone (India)",
    value: "+91 9603662501",
    href: "tel:+919603662501",
  },
  {
    icon: Phone,
    title: "Phone (Canada)",
    value: "+1 (587) 985-8081",
    href: "tel:+15879858081",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Have questions about immigration? We are here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you have a question about our services, need guidance on your immigration journey, or want to
                schedule a consultation, our team is ready to assist you.
              </p>

              <div className="mt-10 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Presence */}
              <div className="mt-12 rounded-xl bg-muted/50 p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Global Presence</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  We serve clients worldwide with a focus on immigration to USA, Canada, Australia, UK, and New Zealand.
                  Our virtual consultation services ensure you can connect with us from anywhere in the world.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will get back to you within 24-48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ConsultationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Serving Clients Worldwide</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our expert consultants provide virtual and in-person consultations to help you achieve your global dreams,
              no matter where you are located.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {["USA", "Canada", "Australia", "UK", "New Zealand"].map((country) => (
              <div
                key={country}
                className="flex items-center justify-center rounded-lg bg-card border border-border p-6 text-center"
              >
                <span className="font-semibold text-foreground">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
