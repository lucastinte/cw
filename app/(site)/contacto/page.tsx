import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatsappLink =
  "https://wa.me/5491155555555?text=Hola%20Cristian%2C%20quiero%20coordinar%20una%20llamada%20contigo";

export const metadata: Metadata = {
  title: "Contacto | Cristian Wosniak Fitness",
  description:
    "Escríbeme por WhatsApp, email o completa el formulario. Respondo en el día para agendar tu consulta.",
  openGraph: {
    title: "Contacto Cristian Wosniak Fitness",
    description:
      "Contacto directo por WhatsApp, teléfono y email. Dirección para sesiones presenciales en Buenos Aires.",
    url: "/contacto",
    images: ["/og-default.svg"],
  },
};

export default function ContactoPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <section className="container max-w-5xl space-y-6 px-6">
        <FadeIn className="space-y-4">
          <Badge variant="outline" className="border-primary text-primary">
            Contacto
          </Badge>
          <div className="space-y-3">
            <h1 className="font-display text-4xl leading-tight sm:text-5xl">
              Escríbeme y agendamos hoy mismo.
            </h1>
            <p className="text-lg text-muted-foreground">
              Respuesta en el día por WhatsApp o email. Cupos limitados para asegurar seguimiento real.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Abrir WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:+5491155555555" className="gap-2">
                Llamar ahora
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-5xl px-6">
        <FadeIn delay={0.05}>
          <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
            <Card className="border-border/70 bg-card/80">
              <CardHeader>
                <CardTitle className="text-2xl">Datos directos</CardTitle>
                <CardDescription className="text-base">
                  El canal más rápido es WhatsApp, pero respondo en todos los medios.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-center gap-3 rounded-xl bg-muted/80 p-3">
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold text-foreground">Teléfono / WhatsApp</p>
                    <a href="tel:+5491155555555" className="text-muted-foreground hover:text-foreground">
                      +54 9 11 5555 5555
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-muted/80 p-3">
                  <Mail className="h-5 w-5 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:hola@cristianwosniakcoach.online"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      hola@cristianwosniakcoach.online
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-muted/80 p-3">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-muted-foreground">
                      Av. del Libertador 1234 <br />
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/80 shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Formulario corto</CardTitle>
                <CardDescription className="text-base">
                  Déjame tus datos y tu objetivo. Te respondo en el día con los siguientes pasos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
