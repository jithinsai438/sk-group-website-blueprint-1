import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Scale, Megaphone, PartyPopper, PackageOpen } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Metro City Commercial Complex",
    division: "Construction",
    icon: Building2,
    color: "bg-blue-500",
    description: "A 15-story commercial complex featuring modern office spaces, retail outlets, and parking facilities.",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    title: "Corporate Merger Legal Advisory",
    division: "Legal Services",
    icon: Scale,
    color: "bg-purple-500",
    description: "Successfully facilitated a multi-million dollar merger between two leading technology companies.",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    id: 3,
    title: "National Brand Launch Campaign",
    division: "Public Relations",
    icon: Megaphone,
    color: "bg-green-500",
    description: "Comprehensive PR campaign for a new consumer brand, achieving 500% increase in brand awareness.",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    id: 4,
    title: "International Business Summit",
    division: "Event Management",
    icon: PartyPopper,
    color: "bg-orange-500",
    description: "Organized a 3-day international business summit with 500+ delegates from 20 countries.",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 5,
    title: "Residential Township Development",
    division: "Construction",
    icon: Building2,
    color: "bg-blue-500",
    description: "Developing a modern residential township with 200+ units, complete with amenities and green spaces.",
    status: "Ongoing",
    year: "2024-2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 6,
    title: "Eco-Friendly Tissue Product Line",
    division: "Tissue Manufacturing",
    icon: PackageOpen,
    color: "bg-red-500",
    description: "Launched a new line of 100% biodegradable tissue products made from sustainable materials.",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100">
            Showcasing excellence across all our divisions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute top-4 right-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {project.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className={`h-5 w-5 ${project.color.replace('bg-', 'text-')}`} />
                        <span className="text-sm text-gray-600">{project.division}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Start Your Own Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise and dedication.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}