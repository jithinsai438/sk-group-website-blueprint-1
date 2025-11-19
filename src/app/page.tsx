"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Scale, Megaphone, PartyPopper, PackageOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const divisions = [
  {
    id: "construction",
    name: "Construction",
    icon: Building2,
    description: "Premium construction services delivering quality infrastructure projects.",
    color: "bg-blue-500",
    email: "construction@skgroupconnections.com",
  },
  {
    id: "legal",
    name: "Legal Services",
    icon: Scale,
    description: "Expert legal consultation and comprehensive legal solutions.",
    color: "bg-purple-500",
    email: "legal@skgroupconnections.com",
  },
  {
    id: "pr",
    name: "Public Relations",
    icon: Megaphone,
    description: "Strategic PR services to elevate your brand presence.",
    color: "bg-green-500",
    email: "pr@skgroupconnections.com",
  },
  {
    id: "events",
    name: "Event Management",
    icon: PartyPopper,
    description: "Creating memorable experiences through exceptional event planning.",
    color: "bg-orange-500",
    email: "events@skgroupconnections.com",
  },
  {
    id: "tissue",
    name: "Tissue Manufacturing",
    icon: PackageOpen,
    description: "High-quality tissue products manufactured with advanced technology.",
    color: "bg-red-500",
    email: "tissue@skgroupconnections.com",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              SK Group of Connections
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building Tomorrow's Success Through Excellence and Innovation
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-50">
              A diversified group committed to delivering outstanding services across Construction, Legal, PR, Events, and Manufacturing sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Divisions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of services tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {divisions.map((division) => {
              const Icon = division.icon;
              return (
                <div
                  key={division.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
                >
                  <div className={`${division.color} p-6 flex justify-center`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {division.name}
                    </h3>
                    <p className="text-gray-600 mb-6 min-h-[3rem]">
                      {division.description}
                    </p>
                    <div className="flex gap-3">
                      <Button asChild variant="default" className="flex-1">
                        <Link href={`/divisions/${division.id}`}>
                          Know More
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/contact?division=${division.id}`}>
                          Enquire Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your goals
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}