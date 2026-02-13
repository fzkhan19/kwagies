import {Footer} from "@/components/footer";
import {Heritage} from "@/components/heritage";
import {Hero} from "@/components/hero";
import {Menu} from "@/components/menu";
import {Navbar} from "@/components/navbar";
import {ReservationForm} from "@/components/reservation-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Menu />
      <Heritage />
      <ReservationForm />
      <Footer />
    </main>
  );
}
