import { Link } from "react-router";
import { CheckCircle2, ArrowRight, Camera, Smartphone, Lock } from "lucide-react";
import Navbar from "./Navbar";
import { useTheme } from "../contexts/ThemeContext";
import Particles from "../../components/Particles";

export default function AboutFarmers() {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`min-h-screen w-full font-sans relative overflow-x-hidden transition-colors duration-700 ${isDarkTheme ? "bg-[#1A3A1A] text-white" : "bg-[#FAFBF7] text-[#1A3A1A]"}`}>
      {/* Background Dot Pattern & Particles */}
      <div 
        className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-700 ${isDarkTheme ? "opacity-20" : "opacity-[0.03]"}`} 
        style={{ backgroundImage: `radial-gradient(${isDarkTheme ? "#64B43C" : "#1A3A1A"} 1.5px, transparent 1.5px)`, backgroundSize: "32px 32px" }} 
      />
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -z-0 pointer-events-none flex justify-center transition-opacity duration-700 ${isDarkTheme ? "opacity-80 mix-blend-screen" : "opacity-30 mix-blend-multiply"}`}>
        <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
          <Particles
            key={isDarkTheme ? 'dark' : 'light'}
            particleCount={430}
            particleSpread={9}
            speed={0.14}
            particleColors={isDarkTheme ? ["#ffffff","#ffffff","#ffffff"] : ["#64B43C","#1A3A1A","#A4E08B"]}
            moveParticlesOnHover={false}
            particleHoverFactor={1.4}
            alphaParticles={false}
            particleBaseSize={120}
            sizeRandomness={1}
            cameraDistance={28}
            disableRotation={false}
          />
        </div>
      </div>

      <Navbar />
      
      <main className="max-w-[1200px] mx-auto px-6 py-32 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className={`text-[48px] md:text-[64px] font-bold leading-tight mb-6 transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>
            Your smartphone is your strongest <span className="text-[#64B43C]">collateral.</span>
          </h1>
          <p className={`text-[18px] mb-8 ${isDarkTheme ? "text-white/70" : "text-[#4B5241]"}`}>
            Stop relying on middlemen. KisanTrust turns your agricultural expertise into a verifiable financial identity that banks trust.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            {[
              { icon: Camera, title: "Zero-cost AI crop diagnosis", desc: "Instantly detect diseases and get treatment plans in your local language." },
              { icon: Smartphone, title: "No app downloads", desc: "Access everything securely through your phone's browser, saving data and storage." },
              { icon: Lock, title: "You own your data", desc: "Your farming history is encrypted. You grant access to lenders only when you need a loan." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#64B43C]/10 flex items-center justify-center text-[#64B43C] flex-shrink-0">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className={`font-bold text-[18px] mb-1 transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>{feature.title}</h3>
                  <p className={`text-[14px] ${isDarkTheme ? "text-white/60" : "text-gray-500"}`}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/register" className="inline-flex px-8 py-4 rounded-full font-bold bg-[#64B43C] text-[#1A3A1A] hover:bg-[#5AA44E] hover:text-white transition-colors items-center gap-2">
            Start Building Your Score <ArrowRight size={20} />
          </Link>
        </div>

        <div className={`relative rounded-[32px] overflow-hidden border p-8 flex flex-col items-center justify-center min-h-[500px] ${isDarkTheme ? "bg-[#162B16] border-[#64B43C]/20" : "bg-[#EEF6EB] border-[#64B43C]/30"}`}>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#64B43C 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
          
          <div className={`relative z-10 w-full max-w-[340px] p-6 rounded-[24px] shadow-xl backdrop-blur-md ${isDarkTheme ? "bg-[#111E11]/90 border border-white/10" : "bg-white/90 border border-white"}`}>
            <div className="flex justify-between items-center mb-6">
              <span className={`text-[14px] font-bold ${isDarkTheme ? "text-white/60" : "text-gray-400"}`}>Current Status</span>
              <span className="px-2 py-1 rounded bg-[#64B43C]/20 text-[#64B43C] text-[12px] font-bold">Excellent</span>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-[64px] font-bold text-[#64B43C] leading-none mb-2">780</div>
              <div className={`text-[14px] ${isDarkTheme ? "text-white/80" : "text-[#4B5241]"}`}>Agri-Trust Score</div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Verified Logs", val: "42" },
                { label: "Fields Mapped", val: "3 Acres" },
                { label: "Loan Offers", val: "4 Pre-approved" }
              ].map((stat, i) => (
                <div key={i} className={`flex justify-between p-3 rounded-[12px] ${isDarkTheme ? "bg-white/5" : "bg-gray-50"}`}>
                  <span className={`text-[13px] ${isDarkTheme ? "text-white/60" : "text-gray-500"}`}>{stat.label}</span>
                  <span className={`text-[13px] font-bold transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
