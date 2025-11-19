import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PackageOpen, CheckCircle, Mail } from "lucide-react";

export default function TissuePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <PackageOpen className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Tissue Manufacturing</h1>
          </div>
          <p className="text-xl text-red-100">
            Quality tissue products for everyday needs
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Premium Tissue Product Manufacturing
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our Tissue Manufacturing Division produces high-quality tissue products using advanced technology and sustainable practices. We are committed to delivering soft, absorbent, and eco-friendly products that meet the highest hygiene standards.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Product Range</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Facial Tissues",
                "Toilet Paper Rolls",
                "Paper Towels & Kitchen Rolls",
                "Napkins & Serviettes",
                "Industrial Tissue Products",
                "Eco-Friendly Paper Products",
                "Custom Branded Tissues",
                "Bulk & Wholesale Supply",
              ].map((product) => (
                <div key={product} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{product}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our Tissue Products?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Superior softness and absorbency</li>
                <li>• Sustainable and eco-friendly manufacturing</li>
                <li>• Strict quality control processes</li>
                <li>• Competitive pricing for bulk orders</li>
                <li>• Reliable supply chain and timely delivery</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Contact This Division</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For product inquiries, bulk orders, or distribution partnerships:
              </p>
              <p className="text-red-600 font-semibold mb-4">
                tissue@skgroupconnections.com
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/contact?division=tissue">
                  Request Product Catalog
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
