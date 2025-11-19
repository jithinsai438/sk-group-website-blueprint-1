"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Upload, CreditCard } from "lucide-react";
import { useSearchParams } from "next/navigation";

const divisions = [
  { id: "construction", name: "Construction", email: "construction@skgroupconnections.com" },
  { id: "legal", name: "Legal Services", email: "legal@skgroupconnections.com" },
  { id: "pr", name: "Public Relations", email: "pr@skgroupconnections.com" },
  { id: "events", name: "Event Management", email: "events@skgroupconnections.com" },
  { id: "tissue", name: "Tissue Manufacturing", email: "tissue@skgroupconnections.com" },
  { id: "general", name: "General Inquiry", email: "info@skgroupconnections.com" },
];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "",
    subject: "",
    message: "",
    file: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const divisionParam = searchParams.get("division");
    if (divisionParam) {
      setFormData(prev => ({ ...prev, division: divisionParam }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleDivisionChange = (value: string) => {
    setFormData({ ...formData, division: value });
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.division) {
      setStep(2);
    }
  };

  const handleSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.subject && formData.message) {
      setStep(3);
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would integrate with your backend to:
    // 1. Send email to division-specific address
    // 2. Upload file if present
    // 3. Process payment if required
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const initiatePayment = () => {
    // Paytm Business Integration
    // This is a placeholder - you'll need to configure Paytm merchant credentials
    alert("Payment gateway integration: Please configure your Paytm Business merchant ID and keys in production.");
    
    // Example Paytm integration flow:
    // 1. Generate transaction token from backend
    // 2. Initialize Paytm payment
    // 3. On success, submit the form
    
    handleFinalSubmit();
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Your enquiry has been submitted successfully. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => window.location.href = "/"}>
                Return to Home
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Get in touch with us for any inquiries
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                We're here to answer your questions and discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@skgroupconnections.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Division Contacts</h3>
                <div className="space-y-2">
                  {divisions.slice(0, 5).map((division) => (
                    <div key={division.id} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{division.name}</span>
                      <span className="text-blue-600 text-sm font-medium">{division.email}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Multi-Step Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          step >= s ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            step > s ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Contact Info</span>
                  <span>Details</span>
                  <span>Payment</span>
                </div>
              </div>

              {/* Step 1: Contact Information */}
              {step === 1 && (
                <form onSubmit={handleSubmitStep1} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="division">Select Division *</Label>
                    <Select value={formData.division} onValueChange={handleDivisionChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a division" />
                      </SelectTrigger>
                      <SelectContent>
                        {divisions.map((division) => (
                          <SelectItem key={division.id} value={division.id}>
                            {division.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full">
                    Next Step
                  </Button>
                </form>
              )}

              {/* Step 2: Inquiry Details */}
              {step === 2 && (
                <form onSubmit={handleSubmitStep2} className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Describe your requirements in detail..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="file">Attach File (Optional)</Label>
                    <div className="mt-2">
                      <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                        <Upload className="h-5 w-5 text-gray-600" />
                        <span className="text-sm text-gray-600">
                          {formData.file ? formData.file.name : "Choose file..."}
                        </span>
                        <input
                          id="file"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button type="submit" className="flex-1">
                      Next Step
                    </Button>
                  </div>
                </form>
              )}

              {/* Step 3: Payment (Optional) */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Review Your Information</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Name:</dt>
                        <dd className="text-gray-900 font-medium">{formData.name}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Email:</dt>
                        <dd className="text-gray-900 font-medium">{formData.email}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Division:</dt>
                        <dd className="text-gray-900 font-medium">
                          {divisions.find(d => d.id === formData.division)?.name}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Subject:</dt>
                        <dd className="text-gray-900 font-medium">{formData.subject}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Payment is optional and only required for certain services. 
                      You can submit your inquiry without payment, and we'll contact you with pricing details.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleFinalSubmit}
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry (No Payment)"}
                    </Button>

                    <Button
                      onClick={initiatePayment}
                      disabled={isSubmitting}
                      variant="outline"
                      className="w-full"
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Processing..." : "Submit with Payment (Paytm)"}
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep(2)}
                      className="w-full"
                    >
                      Back to Edit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
