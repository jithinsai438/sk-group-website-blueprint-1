import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scale, CheckCircle, Mail } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Scale className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Legal Services</h1>
          </div>
          <p className="text-xl text-purple-100">
            Expert legal counsel for your business and personal needs
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our Legal Services Division provides expert legal consultation and representation across various practice areas. With a team of experienced attorneys, we offer reliable legal support for businesses and individuals.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Legal Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Corporate Law & Business Formation",
                "Contract Drafting & Review",
                "Litigation & Dispute Resolution",
                "Intellectual Property Rights",
                "Real Estate Law",
                "Employment Law",
                "Tax Consultation",
                "Compliance & Regulatory Affairs",
              ].map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our Legal Services?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Experienced legal professionals with diverse expertise</li>
                <li>• Personalized approach to each case</li>
                <li>• Clear communication and regular updates</li>
                <li>• Competitive and transparent fee structure</li>
                <li>• Commitment to protecting your interests</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Contact This Division</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For legal consultation, case evaluation, or legal advice:
              </p>
              <p className="text-purple-600 font-semibold mb-4">
                legal@skgroupconnections.com
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/contact?division=legal">
                  Schedule a Consultation
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
