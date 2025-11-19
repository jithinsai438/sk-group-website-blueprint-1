import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Megaphone, CheckCircle, Mail } from "lucide-react";

export default function PRPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Megaphone className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Public Relations</h1>
          </div>
          <p className="text-xl text-green-100">
            Elevating your brand through strategic communication
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Strategic PR & Brand Management
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our Public Relations Division helps businesses build and maintain a positive public image through strategic communication, media relations, and brand management. We create compelling narratives that resonate with your target audience.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our PR Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Media Relations & Press Releases",
                "Brand Strategy & Positioning",
                "Crisis Communication Management",
                "Digital Marketing & Social Media",
                "Content Creation & Copywriting",
                "Influencer Partnerships",
                "Event Publicity & Promotion",
                "Reputation Management",
              ].map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our PR Services?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Experienced PR professionals with industry connections</li>
                <li>• Data-driven strategies for measurable results</li>
                <li>• Creative campaigns that capture attention</li>
                <li>• 24/7 support for crisis management</li>
                <li>• Comprehensive reporting and analytics</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Contact This Division</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For PR campaigns, brand consultations, or media inquiries:
              </p>
              <p className="text-green-600 font-semibold mb-4">
                pr@skgroupconnections.com
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact?division=pr">
                  Get PR Strategy Consultation
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
