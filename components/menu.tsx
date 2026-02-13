
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import { reader } from "@/lib/keystatic";

interface MenuItem {
  slug: string;
  title: string;
  description: string;
  price: string;
  image?: string | null;
}

export async function Menu() {
  const allMenuItems = await reader.collections.menu.all();

  const menuItems: Record<string, MenuItem[]> = {
    starters: [],
    mains: [],
    drinks: [],
  };

  allMenuItems.forEach((item) => {
    const category = item.entry.category as keyof typeof menuItems;
    if (menuItems[category]) {
      menuItems[category].push({
        slug: item.slug,
        title: item.entry.title,
        description: item.entry.description,
        price: item.entry.price,
        image: item.entry.image,
      });
    }
  });

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4 md:text-5xl">
            Our Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the rich and diverse flavors of the continent, from spicy starters to hearty mains.
          </p>
        </div>

        <Tabs defaultValue="mains" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
              <TabsTrigger value="starters">Starters</TabsTrigger>
              <TabsTrigger value="mains">Mains</TabsTrigger>
              <TabsTrigger value="drinks">Drinks</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2">
                {items.length > 0 ? (
                  items.map((item) => (
                    <Card key={item.slug} className="border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow overflow-hidden">
                      {item.image && (
                        <div className="relative h-48 w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                          <span className="font-bold text-primary">{item.price}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-muted-foreground">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12 text-muted-foreground">
                    No items in this category yet.
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
