import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FarmerLayout from "./FarmerLayout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Search, LayoutGrid, List, ChevronRight, Clock, CheckCircle2, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const MOCK_DATA = [
  { id: 1, date: "3 days ago", month: "June", disease: "Powdery Mildew", field: "Field 1", severity: "amber", pending: true, img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=400&q=80", healthy: false },
  { id: 2, date: "1 week ago", month: "June", disease: "Healthy", field: "Field 2", severity: "green", pending: false, img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=400&q=80", healthy: true },
  { id: 3, date: "2 weeks ago", month: "May", disease: "Aphids", field: "Field 1", severity: "red", pending: false, img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=400&q=80", healthy: false },
  { id: 4, date: "3 weeks ago", month: "May", disease: "Healthy", field: "Field 3", severity: "green", pending: false, img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=400&q=80", healthy: true },
  { id: 5, date: "1 month ago", month: "April", disease: "Leaf Rust", field: "Field 2", severity: "amber", pending: false, img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=400&q=80", healthy: false },
  { id: 6, date: "1 month ago", month: "April", disease: "Healthy", field: "Field 1", severity: "green", pending: false, img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=400&q=80", healthy: true },
];

export default function DiagnosisHistory() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("All");

  return (
    <FarmerLayout>
      <div className="flex flex-col gap-8 pb-20 md:pb-0 h-full">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
          <div>
            <h1 className="font-heading text-[32px] text-[#1A3A1A] dark:text-white leading-tight transition-colors duration-500">Your Crop Journal</h1>
            <p className="text-[14px] text-[#6B7B5E] dark:text-[#A4B598] mt-1 transition-colors duration-500">48 diagnoses across 3 fields since March 2024</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7B5E] dark:text-white/50" size={16} />
              <input type="text" placeholder="Search disease or field..." className="w-full h-10 pl-9 pr-4 rounded-[8px] bg-white dark:bg-[#1A3A1A] dark:text-white border border-[#1A3A1A]/10 dark:border-white/10 text-[13px] outline-none focus:border-[#64B43C] transition-colors duration-500" />
            </div>

            <div className="flex bg-[#E8F5E0] dark:bg-black/30 p-1 rounded-[8px] border border-[#64B43C]/20 shrink-0 self-start transition-colors duration-500">
              <button onClick={() => setView("grid")} className={`px-3 py-1.5 rounded-[6px] flex items-center justify-center transition-colors duration-500 ${view === "grid" ? "bg-white dark:bg-[#64B43C] text-[#1A3A1A] dark:text-white shadow-sm" : "text-[#6B7B5E] dark:text-white/50 hover:text-[#1A3A1A] dark:hover:text-white"}`}>
                <LayoutGrid size={16} />
              </button>
              <button onClick={() => setView("list")} className={`px-3 py-1.5 rounded-[6px] flex items-center justify-center transition-colors duration-500 ${view === "list" ? "bg-white dark:bg-[#64B43C] text-[#1A3A1A] dark:text-white shadow-sm" : "text-[#6B7B5E] dark:text-white/50 hover:text-[#1A3A1A] dark:hover:text-white"}`}>
                <List size={16} />
              </button>
            </div>
          </div>
        </header>

        <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar shrink-0">
          {["All", "Healthy", "Diseased", "Follow-ups Pending"].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-1.5 rounded-full text-[13px] whitespace-nowrap transition-colors duration-500 border ${filter === f ? "bg-[#1A3A1A] dark:bg-[#64B43C] text-white dark:text-[#1A3A1A] border-[#1A3A1A] dark:border-[#64B43C]" : "bg-white dark:bg-[#1A3A1A] text-[#6B7B5E] dark:text-[#A4B598] border-[#1A3A1A]/10 dark:border-white/10 hover:border-[#64B43C] dark:hover:border-[#64B43C]"}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-10">
          {view === "grid" ? (
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3 }}>
              <Masonry gutter="16px">
                {MOCK_DATA.map((item, i) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-[#1A3A1A] rounded-[14px] overflow-hidden border border-[#1A3A1A]/10 dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] relative group cursor-pointer transition-colors duration-500"
                  >
                    {item.pending && (
                      <div className="absolute top-0 left-0 right-0 bg-[#F39C12] text-white text-[11px] font-bold py-1 px-3 text-center z-20 shadow-sm flex items-center justify-center gap-1">
                        <Clock size={12} /> Follow-up due in 3 days
                      </div>
                    )}
                    {item.healthy && (
                      <div className="absolute top-3 right-3 bg-[#27AE60] text-white w-6 h-6 rounded-full flex items-center justify-center z-20 shadow-md">
                        <CheckCircle2 size={14} />
                      </div>
                    )}

                    <div className="relative aspect-[4/3] overflow-hidden bg-[#E8F5E0]">
                      <img src={item.img} alt={item.disease} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <div className="p-4 bg-white dark:bg-[#1A3A1A] relative z-10 transition-colors duration-500">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] text-[#6B7B5E] dark:text-white/50">{item.date} · {item.field}</span>
                        <div className={`w-2.5 h-2.5 rounded-full shadow-inner ${item.severity === 'green' ? 'bg-[#27AE60]' : item.severity === 'amber' ? 'bg-[#F39C12]' : 'bg-[#C0392B]'}`} />
                      </div>
                      <h4 className="font-heading text-[18px] text-[#1A3A1A] dark:text-white">{item.disease}</h4>
                      
                      <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-300 flex items-end">
                        <span className="text-[#64B43C] text-[13px] font-medium flex items-center gap-1">View full diagnosis <ArrowRight size={14} /></span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <div className="flex flex-col">
              {['June', 'May', 'April'].map(month => (
                <div key={month} className="mb-8">
                  <div className="sticky top-0 bg-[#FAFBF7] dark:bg-[#111E11] py-2 z-10 transition-colors duration-500">
                    <span className="text-[13px] text-[#6B7B5E] dark:text-[#A4B598] uppercase tracking-wider font-medium">{month} 2024</span>
                  </div>
                  
                  <div className="flex flex-col gap-0 relative">
                    {/* Continuous Line */}
                    <div className="absolute left-[38px] top-6 bottom-0 w-px bg-[#C5D5B5] dark:bg-white/10" />

                    {MOCK_DATA.filter(d => d.month === month).map((item, i) => (
                      <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-6 py-4 relative group cursor-pointer">
                        <div className="w-[80px] shrink-0 text-right pr-4 relative">
                          <span className="font-heading text-[28px] text-[#1A3A1A] dark:text-white leading-none group-hover:text-[#64B43C] dark:group-hover:text-[#64B43C] transition-colors">{i + 2}</span>
                          <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-white dark:border-[#111E11] bg-[#1A3A1A] dark:bg-white z-10 group-hover:bg-[#64B43C] dark:group-hover:bg-[#64B43C] transition-colors" />
                        </div>
                        
                        <div className="flex-1 bg-white dark:bg-[#1A3A1A] p-3 rounded-[12px] border border-[#1A3A1A]/10 dark:border-white/5 shadow-[0_2px_8px_rgba(26,58,26,0.04)] flex items-center gap-4 hover:border-[#64B43C]/40 transition-colors duration-500">
                          <img src={item.img} alt="Thumb" className="w-12 h-12 rounded-[6px] object-cover shrink-0" />
                          <div className="flex-1 flex flex-col">
                            <span className="font-heading text-[18px] text-[#1A3A1A] dark:text-white leading-tight">{item.disease}</span>
                            <span className="text-[12px] text-[#6B7B5E] dark:text-white/50">{item.field}</span>
                          </div>
                          
                          <div className={`px-3 py-1 rounded-full text-[12px] font-bold transition-colors duration-500 ${item.healthy ? 'bg-[#E8F5E0] dark:bg-[#64B43C]/20 text-[#1A3A1A] dark:text-[#64B43C] border border-[#64B43C]/30' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-[#A4B598]'}`}>
                            {item.healthy ? '+ 8 pts' : 'No change'}
                          </div>
                          
                          <ChevronRight size={18} className="text-[#6B7B5E] dark:text-white/50 group-hover:text-[#1A3A1A] dark:group-hover:text-white ml-2 transition-colors" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State Mock */}
          {MOCK_DATA.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Leaf size={64} className="text-[#E8F5E0] dark:text-[#A4B598] mb-6 transition-colors duration-500" />
              <h2 className="font-heading text-[28px] text-[#1A3A1A] dark:text-white mb-2 transition-colors duration-500">Your crop journal is waiting</h2>
              <p className="text-[16px] text-[#6B7B5E] dark:text-white/60 max-w-[400px] mb-8 transition-colors duration-500">Every photo you upload tells the story of your farming. Start today.</p>
              <Link to="/diagnose" className="px-6 py-3 rounded-[10px] bg-[#1A3A1A] text-white flex items-center gap-2 font-medium hover:bg-[#2A4A2A] transition-colors">
                Take your first photo <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </FarmerLayout>
  );
}
