import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PartyPopper, CheckCircle, Mail } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <PartyPopper className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Event Management</h1>
          </div>
          <p className="text-xl text-orange-100">
            Creating unforgettable experiences, one event at a time
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Event Planning & Execution
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our Event Management Division brings your vision to life with meticulous planning and flawless execution. From corporate conferences to social celebrations, we handle every detail to ensure your event is memorable and successful.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Event Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Corporate Events & Conferences",
                "Wedding Planning & Coordination",
                "Product Launches & Exhibitions",
                "Social Gatherings & Parties",
                "Venue Selection & Management",
                "Catering & Hospitality Services",
                "Audio-Visual & Technical Support",
                "Entertainment & Artist Management",
              ].map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our Event Management?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Experienced team with proven event success</li>
                <li>• End-to-end event management services</li>
                <li>• Creative concepts tailored to your vision</li>
                <li>• Extensive vendor network for best deals</li>
                <li>• On-site coordination and support</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-900">Contact This Division</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For event planning, venue booking, or event consultations:
              </p>
              <p className="text-orange-600 font-semibold mb-4">
                events@skgroupconnections.com
              </p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contact?division=events">
                  Plan Your Event
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
