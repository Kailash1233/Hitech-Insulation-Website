"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwpgqnay", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name *</label>
          <Input
            name="name"
            required
            placeholder="Your full name"
            className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Company Name *</label>
          <Input
            name="company"
            required
            placeholder="Your company name"
            className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address *</label>
          <Input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number *</label>
          <Input
            type="tel"
            name="phone"
            required
            placeholder="+91 XXXXX XXXXX"
            className="h-12 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">Product Required *</label>
        <select
          name="product_required"
          required
          className="w-full h-12 rounded-md border border-gray-200 px-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        >
          <option value="">Select a product</option>
          <option value="Pressboard Sheets">Pressboard Sheets</option>
          <option value="Pre-Compressed Pressboard">Pre-Compressed Pressboard</option>
          <option value="Transformer Insulation Kits">Transformer Insulation Kits</option>
          <option value="Moulded Pressboard Components">Moulded Pressboard Components</option>
          <option value="FR4 Epoxy Sheet">FR4 Epoxy Sheet</option>
          <option value="G10 G11 Epoxy Sheet">G10 / G11 Epoxy Sheet</option>
          <option value="ESD Epoxy Sheet">ESD Grade Epoxy Sheet</option>
          <option value="Hylam / Paper Phenolic">Hylam / Paper Phenolic Laminate</option>
          <option value="Bakelite Sheet">Bakelite Sheet</option>
          <option value="ESD Bakelite Sheet">ESD Bakelite Sheet</option>
          <option value="Electrical Presspaper">Electrical Grade Presspaper</option>
          <option value="Kraft Paper">Electrical Grade Kraft Paper</option>
          <option value="FRP Tubes">FRP Tubes</option>
          <option value="FRP Rods">FRP Rods</option>
          <option value="FRP Threaded Rods & Nuts">FRP Threaded Rods &amp; Nuts</option>
          <option value="FRP Components">FRP Components</option>
          <option value="Mica Sheets">Mica Sheets</option>
          <option value="Mica Tapes">Mica Tapes</option>
          <option value="PTFE Sheet">PTFE / Teflon Sheet</option>
          <option value="PTFE Cloth">PTFE Cloth (Adhesive / Non-Adhesive)</option>
          <option value="Nomex Paper">Nomex Paper</option>
          <option value="Engineering Plastics">
            Engineering Plastics (Delrin / PEEK / Nylon / PC)
          </option>
          <option value="Adhesive Tapes">Adhesive Insulation Tapes (Kapton / Polyester)</option>
          <option value="Cork Sheets">Cork Sheets</option>
          <option value="Epoxy Cast Insulators">Epoxy Cast Insulators</option>
          <option value="Custom Fabrication">Custom Gaskets &amp; Fabrication</option>
          <option value="Other">Other (Specify Below)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">
          If Other, specify product details
        </label>
        <Textarea
          name="other_product_details"
          rows={3}
          placeholder="E.g. Syndanio sheets, crepe paper tubes, polyester film, cork gaskets…"
          className="border-gray-200 focus:border-blue-600 focus:ring-blue-600 resize-none"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">
          Specifications &amp; Requirements *
        </label>
        <Textarea
          name="requirements"
          required
          rows={6}
          placeholder="Thickness, dimensions, quantity, voltage rating, application, delivery timeline…"
          className="border-gray-200 focus:border-blue-600 focus:ring-blue-600 resize-none"
        />
      </div>
      <input type="hidden" name="source" value="Website Quote Form – Home Page" />
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-base font-semibold shadow-lg shadow-blue-600/25"
      >
        {loading ? "Submitting..." : "Get Quote Within 24 Hours"}
      </Button>
      {success && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
          ✅ Thank you! Your enquiry has been submitted successfully. Our engineering team will
          contact you within 24 hours.
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">{error}</div>
      )}
    </form>
  );
}
