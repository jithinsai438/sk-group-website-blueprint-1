import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">SK Group of Connections</h3>
            <p className="text-sm text-gray-400">
              Building excellence across multiple industries with dedication and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/divisions" className="text-sm hover:text-white transition-colors">Our Divisions</Link></li>
              <li><Link href="/projects" className="text-sm hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/news" className="text-sm hover:text-white transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Divisions</h3>
            <ul className="space-y-2">
              <li><Link href="/divisions/construction" className="text-sm hover:text-white transition-colors">Construction</Link></li>
              <li><Link href="/divisions/legal" className="text-sm hover:text-white transition-colors">Legal Services</Link></li>
              <li><Link href="/divisions/pr" className="text-sm hover:text-white transition-colors">Public Relations</Link></li>
              <li><Link href="/divisions/events" className="text-sm hover:text-white transition-colors">Event Management</Link></li>
              <li><Link href="/divisions/tissue" className="text-sm hover:text-white transition-colors">Tissue Manufacturing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">info@skgroupconnections.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SK Group of Connections. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
