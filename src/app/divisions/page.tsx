import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Scale, Megaphone, PartyPopper, PackageOpen, ArrowRight } from "lucide-react";

const divisions = [
  {
    id: "construction",
    name: "Construction",
    icon: Building2,
    description: "Premium construction services delivering quality infrastructure projects with modern techniques and sustainable practices.",
    color: "bg-blue-500",
  },
  {
    id: "legal",
    name: "Legal Services",
    icon: Scale,
    description: "Expert legal consultation covering corporate law, litigation, contracts, and comprehensive legal solutions for businesses and individuals.",
    color: "bg-purple-500",
  },
  {
    id: "pr",
    name: "Public Relations",
    icon: Megaphone,
    description: "Strategic PR services including brand management, media relations, crisis communication, and digital marketing to elevate your brand presence.",
    color: "bg-green-500",
  },
  {
    id: "events",
    name: "Event Management",
    icon: PartyPopper,
    description: "Creating memorable experiences through exceptional event planning, execution, and management for corporate and social events.",
    color: "bg-orange-500",
  },
  {
    id: "tissue",
    name: "Tissue Manufacturing",
    icon: PackageOpen,
    description: "High-quality tissue products manufactured with advanced technology, ensuring hygiene, softness, and environmental responsibility.",
    color: "bg-red-500",
  },
];

export default function DivisionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Divisions</h1>
          <p className="text-xl text-blue-100">
            Diverse expertise across multiple industries
          </p>
        </div>
      </section>

      {/* Divisions List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <div
                  key={division.id}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:flex">
                    <div className={`${division.color} md:w-1/3 p-12 flex items-center justify-center`}>
                      <Icon className="h-24 w-24 text-white" />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {division.name}
                      </h2>
                      <p className="text-gray-700 text-lg mb-6">
                        {division.description}
                      </p>
                      <div className="flex gap-4">
                        <Button asChild>
                          <Link href={`/divisions/${division.id}`}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href={`/contact?division=${division.id}`}>
                            Enquire Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
