"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Divisions", href: "/divisions" },
    { name: "Projects", href: "/projects" },
    { name: "News & Updates", href: "/news" },
    { name: "Join Us", href: "/join-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Company Name on Left */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/sk-logo-1763554267825.jpg?width=8000&height=8000&resize=contain"
              alt="SK Group Logo"
              width={80}
              height={80}
              className="h-16 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-blue-600 leading-tight">
                SK GROUP OF CONSTRUCTIONS
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Founder Info on Right */}
          <div className="hidden md:flex items-center gap-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-11-19-at-09.49.06_4e87df9a-1763554325227.jpg?width=8000&height=8000&resize=contain"
              alt="Shashank Pasupuleti"
              width={50}
              height={50}
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-500"
            />
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">Shashank Pasupuleti</p>
              <p className="text-xs text-gray-600">Founder & CEO</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {/* Mobile Company Name */}
            <div className="sm:hidden mb-4 pb-4 border-b">
              <h1 className="text-base font-bold text-blue-600 text-center">
                SK GROUP OF CONSTRUCTIONS
              </h1>
            </div>
            
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* Mobile Founder Info */}
            <div className="flex md:hidden items-center gap-3 mt-4 pt-4 border-t">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-11-19-at-09.49.06_4e87df9a-1763554325227.jpg?width=8000&height=8000&resize=contain"
                alt="Shashank Pasupuleti"
                width={50}
                height={50}
                className="h-12 w-12 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">Shashank Pasupuleti</p>
                <p className="text-xs text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}