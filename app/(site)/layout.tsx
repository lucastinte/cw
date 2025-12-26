import { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[10%] top-[-12%] h-56 w-56 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute left-[5%] bottom-[-10%] h-64 w-64 rounded-full bg-secondary/20 blur-[140px]" />
      </div>
      <SiteHeader />
      <main className="relative">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
