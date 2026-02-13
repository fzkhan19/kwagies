
import { reader } from "@/lib/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Image from "next/image";

export async function Team() {
  const teamMembers = await reader.collections.team.all();

  if (teamMembers.length === 0) return null;

  const membersWithBio = await Promise.all(
    teamMembers.map(async (member) => {
      const bio = await member.entry.bio();
      return { ...member, bio };
    })
  );

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4 md:text-5xl">
            Meet the Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind every dish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersWithBio.map((member) => (
            <div
              key={member.slug}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-80 w-full overflow-hidden">
                {member.entry.image && (
                  <Image
                    src={member.entry.image}
                    alt={member.entry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-1">
                    {member.entry.name}
                  </h3>
                  <p className="text-primary font-medium">{member.entry.role}</p>
                </div>
              </div>
              <div className="p-6 prose prose-stone dark:prose-invert">
                <DocumentRenderer document={member.bio} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
