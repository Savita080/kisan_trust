import React from "react";
import FarmerLayout from "./FarmerLayout";
import { Link } from "react-router";
import { BarChart2, Camera, TrendingUp, AlertTriangle, ShieldCheck, MapPin, Clock, ArrowRight, Sprout, Info, AlertCircle } from "lucide-react";

export default function FarmerDashboard() {
  const factors = [
    { name: "Diagnosis Frequency", score: "28/30", perc: 93, icon: Camera },
    { name: "Crop Improvement", score: "22/25", perc: 88, icon: TrendingUp },
    { name: "Location Consistency", score: "15/15", perc: 100, icon: MapPin },
    { name: "Seasonal Management", score: "18/20", perc: 90, icon: Sprout },
    { name: "Response Time", score: "9/10", perc: 90, icon: Clock },
  ];

  return (
    <FarmerLayout>
      <div className="flex flex-col gap-8 pb-20 md:pb-0">
        
        {/* TOP ROW: Score Card + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* SCORE CARD */}
          <div 
            className="lg:col-span-5 bg-white dark:bg-[#1A3A1A] rounded-[14px] border-t-4 border-t-[#64B43C] border-x border-b border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.07)] p-6 relative overflow-hidden transition-colors duration-500"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="flex flex-col items-center flex-1">
                <div className="relative w-40 h-40 flex items-center justify-center mb-2">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#E8F5E0" strokeWidth="12" />
                    <circle 
                      cx="100" cy="100" r="90" fill="none" stroke="#64B43C" strokeWidth="12" strokeLinecap="round"
                      strokeDasharray="565.48"
                      strokeDashoffset={565.48 * (1 - 748/850)}
                    />
                  </svg>
                  <div className="flex flex-col items-center z-10">
                    <span 
                      className="font-heading text-[56px] text-[#1A3A1A] dark:text-white leading-none transition-colors duration-500"
                    >
                      748
                    </span>
                  </div>
                </div>
                <span className="text-[13px] text-[#6B7B5E] dark:text-white/70 font-medium uppercase tracking-wide transition-colors duration-500">Agri-Trust Score</span>
                <div className="mt-2 bg-[#E8F5E0] dark:bg-[#64B43C] text-[#1A3A1A] px-3 py-1 rounded-full text-[12px] font-bold border border-[#64B43C]/20 flex items-center gap-1 transition-colors duration-500">
                  <ShieldCheck size={14} className="text-[#64B43C] dark:text-[#1A3A1A]" /> Good Standing
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-3 w-full">
                {factors.map((f, i) => (
                  <div key={i} className="flex flex-col gap-1 group relative">
                    <div className="flex items-center justify-between text-[12px] text-[#1A3A1A] dark:text-white font-medium transition-colors duration-500">
                      <div className="flex items-center gap-1.5">
                        <f.icon size={14} className="text-[#6B7B5E] dark:text-[#A4B598]" /> {f.name}
                      </div>
                      <span>{f.score}</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#FAFBF7] dark:bg-[#111E11] rounded-full overflow-hidden border border-[rgba(26,58,26,0.05)] dark:border-white/5 transition-colors duration-500">
                      <div className="h-full bg-[#64B43C] rounded-full" style={{ width: `${f.perc}%` }} />
                    </div>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute top-full left-0 z-20 hidden group-hover:block w-[200px] bg-[#1A3A1A] text-[#FAFBF7] text-[12px] p-2 rounded-[8px] mt-1 shadow-lg pointer-events-none">
                      What this means: Consistency in uploading clear, geotagged photos.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(26,58,26,0.06)] dark:border-white/10 flex justify-between items-center text-[12px] transition-colors duration-500">
              <span className="text-[#6B7B5E] dark:text-white/50">Score updated 2 hours ago</span>
              <a href="#" className="text-[#64B43C] font-medium flex items-center gap-1 hover:text-[#1A3A1A] dark:hover:text-white transition-colors">View full breakdown <ArrowRight size={14} /></a>
            </div>
          </div>

          {/* STAT CARDS (4 grid) */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1A3A1A] p-5 rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] flex flex-col justify-between transition-colors duration-500">
              <div className="flex justify-between items-start">
                <span className="text-[13px] text-[#6B7B5E] dark:text-white/70 font-medium leading-snug">Total Diagnoses<br/>uploaded</span>
                <div className="w-8 h-8 rounded-full bg-[#E8F5E0] dark:bg-white/10 flex items-center justify-center"><Camera size={16} className="text-[#1A3A1A] dark:text-white" /></div>
              </div>
              <div className="flex items-end gap-2 mt-4">
                <span className="font-heading text-[36px] text-[#1A3A1A] dark:text-white leading-none">48</span>
                <span className="text-[#27AE60] dark:text-[#64B43C] text-[13px] font-medium flex items-center mb-1">+12 this season</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A3A1A] p-5 rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] flex flex-col justify-between transition-colors duration-500">
              <div className="flex justify-between items-start">
                <span className="text-[13px] text-[#6B7B5E] dark:text-white/70 font-medium leading-snug">Unique Diseases<br/>identified</span>
                <div className="w-8 h-8 rounded-full bg-[#E8F5E0] dark:bg-white/10 flex items-center justify-center"><AlertTriangle size={16} className="text-[#1A3A1A] dark:text-white" /></div>
              </div>
              <div className="flex items-end gap-2 mt-4">
                <span className="font-heading text-[36px] text-[#1A3A1A] dark:text-white leading-none">3</span>
                <div className="flex gap-1 mb-1">
                  <div className="w-4 h-4 rounded-full bg-[#C0392B]" title="Powdery Mildew"></div>
                  <div className="w-4 h-4 rounded-full bg-[#F39C12]" title="Aphids"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E8F5E0] border border-[#64B43C]" title="Healthy"></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A3A1A] p-5 rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] flex flex-col justify-between transition-colors duration-500">
              <div className="flex justify-between items-start">
                <span className="text-[13px] text-[#6B7B5E] dark:text-white/70 font-medium leading-snug">Follow-ups<br/>completed</span>
                <div className="w-8 h-8 rounded-full bg-[#E8F5E0] dark:bg-white/10 flex items-center justify-center"><TrendingUp size={16} className="text-[#1A3A1A] dark:text-white" /></div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 transform -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#E8F5E0" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#64B43C" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="56.54" strokeLinecap="round" />
                  </svg>
                  <span className="text-[12px] font-bold text-[#1A3A1A] dark:text-white z-10">80%</span>
                </div>
                <span className="text-[#6B7B5E] dark:text-white/70 text-[12px] leading-tight max-w-[80px]">of treatments followed up</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A3A1A] p-5 rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] flex flex-col justify-between transition-colors duration-500">
              <div className="flex justify-between items-start">
                <span className="text-[13px] text-[#6B7B5E] dark:text-white/70 font-medium leading-snug">Estimated Loan<br/>Eligibility</span>
                <div className="w-8 h-8 rounded-full bg-[#1A3A1A] dark:bg-[#64B43C] flex items-center justify-center"><span className="text-white dark:text-[#1A3A1A] text-[14px] font-bold">₹</span></div>
              </div>
              <div className="flex flex-col mt-2">
                <span className="font-heading text-[32px] text-[#64B43C] leading-none">₹45,000</span>
                <span className="text-[#6B7B5E] dark:text-white/50 text-[12px] mt-1">based on 748 score</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Diagnosis + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* RECENT DIAGNOSES (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <h3 className="font-heading text-[24px] text-[#1A3A1A] dark:text-white transition-colors duration-500">Recent crop checks</h3>
              <Link to="/history" className="text-[13px] text-[#64B43C] font-medium hover:text-[#1A3A1A] dark:hover:text-white flex items-center gap-1 transition-colors">View all <ArrowRight size={14} /></Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=300&q=80", date: "3 days ago", disease: "Powdery Mildew", sev: "Medium Severity", color: "#F39C12", followUp: true },
                { img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=300&q=80", date: "last Tuesday", disease: "Healthy", sev: "No issues detected", color: "#27AE60", followUp: false },
                { img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=300&q=80", date: "2 weeks ago", disease: "Aphids", sev: "High Severity", color: "#C0392B", followUp: false },
              ].map((diag, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-[#1A3A1A] rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] overflow-hidden flex flex-col cursor-pointer group transition-colors duration-500"
                >
                  <div className="relative h-32 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/30 z-10" />
                    <img src={diag.img} alt="Crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {diag.followUp && (
                      <div className="absolute top-2 left-2 z-20 bg-[#1A3A1A] text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                        <Clock size={10} /> Follow up due
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <span className="text-[12px] text-[#6B7B5E] dark:text-white/50">{diag.date}</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-[14px] text-[#1A3A1A] dark:text-white leading-tight">{diag.disease}</span>
                      <div className="flex items-center gap-1.5 text-[12px]" style={{ color: diag.color }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: diag.color }} />
                        {diag.sev}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TREATMENT TIMELINE (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-heading text-[24px] text-[#1A3A1A] dark:text-white transition-colors duration-500">Treatment Plan</h3>
            
            <div className="bg-white dark:bg-[#1A3A1A] p-5 rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] flex-1 transition-colors duration-500">
              <div className="relative pl-6 py-2 flex flex-col gap-6">
                <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[#C5D5B5] dark:bg-white/10" />
                
                {[
                  { title: "Score increased by 24 points", color: "bg-[#27AE60]", active: true },
                  { title: "Follow-up photo uploaded", color: "bg-[#1A3A1A]", active: false },
                  { title: "Treatment started", color: "bg-[#F39C12]", active: false },
                  { title: "Powdery Mildew detected", color: "bg-[#C0392B]", active: false },
                  { title: "Uploaded first diagnosis", color: "bg-[#6B7B5E]", active: false },
                ].map((event, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[30px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-white dark:border-[#1A3A1A] ${event.color} z-10 ${event.active ? 'animate-pulse' : ''}`} />
                    {event.active && (
                      <div className={`absolute -left-[34px] top-[2px] w-[18px] h-[18px] rounded-full ${event.color} opacity-20 animate-ping z-0`} />
                    )}
                    <span className={`text-[13px] ${event.active ? 'text-[#1A3A1A] dark:text-white font-bold' : 'text-[#6B7B5E] dark:text-[#A4B598]'}`}>{event.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: SMART TIPS CARD */}
        <div 
          className="bg-[#E8F5E0] dark:bg-[#1A3A1A] rounded-[14px] border border-[#64B43C]/20 dark:border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 shadow-sm transition-colors duration-500"
        >
          <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shrink-0 border border-[#64B43C]/20 dark:border-white/5 text-[#64B43C] dark:text-[#E8F5E0]">
            <Sprout size={24} />
          </div>
          <div className="flex flex-col gap-2 flex-1 text-center sm:text-left">
            <h4 className="font-heading text-[18px] text-[#1A3A1A] dark:text-white flex items-center justify-center sm:justify-start gap-2">
              <Info size={16} className="text-[#64B43C]" /> Regional Alert: Haryana
            </h4>
            <p className="text-[14px] text-[#1A3A1A]/80 dark:text-white/80 leading-relaxed">
              Based on your location and season: Aphid risk is high this week in Haryana. Upload a check photo to protect your score before damage occurs.
            </p>
          </div>
          <Link to="/diagnose" className="shrink-0 px-5 py-2.5 rounded-[10px] bg-[#1A3A1A] text-white font-medium text-[14px] hover:bg-[#2A4A2A] transition-colors flex items-center gap-2 mt-2 sm:mt-0">
            Diagnose now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </FarmerLayout>
  );
}
