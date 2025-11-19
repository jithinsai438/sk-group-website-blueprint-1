import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Empowering businesses through diversified excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              SK Group of Connections
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                SK Group of Connections is a dynamic conglomerate committed to delivering excellence across multiple industry sectors. Founded by visionary entrepreneur Shashank Pasupuleti, our group has grown to become a trusted name in Construction, Legal Services, Public Relations, Event Management, and Tissue Manufacturing.
              </p>
              <p>
                With a foundation built on integrity, innovation, and customer satisfaction, we strive to exceed expectations in every project we undertake. Our diverse portfolio allows us to serve a wide range of clients, from individuals to large corporations, providing comprehensive solutions tailored to their unique needs.
              </p>
              <p>
                At SK Group, we believe in creating lasting relationships and delivering value that extends beyond business transactions. Our team of dedicated professionals brings expertise, passion, and commitment to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide world-class services across all our divisions by leveraging innovation, expertise, and a commitment to excellence. We aim to be the preferred partner for businesses and individuals seeking reliable, high-quality solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a leading diversified group recognized for innovation, sustainability, and positive impact. We envision expanding our reach while maintaining the highest standards of quality and service across all our business segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Striving for the highest quality in everything we do
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Building trust through honest and ethical practices
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Embracing new ideas and technologies for better solutions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Prioritizing client satisfaction and long-term relationships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-11-19-at-09.49.06_4e87df9a-1763554325227.jpg?width=8000&height=8000&resize=contain"
                  alt="Shashank Pasupuleti"
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Shashank Pasupuleti
              </h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-700 leading-relaxed">
                With a vision to create a diversified business group that serves multiple industries with excellence, Shashank Pasupuleti founded SK Group of Connections. His leadership and entrepreneurial spirit continue to drive the company's growth and success across all divisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
