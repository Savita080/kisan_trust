import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Leaf, ArrowRight, Shield, Building, TrendingUp, CheckCircle2, Camera } from "lucide-react";

import React from 'react';
import { useTheme } from "../contexts/ThemeContext";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  const [view, setView] = useState<"farmer-login" | "farmer-register" | "lender-login">(
    location.pathname === "/register" ? "farmer-register" : location.pathname === "/lender-login" ? "lender-login" : "farmer-login"
  );
  const [step, setStep] = useState(1); // For register
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === "lender-login") navigate("/lender");
    else navigate("/dashboard");
  };

  const renderLeftPanel = () => {
    if (view === "lender-login") {
      return (
        <div className="w-[45%] bg-[#1A331E] h-full relative overflow-hidden flex flex-col justify-end p-12 text-[#FAFBF7]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Building size={400} className="text-white absolute -right-20 -bottom-20 transform -rotate-12" />
          </div>
          <div className="z-10 mb-20 flex flex-col gap-5">
            <h2 className="font-heading text-[32px] text-[#E8F5E0] leading-tight mb-4">Empowering Rural Finance</h2>
            
            <div className="bg-white/10 p-4 rounded-[14px] border border-white/5 inline-flex gap-4 items-center backdrop-blur-sm max-w-[85%]">
              <Shield size={24} className="text-[#64B43C]" />
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-white">Verified Data</span>
                <span className="text-[13px] text-white/80">GPS-tagged fields & authentic crop histories</span>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-[14px] border border-white/5 inline-flex gap-4 items-center backdrop-blur-sm max-w-[85%] ml-6">
              <TrendingUp size={24} className="text-[#64B43C]" />
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-white">AI Risk Assessment</span>
                <span className="text-[13px] text-white/80">Data-driven creditworthiness insights</span>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-[14px] border border-white/5 inline-flex gap-4 items-center backdrop-blur-sm max-w-[85%] ml-12">
              <CheckCircle2 size={24} className="text-[#64B43C]" />
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-white">DPDP Compliant</span>
                <span className="text-[13px] text-white/80">100% anonymized prior to consent</span>
              </div>
            </div>

            <div className="font-vernacular text-[32px] mt-12 opacity-80 text-[#FAFBF7]">किसान का विश्वास</div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-[45%] bg-[#1A331E] h-full relative overflow-hidden flex flex-col justify-end p-12 text-[#FAFBF7]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Leaf size={400} className="text-white absolute -right-20 -bottom-20 transform -rotate-12" />
        </div>

        <div className="z-10 mb-20 flex flex-col gap-5">
          <h2 className="font-heading text-[32px] text-[#E8F5E0] leading-tight mb-4">Your Farm, Your Credit</h2>
          
          <div className="bg-white/10 p-4 rounded-[14px] border border-white/5 inline-flex gap-4 items-center backdrop-blur-sm max-w-[85%]">
            <Camera size={24} className="text-[#64B43C]" />
            <div className="flex flex-col">
              <span className="font-bold text-[16px] text-white">Instant AI Diagnosis</span>
              <span className="text-[13px] text-white/80">Upload crop photos to detect diseases in seconds</span>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-[14px] border border-white/5 inline-flex gap-4 items-center backdrop-blur-sm max-w-[85%] ml-6">
            <TrendingUp size={24} className="text-[#64B43C]" />
            <div className="flex flex-col">
              <span className="font-bold text-[16px] text-white">Build Agri-Trust Score</span>
              <span className="text-[13px] text-white/80">Grow your credit rating with every harvest log</span>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-[14px] border border-white/5 inline-flex gap-4 items-center backdrop-blur-sm max-w-[85%] ml-12">
            <Building size={24} className="text-[#64B43C]" />
            <div className="flex flex-col">
              <span className="font-bold text-[16px] text-white">Direct Loan Access</span>
              <span className="text-[13px] text-white/80">Get approved by 12+ Banks across India</span>
            </div>
          </div>

          <div className="font-vernacular text-[40px] mt-12 text-[#FAFBF7]">किसान का विश्वास</div>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    if (view === "farmer-register") {
      return (
        <form onSubmit={handleRegister} className="flex flex-col gap-6 w-full max-w-[440px] mt-8">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 rounded-full flex-1 transition-colors duration-500 ${step >= i ? "bg-[#64B43C]" : "bg-[#C5D5B5] dark:bg-white/10"}`} />
            ))}
          </div>

          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Full Name</label>
                <input required type="text" placeholder="जैसे: Ramesh Kumar" className="h-12 px-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none duration-500" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Mobile Number</label>
                <div className="relative flex items-center">
                  <div className="absolute left-1 top-1 bottom-1 px-3 bg-[#E8F5E0] dark:bg-white/5 text-[#1A3A1A] dark:text-white/60 text-[14px] rounded-[6px] flex items-center font-medium border border-[#C5D5B5]/50 dark:border-white/5 transition-colors duration-500">
                    +91
                  </div>
                  <input required type="tel" className="h-12 pl-16 pr-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none w-full duration-500" placeholder="98765 43210" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">State</label>
                <select className="h-12 px-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none appearance-none duration-500">
                  <option value="">Select State</option>
                  <option value="haryana">Haryana</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="punjab">Punjab</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Password</label>
                <input 
                  required 
                  type="password" 
                  onChange={(e) => setPasswordStrength(Math.min(100, e.target.value.length * 15))}
                  className="h-12 px-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none duration-500" 
                />
                <div className="h-1 w-full bg-[#C5D5B5] dark:bg-white/10 rounded-full mt-1 overflow-hidden transition-colors duration-500">
                  <div className="h-full bg-[#64B43C] transition-all" style={{ width: `${passwordStrength}%` }} />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Land Size</label>
                <div className="relative flex items-center">
                  <input required type="number" step="0.1" className="h-12 pl-4 pr-20 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none w-full duration-500" placeholder="2.5" />
                  <div className="absolute right-1 top-1 bottom-1 px-3 bg-[#E8F5E0] dark:bg-white/5 text-[#1A3A1A] dark:text-white/60 text-[13px] rounded-[6px] flex items-center border border-[#C5D5B5]/50 dark:border-white/5 transition-colors duration-500">
                    acres
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Crop Types</label>
                <div className="flex flex-wrap gap-2">
                  {["Wheat", "Rice", "Sugarcane", "Cotton", "Vegetables"].map(crop => (
                    <button key={crop} type="button" className="px-4 py-2 rounded-full border border-[#C5D5B5] dark:border-white/20 text-[13px] text-[#6B7B5E] dark:text-white/70 hover:border-[#64B43C] focus:bg-[#64B43C] focus:text-white focus:border-[#64B43C] transition-colors duration-500">
                      {crop}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[200px] w-full rounded-[8px] overflow-hidden border border-[#C5D5B5] mt-2 relative z-0">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=76.5566%2C28.8455%2C76.6566%2C28.9455&layer=mapnik&marker=28.8955%2C76.6066"
                  style={{ height: "100%", width: "100%", border: "none" }}
                  title="Field Location"
                />
                <div className="absolute bottom-2 left-0 right-0 flex justify-center z-[1000]">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[12px] font-bold text-[#1A3A1A] shadow-sm border border-[#C5D5B5]/50">
                    Tap to confirm your field center
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-5">
              <div className="bg-white dark:bg-[#1A3A1A] p-6 rounded-[14px] border border-[rgba(26,58,26,0.1)] dark:border-white/10 shadow-[0_2px_8px_rgba(26,58,26,0.07)] transition-colors duration-500">
                <h3 className="font-heading text-[20px] text-[#1A3A1A] dark:text-white mb-4">Profile Summary</h3>
                <div className="flex flex-col gap-3 text-[14px] text-[#6B7B5E] dark:text-white/70">
                  <div className="flex justify-between"><span className="text-[#1A3A1A] dark:text-white">Name</span><span>Ramesh Kumar</span></div>
                  <div className="flex justify-between"><span className="text-[#1A3A1A] dark:text-white">Mobile</span><span>+91 98765 43210</span></div>
                  <div className="flex justify-between"><span className="text-[#1A3A1A] dark:text-white">State</span><span>Haryana</span></div>
                  <div className="flex justify-between"><span className="text-[#1A3A1A] dark:text-white">Land Size</span><span>2.5 acres</span></div>
                  <div className="flex justify-between"><span className="text-[#1A3A1A] dark:text-white">Crops</span><span>Wheat, Cotton</span></div>
                </div>
              </div>
              <div className="bg-[#E8F5E0] dark:bg-white/5 p-4 rounded-[10px] border dark:border-[#64B43C]/20 text-[13px] text-[#1A3A1A] dark:text-white/80 flex gap-3 transition-colors duration-500">
                <Leaf size={24} className="text-[#64B43C] shrink-0" />
                <p>Your Agri-Trust Score starts at 0. Every diagnosis you upload builds it.</p>
              </div>
            </div>
          )}

          <button type="submit" className="w-full h-[44px] rounded-[10px] bg-[#1A3A1A] dark:bg-[#64B43C] text-[#FAFBF7] dark:text-[#1A3A1A] font-medium text-[16px] hover:scale-[1.02] hover:bg-[#2A4A2A] dark:hover:bg-[#539630] transition-all mt-4">
            {step === 3 ? "Confirm & Register" : "Continue"}
          </button>
          
          <div className="text-center text-[14px] text-[#6B7B5E] dark:text-white/60 mt-4 transition-colors duration-500">
            Already have an account? <button type="button" onClick={() => setView("farmer-login")} className="text-[#64B43C] font-medium hover:underline">Login →</button>
          </div>
        </form>
      );
    }

    if (view === "farmer-login") {
      return (
        <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full max-w-[400px] mt-8">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Mobile Number</label>
            <div className="relative flex items-center">
              <div className="absolute left-1 top-1 bottom-1 px-3 bg-[#E8F5E0] dark:bg-white/5 text-[#1A3A1A] dark:text-white/60 text-[14px] rounded-[6px] flex items-center font-medium border border-[#C5D5B5]/50 dark:border-white/5 transition-colors duration-500">
                +91
              </div>
              <input required type="tel" className="h-12 pl-16 pr-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none w-full duration-500" placeholder="98765 43210" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Password</label>
            <input required type="password" className="h-12 px-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none duration-500" />
            <a href="#" className="text-[13px] text-[#6B7B5E] dark:text-white/60 text-right hover:text-[#64B43C] mt-1 transition-colors">Forgot password?</a>
          </div>
          
          <button type="submit" className="w-full h-[44px] rounded-[10px] bg-[#1A3A1A] dark:bg-[#64B43C] text-[#FAFBF7] dark:text-[#1A3A1A] font-medium text-[16px] hover:scale-[1.02] hover:bg-[#2A4A2A] dark:hover:bg-[#539630] transition-all mt-4">
            Login
          </button>
          
          <div className="text-center text-[14px] text-[#6B7B5E] dark:text-white/60 mt-4 transition-colors duration-500">
            New farmer? <button type="button" onClick={() => setView("farmer-register")} className="text-[#64B43C] font-medium hover:underline">Create account →</button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#C5D5B5] dark:border-white/10 text-center transition-colors duration-500">
            <button type="button" onClick={() => setView("lender-login")} className="text-[13px] text-[#6B7B5E] dark:text-white/80 hover:text-[#1A3A1A] dark:hover:text-white flex items-center justify-center gap-2 w-full transition-colors">
              <Building size={16} /> I am a Lender / Bank
            </button>
          </div>
        </form>
      );
    }

    if (view === "lender-login") {
      return (
        <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full max-w-[400px] mt-8">
          <div className="bg-[#E8F5E0] dark:bg-[#64B43C]/10 border border-[#64B43C]/30 text-[#1A3A1A] dark:text-white/90 px-4 py-3 rounded-[8px] text-[13px] flex items-start gap-3 mb-4 transition-colors duration-500">
            <Shield size={18} className="text-[#64B43C] shrink-0 mt-0.5" />
            <p>Farmer data is anonymized until you initiate a credit inquiry.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Organization Name</label>
            <input required type="text" className="h-12 px-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none w-full duration-500" placeholder="e.g. State Bank of India" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Work Email</label>
            <input required type="email" className="h-12 px-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none w-full duration-500" placeholder="you@bank.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#1A3A1A] dark:text-white">Password</label>
            <input required type="password" className="h-12 px-4 rounded-[8px] bg-[#FAFBF7] dark:bg-[#1A3A1A] border border-[#C5D5B5] dark:border-white/10 focus:border-l-[3px] focus:border-l-[#64B43C] focus:bg-white dark:focus:bg-[#111E11] dark:text-white transition-all outline-none duration-500" />
          </div>
          
          <button type="submit" className="w-full h-[44px] rounded-[10px] bg-[#64B43C] text-[#1A3A1A] font-medium text-[16px] hover:scale-[1.02] hover:bg-[#75C44E] transition-all mt-4">
            Access Portal
          </button>
          
          <div className="mt-8 pt-8 border-t border-[#C5D5B5] dark:border-white/10 text-center transition-colors duration-500">
            <button type="button" onClick={() => setView("farmer-login")} className="text-[13px] text-[#6B7B5E] dark:text-white/80 hover:text-[#1A3A1A] dark:hover:text-white flex items-center justify-center gap-2 w-full transition-colors">
              <Leaf size={16} /> Return to Farmer Login
            </button>
          </div>
        </form>
      );
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#FAFBF7] dark:bg-[#0B120B] transition-colors duration-500">
      {showSuccess && (
        <div 
          className="fixed top-0 left-0 right-0 bg-[#27AE60] text-white p-4 flex items-center justify-center z-50 shadow-md font-medium"
        >
          <CheckCircleIcon className="mr-2" /> Profile created! Your Agri-Trust journey begins.
        </div>
      )}

      {/* Left Decorative Panel */}
      {renderLeftPanel()}

      {/* Right Form Panel */}
      <div className="w-[55%] flex flex-col justify-center px-24 py-12 overflow-y-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#6B7B5E] dark:text-[#A4B598] hover:text-[#1A3A1A] dark:hover:text-white transition-colors mb-12 max-w-fit">
          <ArrowRight className="transform rotate-180" size={16} /> Back to home
        </Link>
        
        <div className="flex items-center gap-3 mb-2">
          <img src="/logo.png" alt="KisanTrust Logo" className="w-10 h-10 object-contain" />
          {view === "lender-login" && (
            <div className="bg-[#E8F5E0] dark:bg-[#64B43C]/20 text-[#1A3A1A] dark:text-[#64B43C] px-2 py-1 rounded-[6px] text-[12px] font-medium flex items-center gap-1 border border-[#64B43C]/20 transition-colors duration-500">
              <Shield size={12} className="text-[#64B43C]"/> Verified Lender Portal
            </div>
          )}
        </div>
        
        <h1 className="font-heading text-[28px] text-[#1A3A1A] dark:text-white transition-colors duration-500">
          {view === "farmer-register" && "Create your farmer profile"}
          {view === "farmer-login" && "Welcome back to your farm"}
          {view === "lender-login" && "Lender Authentication"}
        </h1>
        
        <p className="text-[16px] text-[#6B7B5E] dark:text-white/60 mt-2 transition-colors duration-500">
          {view === "farmer-register" && "Your journey to fair credit starts here"}
          {view === "farmer-login" && "Log in to check your crops and score"}
          {view === "lender-login" && "Secure access to verified farm data"}
        </p>

        {renderForm()}
      </div>
    </div>
  );
}

// Icons needed for above components
function TrendingUpIcon() {
  return <TrendingUp size={24} className="text-[#64B43C]" />;
}
function CheckCircleIcon({ className }: { className?: string }) {
  return <CheckCircle2 size={24} className={className || "text-[#E8F5E0]"} />;
}
