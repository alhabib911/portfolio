// "use client";

// import React from "react";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { nextTestimonial, prevTestimonial } from "@/redux/slices/portfolioSlice";
// import {
//   Quote,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
//   MessageCircle,
//   Sparkles,
// } from "lucide-react";

// export default function TestimonialsSection() {
//   const dispatch = useAppDispatch();
//   const currentIndex = useAppSelector((state) => state.portfolio.testimonialIndex);

//   const testimonials = [
//     {
//       name: "Md Abu Rubayet",
//       role: "CEO & Founder @ Sohoz Nikah",
//       project: "SOHOZNIKAH.COM",
//       text: "Definitely satisfied with Md Mobassher’s work. I found him to be a highly skilled full-stack web developer specializing in Next.js, Node.js, and modern web application development. He is hardworking, polite, and patient. I especially appreciate his ability to provide valuable UI/UX and web development recommendations throughout the matrimonial website project.",
//       stars: 5,
//     },
//     {
//       name: "Dr. Atiqur Rahman Mujahid",
//       role: "Founding Executive Director @ CGCS",
//       project: "CGCSBD.COM",
//       text: "Mobassher did an excellent job developing our institutional website using modern full-stack web development technologies. He built a professional, SEO-optimized, and user-friendly platform for CGCS using Next.js and responsive UI design principles. His expertise in UI/UX design, frontend development, and backend integration helped us create a scalable digital presence.",
//       stars: 5,
//     },
//     {
//       name: "Mawlana Mohammad Salman",
//       role: "Chief Advisor @ Ad-Doha Institute",
//       project: "AD-DOHA.ORG",
//       text: "Mobassher has been instrumental in building our institute’s website using modern web development technologies including React, Next.js, and responsive UI frameworks. He delivered a scalable, SEO-friendly educational platform with excellent performance optimization. His full-stack development expertise was impressive.",
//       stars: 5,
//     },
//     {
//       name: "Professor Abdullah al-Ahsan",
//       role: "Professor @ Istanbul Sehir University",
//       project: "ABDULLAH-AHSAN",
//       text: "I am very pleased with the academic portfolio website developed by Mobassher using Next.js, TypeScript, and modern web design practices. The site is highly SEO-optimized, fast, and responsive, effectively showcasing publications, biography, and academic contributions.",
//       stars: 5,
//     },
//   ];

//   const current = testimonials[currentIndex];

//   return (
//     <section id="testimonials" className="py-16 border-b border-slate-800/80">
//       <div className="space-y-3 mb-12">
//         <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
//           Client Success Stories
//         </span>
//         <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
//           Client Success Stories
//         </h2>
//         <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
//           Real feedback from partners and clients I&apos;ve had the pleasure to work with.
//         </p>
//       </div>

//       <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//         {/* Left: Stats & Info */}
//         <div className="lg:col-span-4 space-y-6">
//           <div className="p-6 rounded-3xl bg-[#0d1322] border border-slate-800 space-y-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
//                 <Sparkles className="w-6 h-6" />
//               </div>
//               <div>
//                 <p className="text-2xl font-black text-slate-100 leading-none">100%</p>
//                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Success Rate</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
//                 <Star className="w-6 h-6" fill="currentColor" />
//               </div>
//               <div>
//                 <p className="text-2xl font-black text-slate-100 leading-none">5.0</p>
//                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Average Rating</p>
//               </div>
//             </div>

//             <div className="pt-4 border-t border-slate-800">
//               <p className="text-sm text-slate-400 leading-relaxed font-medium">
//                 I take pride in delivering high-quality web solutions that help businesses grow and achieve their goals.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//              <button 
//               onClick={() => dispatch(prevTestimonial(testimonials.length))}
//               className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all active:scale-90"
//              >
//                <ChevronLeft className="w-5 h-5" />
//              </button>
//              <button 
//               onClick={() => dispatch(nextTestimonial(testimonials.length))}
//               className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all active:scale-90"
//              >
//                <ChevronRight className="w-5 h-5" />
//              </button>
//              <div className="flex gap-1.5 ml-2">
//                 {testimonials.map((_, i) => (
//                   <div 
//                     key={i} 
//                     className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-emerald-500" : "w-1.5 bg-slate-800"}`}
//                   />
//                 ))}
//              </div>
//           </div>
//         </div>

//         {/* Right: Testimonial Card */}
//         <div className="lg:col-span-8 relative">
//            {/* Decorative Quote Mark */}
//            <div className="absolute -top-10 -right-4 text-emerald-500/10 select-none hidden sm:block">
//               <Quote className="w-40 h-40 transform rotate-180" />
//            </div>

//            <div className="relative bg-[#0d1322] border border-slate-800/80 rounded-[40px] p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
//               <div className="flex gap-1 mb-6">
//                  {[...Array(current.stars)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
//                  ))}
//               </div>

//               <blockquote className="text-xl sm:text-2xl font-medium text-slate-100 leading-relaxed italic mb-8 relative z-10">
//                  &ldquo;{current.text}&rdquo;
//               </blockquote>

//               <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
//                  <div className="flex items-center gap-4">
//                     <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-lg">
//                        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-bold text-lg text-emerald-400">
//                           {current.name.charAt(0)}
//                        </div>
//                     </div>
//                     <div>
//                        <h4 className="text-lg font-bold text-slate-100">{current.name}</h4>
//                        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{current.role}</p>
//                     </div>
//                  </div>

//                  <div className="flex items-center gap-3">
//                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
//                        Project: {current.project}
//                     </span>
//                     <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors">
//                        <ExternalLink className="w-4 h-4" />
//                     </a>
//                  </div>
//               </div>
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// }
