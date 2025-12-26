import { About } from "@/components/About";
import { Header } from "@/components/header";

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-16 pb-20 pt-12">
        <About forceVisible />
      </main>
    </div>
  );
}
