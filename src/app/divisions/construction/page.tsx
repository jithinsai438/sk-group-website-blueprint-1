import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, CheckCircle, Mail } from "lucide-react";

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Construction</h1>
          </div>
          <p className="text-xl text-blue-100">
            Building the future with quality and precision
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Premium Construction Services
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              SK Group Construction Division specializes in delivering high-quality infrastructure projects with a focus on innovation, safety, and sustainability. Our experienced team handles projects of all scales, from residential buildings to large commercial complexes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Residential Construction",
                "Commercial Buildings",
                "Infrastructure Development",
                "Renovation & Remodeling",
                "Project Management",
                "Architectural Design Consultation",
                "Quality Control & Inspection",
                "Post-Construction Support",
              ].map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Experienced professionals with proven track record</li>
                <li>• Modern construction techniques and equipment</li>
                <li>• Commitment to safety and quality standards</li>
                <li>• Timely project completion</li>
                <li>• Transparent pricing and communication</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Contact This Division</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For construction inquiries, project consultations, or quotes:
              </p>
              <p className="text-blue-600 font-semibold mb-4">
                construction@skgroupconnections.com
              </p>
              <Button asChild>
                <Link href="/contact?division=construction">
                  Send an Enquiry
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
