"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateContactForm, resetContactForm } from "@/redux/slices/portfolioSlice";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.portfolio.contactForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateContactForm({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    dispatch(resetContactForm());
  };

  const contactInfo = [
    {
      title: "EMAIL",
      value: "habib02cluster@gmail.com",
      link: "mailto:habib02cluster@gmail.com",
      icon: Mail,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "CALL / WHATSAPP",
      value: "+8801753105250",
      link: "https://wa.me/8801753105250",
      icon: Phone,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    // {
    //   title: "LOCATION",
    //   value: "Kurigram, Bangladesh",
    //   link: "https://maps.app.goo.gl/C94JcTnfn8h7ncYZA",
    //   icon: MapPin,
    //   color: "text-amber-400",
    //   bg: "bg-amber-500/10",
    //   border: "border-amber-500/20",
    // },
  ];

  return (
    <section id="contact" className="py-16 pb-24">
      <div className="space-y-3 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-700 tracking-tight">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Looking for a professional Full-Stack Developer for your business, startup, or SaaS? Lets discuss your project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="grid grid-cols-1 gap-4">
             {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-5 p-5 rounded-3xl bg-[#E5F5F5] border border-emerald-400/5 hover:border-emerald-400/5 transition-all group`}
                >
                  <div className={`p-3.5 rounded-2xl ${info.bg} ${info.color} border ${info.border} group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{info.title}</span>
                    <span className="text-sm sm:text-base font-bold text-gray-700 group-hover:text-emerald-400 transition-colors">{info.value}</span>
                  </div>
                </a>
             ))}
          </div>

          {/* Availability Card */}
          <div className="p-8 rounded-[40px] bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-6 relative overflow-hidden group">
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Currently Available</span>
             </div>

             <h3 className="text-xl font-bold text-gray-600">For freelance & remote opportunities.</h3>
             
             <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                   <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                   <span>Project-based hiring</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                   <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                   <span>Fixed-price or Hourly contracts</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                   <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                   <span>Global remote collaboration</span>
                </div>
             </div>

             <div className="pt-2">
                <a
                  href="https://calendly.com/habib02cluster/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book A Call Directly</span>
                </a>
             </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#E5F5F5] border border-[#E5F5F5] rounded-[40px] p-8 sm:p-10 shadow-2xl">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-gray-400 text-emerald-600">
                   <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">Send a Message</h3>
             </div>

             <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                   <div className="space-y-2">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-widest ml-1">Name*</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-5 py-3.5 rounded-2xl bg-gray-100 border border-emerald-500/50 text-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm font-medium"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-widest ml-1">Phone*</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890" 
                        className="w-full px-5 py-3.5 rounded-2xl bg-gray-100 border border-emerald-500/50 text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm font-medium"
                      />
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                   <div className="space-y-2">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-widest ml-1">Email*</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full px-5 py-3.5 rounded-2xl bg-gray-100 border border-emerald-500/50 text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm font-medium"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-widest ml-1">Subject*</label>
                      <input 
                        required
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry" 
                        className="w-full px-5 py-3.5 rounded-2xl bg-gray-100 border border-emerald-500/50 text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm font-medium"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-black text-gray-700 uppercase tracking-widest ml-1">Message*</label>
                   <textarea 
                     required
                     rows={5}
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Tell me about your project idea..." 
                     className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-emerald-500/50 text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm font-medium resize-none"
                   ></textarea>
                </div>

                <div className="pt-2">
                   <button 
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
                   >
                     <span>Send Message</span>
                     <Send className="w-4 h-4" />
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>

      {/* Footer / Copyright section */}
      <div className="mt-24 pt-10 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500">
         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <span className="text-emerald-500">© 2026</span>
            <span>Abdullah Al Habib</span>
            <span className="text-slate-700">•</span>
            <span>Built with ❤️ & Next.js</span>
         </div>
      </div>
    </section>
  );
}
