// "use client";

// import Link from "next/link";
// import {
// ArrowRight,
// Shield,
// Clock,
// Target,
// Check,
// Factory,
// Cpu,
// Zap,
// Box,
// Mail,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
// Card,
// CardContent,
// CardDescription,
// CardHeader,
// CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
// Select,
// SelectContent,
// SelectItem,
// SelectTrigger,
// SelectValue,
// } from "@/components/ui/select";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import { products, featuredProducts } from "@/lib/products";
// import { useState } from "react";

// export default function Home() {
// const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     product: "",
//     requirements: "",
// });

// const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you! We will contact you within 24 hours.");
//     setFormData({
//       name: "",
//       company: "",
//       email: "",
//       phone: "",
//       product: "",
//       requirements: "",
//     });
// };

// return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             40 Years of Engineering Excellence.
//             <br />
//             Zero Compromises on Quality.
//           </h1>
//           <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
//             From transformers to switchgear, we manufacture precision-engineered
//             insulation components that power India&apos;s leading industries -
//             and the world&apos;s biggest brands.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button
//               size="lg"
//               asChild
//               className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-6"
//             >
//               <Link href="#quote">Get Custom Quote</Link>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               asChild
//               className="text-lg px-8 py-6 border-blue-900 text-blue-900 hover:bg-blue-50"
//             >
//               <Link href="#products">View All Products</Link>
//             </Button>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 border-t border-gray-200 pt-8">
//             <span className="font-semibold">Trusted by Hitachi</span>
//             <span className="text-gray-300">•</span>
//             <span className="font-semibold">Toyota</span>
//             <span className="text-gray-300">•</span>
//             <span className="font-semibold">Nike</span>
//             <span className="text-gray-300">•</span>
//             <span className="font-semibold">Made in Chennai, India</span>
//             <span className="text-gray-300">•</span>
//             <span className="font-semibold">Shipped Globally</span>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
//             Your Equipment Deserves Insulation That Won&apos;t Fail
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="border-2">
//               <CardHeader>
//                 <Shield className="h-12 w-12 text-blue-900 mb-4" />
//                 <CardTitle className="text-xl">
//                   Equipment Downtime Costs You Lakhs
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   One insulation failure can shut down your entire production
//                   line
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-2">
//               <CardHeader>
//                 <Clock className="h-12 w-12 text-blue-900 mb-4" />
//                 <CardTitle className="text-xl">
//                   Generic Products Delay Your Projects
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Off-the-shelf solutions rarely meet exact specifications
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-2 border-blue-900">
//               <CardHeader>
//                 <Target className="h-12 w-12 text-blue-900 mb-4" />
//                 <CardTitle className="text-xl">
//                   We Solve Both Problems
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Custom-engineered insulation delivered on time, every time
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section
//         id="industries"
//         className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
//       >
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
//             Powering the Industries That Power the World
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <Card>
//               <CardHeader>
//                 <Zap className="h-10 w-10 text-blue-900 mb-3" />
//                 <CardTitle className="text-2xl">
//                   Transformer Manufacturers
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   High-voltage insulation for power distribution and
//                   transmission transformers
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <Cpu className="h-10 w-10 text-blue-900 mb-3" />
//                 <CardTitle className="text-2xl">Motor Industry</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Durable laminates and sheets for electric motor insulation and
//                   mechanical components
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <Factory className="h-10 w-10 text-blue-900 mb-3" />
//                 <CardTitle className="text-2xl">
//                   Panel Board & Switchgear
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Precision pressboards and epoxy sheets for electrical panel
//                   assemblies
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <Box className="h-10 w-10 text-blue-900 mb-3" />
//                 <CardTitle className="text-2xl">Bus Duct Systems</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Temperature-resistant materials engineered for high-current
//                   applications
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               8 Core Products. 1000+ Custom Configurations.
//             </h2>
//             <p className="text-xl text-gray-600">
//               Every component manufactured to micron-level precision in our
//               Chennai facility
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {featuredProducts.map((productId) => {
//               const product = products[productId];
//               return (
//                 <Card
//                   key={productId}
//                   className="hover:shadow-lg transition-shadow"
//                 >
//                   <CardHeader>
//                     <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
//                       <Box className="h-16 w-16 text-gray-400" />
//                     </div>
//                     <CardTitle className="text-lg">
//                       {product.name.split("-")[0].trim()}
//                     </CardTitle>
//                     <CardDescription className="line-clamp-2">
//                       {product.shortDescription}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="mb-4">
//                       <span className="inline-block bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full">
//                         {product.specifications[1]?.value || "Multiple specs"}
//                       </span>
//                     </div>
//                     <Button
//                       asChild
//                       variant="outline"
//                       className="w-full border-blue-900 text-blue-900 hover:bg-blue-50"
//                     >
//                       <Link href={`/products/${productId}`}>
//                         View Details <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//           <div className="text-center">
//             <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
//               <Link href="/products/pressboard-3mm">View All 20 Products</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
//             What You Get When You Choose Hitech Insulation
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               "Custom engineering to your exact specifications",
//               "40+ years of manufacturing expertise since 1977",
//               "Globally sourced materials from trusted suppliers",
//               "ISO-certified quality control on every batch",
//               "Fast turnaround on custom orders",
//               "Direct manufacturer pricing (no middlemen)",
//               "Technical support from our engineering team",
//               "Delivery across all Indian states and international shipping",
//             ].map((benefit, index) => (
//               <div key={index} className="flex items-start space-x-3">
//                 <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
//                 <span className="text-lg">{benefit}</span>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Button
//               asChild
//               size="lg"
//               variant="secondary"
//               className="bg-white text-blue-900 hover:bg-gray-100"
//             >
//               <Link href="#quote">Request Your Custom Quote</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
//             What Our Partners Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card>
//               <CardContent className="pt-6">
//                 <p className="text-gray-600 mb-6 italic">
//                   &quot;Hitech Insulation has been our trusted partner for over
//                   15 years. Their pressboard quality is consistently excellent,
//                   and they always deliver on time.&quot;
//                 </p>
//                 <div>
//                   <p className="font-semibold text-gray-900">Rajesh Kumar</p>
//                   <p className="text-sm text-gray-500">Production Manager</p>
//                   <p className="text-sm text-gray-500">
//                     Transformer Manufacturer, Maharashtra
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="pt-6">
//                 <p className="text-gray-600 mb-6 italic">
//                   &quot;The custom fabrication service saved us weeks of
//                   production time. Their engineering team understood our
//                   requirements perfectly and delivered exactly what we
//                   needed.&quot;
//                 </p>
//                 <div>
//                   <p className="font-semibold text-gray-900">Priya Sharma</p>
//                   <p className="text-sm text-gray-500">Technical Director</p>
//                   <p className="text-sm text-gray-500">
//                     Motor Industry, Tamil Nadu
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="pt-6">
//                 <p className="text-gray-600 mb-6 italic">
//                   &quot;Quality materials, competitive pricing, and excellent
//                   technical support. Hitech Insulation is our first choice for
//                   all electrical insulation components.&quot;
//                 </p>
//                 <div>
//                   <p className="font-semibold text-gray-900">Amit Patel</p>
//                   <p className="text-sm text-gray-500">Procurement Head</p>
//                   <p className="text-sm text-gray-500">
//                     Panel Board Manufacturer, Gujarat
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
//             Built on 40 Years of Trust
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="h-96 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
//               <Factory className="h-32 w-32 text-white opacity-50" />
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Founded in 1977 by Mr. Radhakrushnun, Hitech Insulation began
//                 with a simple mission: manufacture insulation components that
//                 don&apos;t fail.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Today, we operate state-of-the-art facilities in Chennai, Tamil
//                 Nadu, supplying precision-engineered electrical insulation to
//                 transformer manufacturers, motor industries, and electrical
//                 equipment makers across India and internationally.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 From our early days trading insulation products to becoming a
//                 trusted manufacturing partner for global brands like Hitachi,
//                 Toyota, and Nike, our commitment remains unchanged: engineering
//                 excellence, delivered consistently.
//               </p>
//               <Button asChild className="bg-blue-900 hover:bg-blue-800">
//                 <Link href="#contact">Learn More About Our Process</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         id="quote"
//         className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
//       >
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//               Get Your Custom Quote in 24 Hours
//             </h2>
//             <p className="text-xl text-blue-100">
//               Tell us your specifications. Our engineers will design the perfect
//               solution for your application.
//             </p>
//           </div>
//           <Card className="bg-white text-gray-900">
//             <CardContent className="pt-6">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Name
//                     </label>
//                     <Input
//                       required
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Company Name
//                     </label>
//                     <Input
//                       required
//                       value={formData.company}
//                       onChange={(e) =>
//                         setFormData({ ...formData, company: e.target.value })
//                       }
//                       placeholder="Your company"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <Input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Phone
//                     </label>
//                     <Input
//                       type="tel"
//                       required
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       placeholder="+91 XXXXX XXXXX"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Product Interest
//                   </label>
//                   <Select
//                     value={formData.product}
//                     onValueChange={(value) =>
//                       setFormData({ ...formData, product: value })
//                     }
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a product category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="pressboard">Pressboard</SelectItem>
//                       <SelectItem value="epoxy">Epoxy Sheets</SelectItem>
//                       <SelectItem value="phenolic">
//                         Phenolic Laminates
//                       </SelectItem>
//                       <SelectItem value="ptfe">PTFE Products</SelectItem>
//                       <SelectItem value="kraft">Kraft Paper</SelectItem>
//                       <SelectItem value="custom">Custom Components</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Specifications / Requirements
//                   </label>
//                   <Textarea
//                     required
//                     value={formData.requirements}
//                     onChange={(e) =>
//                       setFormData({ ...formData, requirements: e.target.value })
//                     }
//                     placeholder="Please describe your requirements (thickness, size, quantity, application, etc.)"
//                     rows={5}
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   size="lg"
//                   className="w-full bg-blue-900 hover:bg-blue-800 text-white"
//                 >
//                   Get Quote Now
//                 </Button>
//               </form>
//               <div
//                 id="contact"
//                 className="mt-6 text-center text-gray-600 flex items-center justify-center space-x-2"
//               >
//                 <Mail className="h-5 w-5" />
//                 <span>
//                   Or email us directly:{" "}
//                   <a
//                     href="mailto:srk@hitechinsulation.in"
//                     className="text-blue-900 font-semibold hover:underline"
//                   >
//                     srk@hitechinsulation.in
//                   </a>
//                 </span>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       <Footer />
//     </div>
// );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Clock,
  Target,
  Factory,
  Cpu,
  Zap,
  Mail,
  Phone,
  Award,
  Globe,
  Users,
  TrendingUp,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { products, featuredProducts } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { Location } from "@/components/location";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onMobileMenuChange={setNavOpen} />
      {/* <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"> */}
      <section
        className={cn(
          "relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-all overflow-hidden duration-500",
          navOpen && "opacity-10 blur-lg pointer-events-none"
        )}
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent opacity-60 blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-50 to-transparent opacity-40 blur-3xl -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2.5">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Manufacturing Excellence Since 1977
              </span>
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Electrical Insulation
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                Engineered for Reliability
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Manufacturer of electrical insulation components including pressboard, epoxy sheets,
              bakelite, kraft paper, and custom insulation parts for transformers, motors,
              switchgear, and panel board systems across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all font-semibold"
              >
                <Link href="/contact#quote" className="inline-flex items-center">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 py-6 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all font-semibold"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              <div className="relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 aspect-square group">
                <Image
                  src="/hero/pressboardsheet.jpg"
                  alt="Pressboard Sheets - High-quality electrical insulation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Pressboard</p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 aspect-square group">
                <Image
                  src="/hero/epoxy.jpg"
                  alt="Epoxy Sheets - Durable insulation materials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Epoxy Sheets</p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 aspect-square group">
                <Image
                  src="/hero/bakelite.png"
                  alt="Bakelite Sheets - Phenolic laminates"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Bakelite Sheets</p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 aspect-square group">
                <Image
                  src="/hero/kraft.png"
                  alt="Kraft Paper - Electrical grade insulation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Kraft Paper</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">47+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Years of Manufacturing Experience
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Insulation Products & Variants
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">ISO</div>
                <div className="text-sm text-gray-600 font-medium">
                  Certified Manufacturing Facility
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-gray-200">
            <p className="text-center text-gray-500 text-xs font-semibold mb-10 uppercase tracking-widest">
              Trusted by Industry Leaders
            </p>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 mb-10">
                {[
                  {
                    src: "/partners/schneider.jpg",
                    alt: "Schneider Electric - Trusted Partner",
                  },
                  {
                    src: "/partners/bhel.png",
                    alt: "BHEL - Industry Leader",
                  },
                  {
                    src: "/partners/siemens.png",
                    alt: "Siemens - Trusted Partner",
                  },
                  {
                    src: "/partners/southern-railways.jpg",
                    alt: "Southern Railways - Electrical Equipment",
                  },
                  {
                    src: "/partners/toshiba.png",
                    alt: "Toshiba - Trusted Partner",
                  },
                ].map((logo, index) => (
                  <div key={index} className="flex items-center justify-center h-20 w-40 sm:w-44">
                    <div className="w-full h-full flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-3 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-md hover:border-gray-300">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={60}
                        className="object-contain max-h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm">
              Made in Chennai, India • Shipped Globally
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Engineers Choose Hitech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your equipment demands precision. We deliver components engineered to exact
              specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 transition-all group bg-white">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Shield className="h-7 w-7 text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl">Eliminate Downtime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  One insulation failure shuts down production lines. Our components meet the
                  strictest quality standards to keep you running.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 transition-all group bg-white">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl">Custom Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Generic products delay projects. We manufacture to your exact
                  specifications-dimensions, materials, performance ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 transition-all group bg-white">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Clock className="h-7 w-7 text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl">Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Time is money. Our streamlined manufacturing delivers custom components on
                  schedule without compromising quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Industries Section - Matching Clean Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized insulation solutions for critical applications across electrical
              manufacturing sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-100 group bg-white">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Zap className="h-7 w-7 text-blue-600 transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3">Transformer Manufacturers</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  High-voltage insulation pressboard, kraft paper, and epoxy components for power
                  and distribution transformers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 group bg-white">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Cpu className="h-7 w-7 text-blue-600 transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3">Motor Industry</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Durable phenolic laminates and insulation sheets for electric motor winding and
                  mechanical protection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 group bg-white">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Factory className="h-7 w-7 text-blue-600 transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3">Panel Board & Switchgear</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Precision-cut pressboard, epoxy glass sheets, and bakelite for electrical panel
                  assemblies and arc protection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 group bg-white">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Box className="h-7 w-7 text-blue-600 transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3">Bus Duct Systems</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Temperature-resistant insulation materials engineered for high-current busbar
                  applications and cable management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      {/* Products Section - Matching Clean Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Core Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8 product families. 1000+ custom configurations. Manufactured to micron-level
              precision in Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((productId) => {
              const product = products[productId];
              return (
                <Card key={productId} className="border-2 border-gray-100 group bg-white">
                  <CardHeader>
                    <div className="relative h-48 w-full rounded-xl mb-4 overflow-hidden border border-gray-200 bg-gray-100">
                      <Image
                        src={getProductImage(productId)}
                        alt={`${product.name} - ${product.category} electrical insulation`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Custom
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {product.name.split("-")[0].trim()}{" "}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-gray-600">
                      {product.shortDescription}{" "}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-50 text-blue-900 text-xs font-medium px-3 py-1.5 rounded-full">
                        {product.specifications[1]?.value || "Multiple specs"}{" "}
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all"
                    >
                      <Link href={`/products/${productId}`}>
                        View Specs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}{" "}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base shadow-lg shadow-blue-600/25"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Benefits Section - Light Background to Match */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The Hitech Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering excellence backed by decades of manufacturing expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Target,
                title: "Custom Engineering",
                desc: "Components manufactured to your exact specifications",
              },
              {
                icon: Award,
                title: "47 Years Experience",
                desc: "Manufacturing expertise since 1977",
              },
              {
                icon: Globe,
                title: "Global Materials",
                desc: "Sourced from certified international suppliers",
              },
              {
                icon: Shield,
                title: "ISO Certified",
                desc: "Quality control on every production batch",
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                desc: "Quick delivery on standard and custom orders",
              },
              {
                icon: TrendingUp,
                title: "Direct Pricing",
                desc: "Manufacturer pricing with no middlemen",
              },
              {
                icon: Users,
                title: "Technical Support",
                desc: "Expert engineering guidance throughout",
              },
              {
                icon: Box,
                title: "Global Shipping",
                desc: "Delivery across India and international markets",
              },
            ].map((benefit, index) => (
              //   <div
              //     key={index}
              //     className="flex items-start gap-4 p-6 bg-gray-50 border-2 border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all group"
              //   >
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 border-2 border-gray-100 rounded-xl"
              >
                {/* <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors"> */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  {/* <benefit.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" /> */}
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}{" "}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base font-semibold shadow-lg shadow-blue-600/25"
            >
              <Link href="/contact#quote">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section - Matching Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Engineers
            </h2>
            <p className="text-xl text-gray-600">
              What our manufacturing partners say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Hitech Insulation has been our trusted partner for over 15 years. Their pressboard quality is consistently excellent, and they always deliver on time.",
                name: "Rajesh Kumar",
                title: "Production Manager",
                company: "Transformer Manufacturer, Maharashtra",
              },
              {
                quote:
                  "The custom fabrication service saved us weeks of production time. Their engineering team understood our requirements perfectly and delivered exactly what we needed.",
                name: "Priya Sharma",
                title: "Technical Director",
                company: "Motor Industry, Tamil Nadu",
              },
              {
                quote:
                  "Quality materials, competitive pricing, and excellent technical support. Hitech Insulation is our first choice for all electrical insulation components.",
                name: "Amit Patel",
                title: "Procurement Head",
                company: "Panel Board Manufacturer, Gujarat",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 bg-white">
                <CardContent className="pt-8">
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-yellow-400">
                          ★
                        </div>
                      ))}{" "}
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{testimonial.title}</p>
                    <p className="text-sm text-blue-600 font-medium mt-1">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}{" "}
          </div>
        </div>
      </section>
      {/* About Section - Matching Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              47 Years of Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Chennai to the world-building trust through precision engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl blur-xl opacity-40" />
              <div className="relative h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                <Image src="/slide1.jpg" alt="Factory" fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Founded 1977</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mr. Radhakrushnun established Hitech Insulation with one mission: manufacture
                      insulation components that don&apos;t fail under pressure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Factory className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Facilities</h3>
                    <p className="text-gray-600 leading-relaxed">
                      State-of-the-art manufacturing in Chennai, Tamil Nadu, supplying transformer
                      manufacturers, motor industries, and electrical equipment makers nationwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Trust</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From trading insulation products to manufacturing partner for Hitachi, Toyota,
                      and Nike-our commitment stays the same: engineering excellence, delivered
                      consistently.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 mt-8">
                <Link href="/contact">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Location />
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your requirements. Our engineering team will review and respond within 24 hours.
            </p>
          </div>

          <Card className="bg-white border-2 border-gray-100 shadow-xl">
            <CardContent className="p-8 sm:p-10">
              <form action="https://formspree.io/f/xwpgqnay" method="POST" className="space-y-6">
                {/* Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      required
                      placeholder="Your full name"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Company Name *
                    </label>
                    <Input
                      name="company"
                      required
                      placeholder="Your company name"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                </div>
                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                </div>
                {/* Product Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Product Required *
                  </label>
                  <select
                    name="product_required"
                    required
                    className="w-full h-12 rounded-md border border-gray-200 px-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="">Select a product</option>
                    <option value="Pressboard Components">
                      Pressboard Components (Manufacturer)
                    </option>
                    <option value="Pressboard Sheets">Pressboard Sheets & Machined Parts</option>
                    <option value="Mica Sheets / Mica Tapes">Mica Sheets / Mica Tapes</option>
                    <option value="Glass Fibre Tapes">
                      Glass Fibre / Polyester / Cotton Tapes
                    </option>
                    <option value="Crepe Paper">Crepe Paper (Electrical Grade)</option>
                    <option value="Hylam Sheets">Hylam Sheets</option>
                    <option value="Kapton Tape">Kapton Tape</option>
                    <option value="Fibre Glass Adhesive Tapes">Fibre Glass Adhesive Tapes</option>
                    <option value="Polyester Adhesive Tapes">Polyester Adhesive Tapes</option>
                    <option value="Epoxy Cast Insulators">Epoxy Cast Insulators</option>
                    <option value="Other">Other (Specify Below)</option>
                  </select>
                </div>
                {/* Other Product Details */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    If Other, specify product details
                  </label>
                  <Textarea
                    name="other_product_details"
                    rows={3}
                    placeholder="Example: FRP Rods, Syndanio Sheets, Epoxy Bushings, Cork Sheets, Custom insulation components..."
                    className="border-gray-200 focus:border-blue-600 focus:ring-blue-600 resize-none"
                  />
                </div>
                {/* Requirements */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Specifications & Requirements *
                  </label>
                  <Textarea
                    name="requirements"
                    required
                    rows={6}
                    placeholder="Thickness, dimensions, quantity, voltage rating, application, delivery timeline..."
                    className="border-gray-200 focus:border-blue-600 focus:ring-blue-600 resize-none"
                  />
                </div>
                {/* Hidden Meta */}
                <input type="hidden" name="source" value="Website Quote Form" /> {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-base font-semibold shadow-lg shadow-blue-600/25"
                >
                  Get Quote Within 24 Hours
                </Button>
              </form>

              {/* Divider */}
              <div className="mt-8 space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">
                      Or contact us directly
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:srk@hitechinsulation.in"
                    className="flex items-center justify-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500 font-medium">Email</div>
                      <div className="text-sm text-gray-900 font-semibold">
                        srk@hitechinsulation.in
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500 font-medium">Response Time</div>
                      <div className="text-sm text-gray-900 font-semibold">Within 24 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
