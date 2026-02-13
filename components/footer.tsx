import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="location" className="bg-primary/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand & Socials */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-primary">KWAGIES</h3>
            <p className="text-muted-foreground">
              Authentic African cuisine served with warmth and tradition.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Culinary Road, Flavor Town</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@kwagies.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Opening Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 9:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Map Integration */}
          <div className="space-y-4 h-full min-h-[200px] w-full bg-muted rounded-lg overflow-hidden relative group">
            <iframe
              src="https://maps.google.com/maps?q=KWAGIES&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "200px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <Link
              href="https://maps.app.goo.gl/5RraoYqA4ayZJGUS6"
              target="_blank"
              className="absolute inset-0 z-10"
              aria-label="Open in Google Maps"
            />
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} KWAGIES African Cuisine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
