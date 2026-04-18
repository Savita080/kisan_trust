import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import FarmerLayout from "./FarmerLayout";
import { Camera, MapPin, Search, ChevronDown, CheckCircle2, ShieldAlert, AlertTriangle, ChevronRight, Activity, Bell, SplitSquareHorizontal } from "lucide-react";

export default function DiagnoseCrop() {
  const [state, setState] = useState<"ready" | "analyzing" | "results" | "comparison">("ready");
  const [analyzingText, setAnalyzingText] = useState("Identifying disease markers...");

  useEffect(() => {
    if (state === "analyzing") {
      const texts = ["Identifying disease markers...", "Checking regional outbreak data...", "Preparing your treatment plan..."];
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % texts.length;
        setAnalyzingText(texts[i]);
      }, 1500);
      
      const timeout = setTimeout(() => {
        setState("results");
      }, 4500);
      
      return () => { clearInterval(interval); clearTimeout(timeout); };
    }
  }, [state]);

  const handleUpload = () => {
    setState("analyzing");
  };

  return (
    <FarmerLayout>
      <div className="flex flex-col gap-6 pb-20 md:pb-0 max-w-[800px] mx-auto relative">
        
        {/* Admin toggle for testing states */}
        <div className="fixed top-24 right-8 z-50 bg-white dark:bg-[#1A3A1A] shadow-md p-2 rounded-lg flex gap-2 text-[10px] hidden md:flex border border-[#1A3A1A]/10 dark:border-white/10">
          <button onClick={() => setState("ready")} className="px-2 py-1 bg-gray-100 dark:bg-white/10 dark:text-white rounded">1</button>
          <button onClick={() => setState("analyzing")} className="px-2 py-1 bg-gray-100 dark:bg-white/10 dark:text-white rounded">2</button>
          <button onClick={() => setState("results")} className="px-2 py-1 bg-gray-100 dark:bg-white/10 dark:text-white rounded">3</button>
          <button onClick={() => setState("comparison")} className="px-2 py-1 bg-gray-100 dark:bg-white/10 dark:text-white rounded">4</button>
        </div>

        <AnimatePresence mode="wait">
          {state === "ready" && (
            <motion.div key="s1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-6">
              
              <div className="bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[rgba(26,58,26,0.1)] dark:border-white/10 rounded-[14px] p-6 text-center flex flex-col items-center gap-4 shadow-sm transition-colors duration-500">
                <div className="w-16 h-16 bg-[#E8F5E0] dark:bg-white/10 rounded-full flex items-center justify-center text-[#1A3A1A] dark:text-white mb-2">
                  <Camera size={32} />
                </div>
                <h3 className="font-heading text-[24px] text-[#1A3A1A] dark:text-white">Take a close photo of the sick leaf</h3>
                <p className="text-[13px] text-[#6B7B5E] dark:text-white/60 max-w-[300px]">Ensure the leaf is well lit. Your GPS location is being captured automatically for verification.</p>
              </div>

              <div className="flex items-center justify-between text-[12px] bg-white dark:bg-[#1A3A1A] px-4 py-2.5 rounded-[8px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-sm transition-colors duration-500">
                <div className="flex items-center gap-2 text-[#1A3A1A] dark:text-white">
                  <div className="w-2 h-2 rounded-full bg-[#27AE60] animate-pulse" />
                  <span className="font-medium">Location verified:</span> Rohtak Field 1, 23m accuracy
                </div>
                <MapPin size={14} className="text-[#64B43C]" />
              </div>

              <div 
                onClick={handleUpload}
                className="group relative h-[300px] border-2 border-dashed border-[#C5D5B5] dark:border-white/20 rounded-[14px] flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[#64B43C] hover:bg-[#E8F5E0]/50 dark:hover:bg-white/5 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAFBF7] dark:bg-[#1A3A1A] flex items-center justify-center text-[#6B7B5E] dark:text-white/50 group-hover:text-[#64B43C] dark:group-hover:text-[#64B43C] transition-colors border border-[rgba(26,58,26,0.05)] shadow-sm">
                  <Camera size={28} />
                </div>
                <span className="text-[16px] text-[#1A3A1A] dark:text-white font-medium">Tap to photograph or upload</span>
                <span className="text-[13px] text-[#6B7B5E] dark:text-[#A4B598]">Accepts JPG, PNG</span>
              </div>

              <div className="bg-white dark:bg-[#1A3A1A] p-4 rounded-[10px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-sm flex items-center justify-between cursor-pointer group hover:bg-[#FAFBF7] dark:hover:bg-white/5 transition-colors duration-500">
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#6B7B5E] dark:text-[#A4B598]">Uploading for field:</span>
                  <span className="text-[14px] text-[#1A3A1A] dark:text-white font-medium flex items-center gap-2">🌾 Kharif Wheat — Field 1</span>
                </div>
                <ChevronDown size={16} className="text-[#1A3A1A] dark:text-white/70 group-hover:text-[#64B43C]" />
              </div>
            </motion.div>
          )}

          {state === "analyzing" && (
            <motion.div key="s2" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6">
              <div className="relative h-[400px] w-full rounded-[14px] overflow-hidden border border-[#1A3A1A]/10 shadow-[0_4px_16px_rgba(26,58,26,0.1)]">
                <img src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=800&q=80" alt="Crop" className="w-full h-full object-cover grayscale" />
                
                {/* Overlay & Scanning Line */}
                <div className="absolute inset-0 bg-[#1A3A1A]/80 z-10 flex flex-col items-center justify-center gap-6">
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-[#64B43C] shadow-[0_0_20px_4px_rgba(100,180,60,0.8)] z-20"
                    animate={{ y: [0, 400, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="w-16 h-16 rounded-full border-4 border-[#1A3A1A] border-t-[#64B43C] border-r-[#64B43C] animate-spin flex items-center justify-center relative">
                    <div className="w-8 h-8 rounded-full bg-[#1A3A1A] absolute inset-0 m-auto flex items-center justify-center">
                      <Search size={16} className="text-[#FAFBF7]" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center px-4">
                    <h3 className="font-heading text-[24px] text-[#FAFBF7] mb-2">Analyzing your crop...</h3>
                    <motion.p 
                      key={analyzingText}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[14px] text-[#E8F5E0]/80"
                    >
                      {analyzingText}
                    </motion.p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 z-30 bg-white p-2 rounded-[8px] text-[10px] text-[#1A3A1A] font-bold flex items-center gap-1.5 shadow-lg max-w-[120px]">
                  <Activity size={12} className="text-[#64B43C] shrink-0" />
                  This diagnosis will add to your Agri-Trust Score
                </div>
              </div>
            </motion.div>
          )}

          {state === "results" && (
            <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-6">
              
              {/* Score Impact Strip */}
              <div className="bg-[#1A3A1A] dark:bg-[#64B43C] text-[#FAFBF7] dark:text-[#1A3A1A] rounded-[14px] p-4 flex flex-col sm:flex-row items-center justify-between shadow-[0_4px_16px_rgba(26,58,26,0.1)] overflow-hidden relative transition-colors duration-500">
                <motion.div 
                  className="absolute inset-0 bg-[#64B43C]/20 dark:bg-white/10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <div className="flex items-center gap-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#64B43C] dark:bg-[#1A3A1A] flex items-center justify-center text-[#1A3A1A] dark:text-white">
                    <span className="font-bold text-[14px]">+12</span>
                  </div>
                  <span className="text-[14px] font-medium">Points added to your Agri-Trust Score</span>
                </div>
                <div className="flex items-center gap-4 mt-3 sm:mt-0 z-10 opacity-80 text-[13px] font-bold">
                  <span className="line-through font-normal">736</span> <ArrowRight size={14} className="text-[#64B43C] dark:text-[#1A3A1A]" /> <span className="text-[#64B43C] dark:text-[#1A3A1A] text-[16px]">748</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* DISEASE CARD */}
                <div className="bg-white dark:bg-[#1A3A1A] rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.04)] overflow-hidden relative flex flex-col transition-colors duration-500">
                  <div className="h-1 w-full bg-[#F39C12]" />
                  <div className="p-6 flex flex-col gap-4 relative">
                    <img src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=200&q=80" alt="Thumb" className="absolute top-6 right-6 w-16 h-16 rounded-[8px] object-cover border border-[#1A3A1A]/10 shadow-sm" />
                    
                    <div>
                      <div className="bg-[#1A3A1A]/5 dark:bg-white/10 text-[#1A3A1A] dark:text-white px-2.5 py-1 rounded-[6px] text-[11px] font-bold inline-flex items-center gap-1 mb-3 border border-[#1A3A1A]/10 dark:border-white/5">
                        <CheckCircle2 size={10} className="text-[#27AE60]" /> 94% confident
                      </div>
                      <h2 className="font-heading text-[28px] text-[#1A3A1A] dark:text-white leading-tight pr-20">Powdery Mildew</h2>
                      <div className="bg-[#F39C12]/10 text-[#D68910] px-2.5 py-1 rounded-full text-[12px] font-bold inline-flex mt-2 items-center gap-1">
                        <ShieldAlert size={12} /> Medium Severity
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#1A3A1A]/10 dark:border-white/10 text-[13px] text-[#1A3A1A]/80 dark:text-white/80 leading-relaxed">
                      <strong className="text-[#1A3A1A] dark:text-white">What is this?</strong><br/>
                      A fungal disease that affects a wide range of plants. It appears as white, powdery spots on leaves and stems, reducing crop yield if untreated.
                    </div>
                  </div>
                </div>

                {/* TREATMENT PLAN */}
                <div className="bg-[#FAFBF7] dark:bg-[#111e11] rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 p-6 shadow-sm flex flex-col transition-colors duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading text-[20px] text-[#1A3A1A] dark:text-white">Your 7-Day Plan</h3>
                    <div className="flex bg-white dark:bg-black/30 rounded-[6px] border border-[#1A3A1A]/10 dark:border-white/10 overflow-hidden text-[10px] font-bold text-[#1A3A1A] dark:text-white transition-colors duration-500">
                      <button className="px-2 py-1 bg-[#E8F5E0] dark:bg-[#64B43C] dark:text-[#1A3A1A]">EN</button>
                      <button className="px-2 py-1 border-l border-[#1A3A1A]/10 dark:border-white/10">हिं</button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {[
                      { day: 1, action: "Apply Neem Oil spray (2% concentration)", cost: "~₹80", done: false },
                      { day: 4, action: "Remove heavily infected lower leaves", cost: "Manual", done: false },
                      { day: 7, action: "Upload follow-up photo to verify recovery", cost: "Score boost", done: false, highlight: true }
                    ].map((step, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-[10px] transition-colors duration-500 ${step.highlight ? 'bg-[#E8F5E0] dark:bg-[#64B43C]/20 border border-[#64B43C]/20' : 'bg-white dark:bg-[#1A3A1A] border border-[#1A3A1A]/5 dark:border-white/5'}`}>
                        <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold transition-colors duration-500 ${step.highlight ? 'bg-[#64B43C] text-white' : 'bg-[#1A3A1A]/10 dark:bg-white/10 text-[#1A3A1A] dark:text-white'}`}>
                          D{step.day}
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-[13px] font-medium transition-colors duration-500 ${step.highlight ? 'text-[#1A3A1A] dark:text-[#E8F5E0]' : 'text-[#1A3A1A]/90 dark:text-white/90'}`}>{step.action}</span>
                          <span className="text-[11px] text-[#6B7B5E] dark:text-white/50 mt-0.5 transition-colors duration-500">{step.cost}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="bg-white dark:bg-[#1A3A1A] p-3 rounded-[10px] border border-[#1A3A1A]/10 dark:border-white/10 flex items-center justify-between transition-colors duration-500">
                      <div className="flex items-center gap-2">
                        <Bell size={16} className="text-[#64B43C]" />
                        <span className="text-[12px] font-medium text-[#1A3A1A] dark:text-white">Remind me on Day 7</span>
                      </div>
                      <div className="w-8 h-4 bg-[#64B43C] rounded-full relative cursor-pointer border-2 border-white dark:border-[#1A3A1A] shadow-sm transition-colors duration-500">
                        <div className="absolute right-[2px] top-[2px] w-3 h-3 bg-white dark:bg-[#1A3A1A] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button onClick={() => setState("comparison")} className="w-full text-center text-[12px] text-[#6B7B5E] hover:text-[#1A3A1A] underline mt-4">
                View comparison mode (Judge Demo)
              </button>
            </motion.div>
          )}

          {state === "comparison" && (
            <motion.div key="s4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6 max-w-[900px]">
              <div className="bg-white dark:bg-[#1A3A1A] rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_4px_16px_rgba(26,58,26,0.10)] overflow-hidden transition-colors duration-500">
                
                <div className="p-6 border-b border-[#1A3A1A]/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-[24px] text-[#1A3A1A] dark:text-white">Recovery Analysis</h2>
                    <p className="text-[13px] text-[#6B7B5E] dark:text-white/60">Day 1 to Day 7 comparison</p>
                  </div>
                  <div className="bg-[#E8F5E0] dark:bg-white/10 px-4 py-2 rounded-full border border-[#64B43C]/20 dark:border-white/20 flex items-center gap-2">
                    <span className="font-heading text-[24px] text-[#27AE60] dark:text-[#64B43C] leading-none">+67%</span>
                    <span className="text-[12px] font-bold text-[#1A3A1A] dark:text-white">improvement</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row relative">
                  <div className="flex-1 relative aspect-square md:aspect-auto md:h-[400px]">
                    <img src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=600&q=80" alt="Before" className="w-full h-full object-cover grayscale opacity-80" />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-[6px] text-[12px] font-medium border border-white/10">Day 1: Severe</div>
                  </div>
                  
                  {/* Split Icon */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-[#1A3A1A] rounded-full flex items-center justify-center z-10 shadow-lg border border-[#1A3A1A]/10 dark:border-white/20 text-[#1A3A1A] dark:text-white rotate-90 md:rotate-0 transition-colors duration-500">
                    <SplitSquareHorizontal size={20} />
                  </div>

                  <div className="flex-1 relative aspect-square md:aspect-auto md:h-[400px]">
                    <img src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=600&q=80" alt="After" className="w-full h-full object-cover saturate-150 contrast-125" />
                    <div className="absolute top-4 right-4 bg-[#64B43C]/90 backdrop-blur-md text-white px-3 py-1 rounded-[6px] text-[12px] font-medium border border-white/20 shadow-md">Day 7: Recovered</div>
                  </div>
                </div>

                <div className="p-6 bg-[#FAFBF7] dark:bg-[#111E11] transition-colors duration-500">
                  <p className="text-[16px] text-[#1A3A1A] dark:text-white font-medium text-center mb-6">
                    "Your wheat has significantly recovered. Excellent response time."
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 text-[12px]">
                    <div className="bg-white dark:bg-[#1A3A1A] px-3 py-2 rounded-[8px] border border-[#1A3A1A]/10 dark:border-white/10 shadow-sm flex items-center gap-2 transition-colors duration-500">
                      <Clock size={14} className="text-[#64B43C]" /> <span className="dark:text-white">Response Time</span> <span className="font-bold text-[#64B43C]">+5</span>
                    </div>
                    <div className="bg-white dark:bg-[#1A3A1A] px-3 py-2 rounded-[8px] border border-[#1A3A1A]/10 dark:border-white/10 shadow-sm flex items-center gap-2 transition-colors duration-500">
                      <TrendingUp size={14} className="text-[#64B43C]" /> <span className="dark:text-white">Crop Improvement</span> <span className="font-bold text-[#64B43C]">+8</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </FarmerLayout>
  );
}
