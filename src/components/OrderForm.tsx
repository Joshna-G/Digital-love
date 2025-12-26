"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser"; 

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    yourName: "",
    clientMobile: "",  
    clientEmail: "",   
    recipientName: "",
    packageType: "basic",
    message: "",
  });

  const EMAIL_SERVICE_ID = "service_234w8pi";
  const EMAIL_TEMPLATE_ID = "template_lyrelly";
  const EMAIL_PUBLIC_KEY = "f5a4km0MhqDcizBlF";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === "clientMobile") {
      const value = e.target.value.replace(/\D/g, ""); 
      if (value.length > 10) return; 
      setFormData({ ...formData, clientMobile: value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.clientMobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return; 
    }

    // 2. Validate Email Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.clientEmail)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return; 
    }

    setSuccess(false);

    try {
      await addDoc(collection(db, "orders"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      const emailParams = {
        to_name: "Owner",
        from_name: formData.yourName,
        contact_info: `Mobile: ${formData.clientMobile} | Email: ${formData.clientEmail}`, 
        recipient_name: formData.recipientName,
        package: formData.packageType,
        message: formData.message,
      };

      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailParams, EMAIL_PUBLIC_KEY)
        .then(() => console.log("Email Sent"))
        .catch((err) => console.error("Email Failed", err));

      setSuccess(true);
      setFormData({ yourName: "", clientMobile: "", clientEmail: "", recipientName: "", packageType: "basic", message: "" });

    } catch (error) {
      console.error("Error submitting: ", error);
      alert("Something went wrong. Please check your internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-20 bg-mauve text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mauve/20 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl mb-8 text-white">+ Get an Estimate & Book</h2>
        
        {success ? (
          <div className="bg-white/90 text-mauve-dark p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl mb-4 font-bold">Request Sent!</h3>
            <p className="text-lg">
              We received your details and will contact you at <strong>{formData.clientMobile}</strong> shortly!
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="mt-6 text-sm underline opacity-60 hover:opacity-100"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/95 p-8 md:p-12 rounded-lg shadow-2xl text-left space-y-6 text-ink">
             <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="yourName">Your Name</label>
                  <input required type="text" id="yourName" name="yourName" value={formData.yourName} onChange={handleChange} className="w-full p-3 border border-mauve-light rounded focus:outline-none focus:border-mauve-dark"/>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="clientMobile">Mobile Number</label>
                  <input 
                    required 
                    type="tel" 
                    id="clientMobile" 
                    name="clientMobile" 
                    value={formData.clientMobile} 
                    onChange={handleChange} 
                    className="w-full p-3 border border-mauve-light rounded focus:outline-none focus:border-mauve-dark" 
                    maxLength={10} 
                  />
                  <p className="text-xs text-ink/50 mt-1">Exactly 10 digits required</p>
                </div>
             </div>

             <div>
                <label className="block text-sm font-bold mb-2" htmlFor="clientEmail">Email Address</label>
                <input 
                  required 
                  type="email" 
                  id="clientEmail" 
                  name="clientEmail" 
                  value={formData.clientEmail} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-mauve-light rounded focus:outline-none focus:border-mauve-dark" 
                  placeholder="you@example.com"
                />
             </div>
            
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="recipientName">Their Name (The recipient)</label>
              <input required type="text" id="recipientName" name="recipientName" value={formData.recipientName} onChange={handleChange} className="w-full p-3 border border-mauve-light rounded focus:outline-none focus:border-mauve-dark" placeholder="Your Soulmate Name"/>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="packageType">Interested Package</label>
              <select name="packageType" id="packageType" value={formData.packageType} onChange={handleChange} className="w-full p-3 border border-mauve-light rounded focus:outline-none focus:border-mauve-dark bg-white">
                <option value="basic">The Essential Combo</option>
                <option value="premium">The Premium Experience</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            <div>
               <label className="block text-sm font-bold mb-2" htmlFor="message">Notes / Occasion</label>
               <textarea required id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 border border-mauve-light rounded focus:outline-none focus:border-mauve-dark" placeholder="It's for their birthday! I want it to include..."></textarea>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-mauve-dark hover:bg-mauve text-white font-bold p-4 rounded transition-colors flex justify-center items-center">
              {loading ? <Loader2 className="animate-spin mr-2" /> : null}
              {loading ? "Submit Request" : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}