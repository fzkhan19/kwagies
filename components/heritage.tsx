
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Heritage() {
  return (
    <section id="heritage" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary font-medium">
              Our Story
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              From the Roots of Tradition
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Kwagies, every dish tells a story. We trace our recipes back to the bustling markets of West Africa and the family gatherings where food was a language of love.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our spices are sourced directly from sustainable farms, ensuring that the earthy heat of our peppers and the fragrance of our herbs remains authentic. We believe in preserving the culinary heritage that has passed down through generations, bringing a modern touch to timeless classics.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-secondary/20 group">
            <Image
              src="/chef-rexford.png"
              alt="Chef Rexford cooking in the kitchen"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-heading text-xl mb-2">Rexford Eguakun</p>
              <Button variant="secondary" asChild className="w-full sm:w-auto">
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
