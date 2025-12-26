"use client";

import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const whatsappLink =
  "https://wa.me/5491155555555?text=Hola%20Cristian%2C%20quiero%20coordinar%20una%20llamada%20contigo";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nombre = (data.get("nombre") as string) || "";
    const email = (data.get("email") as string) || "";
    const objetivo = (data.get("objetivo") as string) || "";
    const mensaje = (data.get("mensaje") as string) || "";

    const composed = `Hola Cristian, soy ${nombre}. Objetivo: ${objetivo}. Mensaje: ${mensaje}. Puedes responderme a ${email}.`;
    const url = `https://wa.me/5491155555555?text=${encodeURIComponent(composed)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="nombre">
            Nombre
          </label>
          <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" name="email" placeholder="tu@email.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="objetivo">
          Objetivo principal
        </label>
        <Input id="objetivo" name="objetivo" placeholder="Ej. recomposición, fuerza, recuperación" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="mensaje">
          Mensaje
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Cuéntame tu contexto, horarios y si tienes lesiones."
          rows={4}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Enviar</Button>
        <Button asChild variant="ghost" type="button">
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            Enviar por WhatsApp
          </a>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        No comparto tu información. Uso tus datos solo para coordinar el programa y responderte.
      </p>
    </form>
  );
}
