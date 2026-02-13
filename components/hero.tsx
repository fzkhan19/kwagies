import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black px-4 text-center md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="African Food Spread"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl space-y-6">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Taste the Soul of <span className="text-primary">Africa</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-200 sm:text-xl">
          Experience authentic flavors, rhythmic spices, and a culinary journey through the heart of the continent.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="px-8 text-lg" asChild>
            <Link href="#reservation">Book a Table</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8 text-lg bg-background/20 text-white hover:bg-background/40 border-white/20 backdrop-blur-sm" asChild>
            <Link href="#menu">View Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
