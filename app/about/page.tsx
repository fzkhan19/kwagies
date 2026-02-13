
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Team } from "@/components/team";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/kwagies-interior.png"
            alt="Kwagies Interior"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium tracking-wide uppercase backdrop-blur-sm">
            Our Heritage
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white">
            The Story of <span className="text-primary">Kwagies</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where tradition meets passion, and every meal is a celebration of African culture.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-heading text-foreground">
                A Dream Deferred, <span className="text-primary">A Passion realized</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Kwagies wasn&apos;t born in a boardroom; it started in the heart of Rexford Eguakun. For decades, Rexford built a successful career far removed from the culinary world, but the rhythmic chopping of onions and the aromatic simmer of stews were always calling him back to his roots.
                </p>
                <p>
                  At the age of 59, when most are looking towards retirement, Rexford decided to rewrite his story. Driven by a deep-seated desire to share the vibrant flavors of West Africa with the world, he traded his suit for a chef&apos;s coat and pursued his lifelong passion.
                </p>
                <p>
                  &quot;It&apos;s never too late to follow your heart,&quot; Rexford often says. &quot;Food is the universal language of love, and I wanted to speak it fluently.&quot;
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/chef-rexford.png"
                alt="Chef Rexford Eguakun"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="font-heading text-2xl font-bold">Rexford Eguakun</p>
                <p className="text-primary font-medium">Founder & Head Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <span className="text-primary text-6xl">❝</span>
          <blockquote className="text-3xl md:text-5xl font-heading font-medium leading-tight text-foreground">
            We don&apos;t just serve food; we serve memories, culture, and a piece of home on every plate.
          </blockquote>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground italic">
            — The Kwagies Philosophy
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
