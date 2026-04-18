import { Link } from "react-router";
import { ArrowRight, ShieldCheck, TrendingUp, Search, Building } from "lucide-react";
import Navbar from "./Navbar";
import { useTheme } from "../contexts/ThemeContext";
import Particles from "../../components/Particles";

export default function AboutLenders() {
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
        
        <div className={`order-2 lg:order-1 relative rounded-[32px] overflow-hidden border p-8 flex flex-col items-center justify-center min-h-[500px] ${isDarkTheme ? "bg-[#111E11] border-[#64B43C]/20" : "bg-[#1A3A1A] border-[#1A3A1A]/30"}`}>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(45deg, #64B43C 25%, transparent 25%, transparent 75%, #64B43C 75%, #64B43C), linear-gradient(45deg, #64B43C 25%, transparent 25%, transparent 75%, #64B43C 75%, #64B43C)", backgroundSize: "60px 60px", backgroundPosition: "0 0, 30px 30px" }} />
          
          <div className={`relative z-10 w-full max-w-[380px] p-8 rounded-[24px] shadow-2xl backdrop-blur-md ${isDarkTheme ? "bg-[#1A3A1A]/90 border border-white/10" : "bg-white/95 border border-white"}`}>
            <h3 className={`font-heading text-[20px] font-bold mb-6 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>Risk Analysis Engine</h3>
            
            <div className="space-y-4">
              {[
                { label: "Profile", val: "Verified", color: "text-[#27AE60]" },
                { label: "Location Consistency", val: "94%", color: "text-[#27AE60]" },
                { label: "Disease Prevention", val: "High", color: "text-[#27AE60]" },
                { label: "Default Risk", val: "1.2%", color: "text-[#E67E22]" }
              ].map((stat, i) => (
                <div key={i} className={`flex justify-between items-center p-4 rounded-[14px] ${isDarkTheme ? "bg-white/5" : "bg-gray-50 border border-gray-100"}`}>
                  <span className={`text-[14px] font-medium ${isDarkTheme ? "text-white/70" : "text-gray-500"}`}>{stat.label}</span>
                  <span className={`text-[14px] font-bold ${stat.color}`}>{stat.val}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 rounded-[12px] bg-[#64B43C] text-[#1A3A1A] font-bold shadow-md hover:bg-[#5AA44E] hover:text-white transition-colors">
              Approve ₹45,000 Loan
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h1 className="text-[48px] md:text-[64px] font-bold leading-tight mb-6">
            Safely tap into the rural <span className="text-[#64B43C]">credit economy.</span>
          </h1>
          <p className={`text-[18px] mb-8 ${isDarkTheme ? "text-white/70" : "text-[#4B5241]"}`}>
            Expand your lending portfolio to millions of unbanked farmers through predictive risk analysis powered by actual agronomy data.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            {[
              { icon: ShieldCheck, title: "Verified Data Points", desc: "No manual data entry. We use GPS-tagged, time-stamped visual evidence directly from the fields." },
              { icon: TrendingUp, title: "Automated Risk Assessment", desc: "Our proprietary Agri-Trust algorithm translates crop health patterns into clear financial risk metrics." },
              { icon: Building, title: "Zero Origination Friction", desc: "Access a dashboard of pre-qualified farmers actively seeking credit, entirely DPDP Act compliant." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#64B43C]/10 flex items-center justify-center text-[#64B43C] flex-shrink-0">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-1">{feature.title}</h3>
                  <p className={`text-[14px] ${isDarkTheme ? "text-white/60" : "text-gray-500"}`}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/lender-login" className="inline-flex px-8 py-4 rounded-full font-bold bg-[#1A3A1A] text-white border border-[#64B43C] hover:bg-[#64B43C] hover:text-[#1A3A1A] transition-colors items-center gap-2 shadow-[0_8px_20px_rgba(100,180,60,0.2)]">
            Join the Lender Network <ArrowRight size={20} />
          </Link>
        </div>
      </main>
    </div>
  );
}
