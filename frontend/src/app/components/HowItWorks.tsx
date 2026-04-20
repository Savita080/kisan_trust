import { Link } from "react-router";
import { Camera, Brain, TrendingUp, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import { useTheme } from "../contexts/ThemeContext";
import Particles from "../../components/Particles";

export default function HowItWorks() {
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
      
      <main className="max-w-[1200px] mx-auto px-6 py-32 mt-12">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <h1 className={`text-[48px] md:text-[64px] font-bold leading-tight mb-6 transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>
            Bridging the gap between <span className="text-[#64B43C]">agriculture</span> and <span className="text-[#64B43C]">finance.</span>
          </h1>
          <p className={`text-[18px] md:text-[20px] ${isDarkTheme ? "text-white/70" : "text-[#4B5241]"}`}>
            70% of farmers are denied credit due to a lack of formal financial history. KisanTrust transforms daily agricultural practices into verifiable data, unlocking micro-loans for those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
          {/* Connector Line */}
          <div className={`hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed z-0 ${isDarkTheme ? "border-white/10" : "border-[#1A3A1A]/10"}`} />

          {/* Step 1 */}
          <div className={`relative z-10 p-8 rounded-[24px] border border-gray-100 flex flex-col items-center text-center transition-all duration-300 ${isDarkTheme ? "bg-[#162B16] border-white/5" : "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]"}`}>
            <div className="w-16 h-16 rounded-2xl bg-[#64B43C]/10 flex items-center justify-center text-[#64B43C] mb-6">
              <Camera size={32} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm absolute -top-4 -right-2 border shadow-sm ${isDarkTheme ? "bg-[#1A3A1A] text-white border-[#64B43C]" : "bg-white text-[#4B5241] border-gray-100"}`}>1</div>
            <h3 className={`font-bold text-[20px] mb-3 transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>Upload Photo</h3>
            <p className={`text-[14px] leading-relaxed ${isDarkTheme ? "text-white/70" : "text-gray-500"}`}>Farmers capture crop issues securely through any browser. No app install required.</p>
          </div>

          {/* Step 2 */}
          <div className={`relative z-10 p-8 rounded-[24px] border flex flex-col items-center text-center transition-all duration-300 ${isDarkTheme ? "bg-[#162B16] border-white/5" : "bg-white border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"}`}>
            <div className="w-16 h-16 rounded-2xl bg-[#64B43C]/10 flex items-center justify-center text-[#64B43C] mb-6">
              <Brain size={32} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm absolute -top-4 -right-2 border shadow-sm ${isDarkTheme ? "bg-[#1A3A1A] text-white border-[#64B43C]" : "bg-white text-[#4B5241] border-gray-100"}`}>2</div>
            <h3 className={`font-bold text-[20px] mb-3 transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>AI Diagnosis</h3>
            <p className={`text-[14px] leading-relaxed ${isDarkTheme ? "text-white/70" : "text-gray-500"}`}>Real-time disease detection with immediate, actionable treatments available in regional languages.</p>
          </div>

          {/* Step 3 */}
          <div className={`relative z-10 p-8 rounded-[24px] border flex flex-col items-center text-center transition-all duration-300 ${isDarkTheme ? "bg-[#162B16] border-white/5" : "bg-white border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"}`}>
            <div className="w-16 h-16 rounded-2xl bg-[#64B43C]/10 flex items-center justify-center text-[#64B43C] mb-6">
              <TrendingUp size={32} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm absolute -top-4 -right-2 border shadow-sm ${isDarkTheme ? "bg-[#1A3A1A] text-white border-[#64B43C]" : "bg-white text-[#4B5241] border-gray-100"}`}>3</div>
            <h3 className={`font-bold text-[20px] mb-3 transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>Agri-Trust Score</h3>
            <p className={`text-[14px] leading-relaxed ${isDarkTheme ? "text-white/70" : "text-gray-500"}`}>Every diagnosis log creates a verified history, boosting the farmer's proprietary credit score.</p>
          </div>

          {/* Step 4 */}
          <div className={`relative z-10 p-8 rounded-[24px] border flex flex-col items-center text-center transition-all duration-300 ${isDarkTheme ? "bg-[#162B16] border-white/5" : "bg-white border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"}`}>
            <div className="w-16 h-16 rounded-2xl bg-[#64B43C]/10 flex items-center justify-center text-[#64B43C] mb-6">
              <Building size={32} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm absolute -top-4 -right-2 border shadow-sm ${isDarkTheme ? "bg-[#1A3A1A] text-white border-[#64B43C]" : "bg-white text-[#4B5241] border-gray-100"}`}>4</div>
            <h3 className={`font-bold text-[20px] mb-3 transition-colors duration-500 ${isDarkTheme ? "text-white" : "text-[#1A3A1A]"}`}>Unlock Capital</h3>
            <p className={`text-[14px] leading-relaxed ${isDarkTheme ? "text-white/70" : "text-gray-500"}`}>Banks access DPDP-compliant profiles to issue instant micro-loans based on actual farm health.</p>
          </div>
        </div>

        <div className="mt-24 flex justify-center gap-6">
          <Link to="/register" className="px-8 py-4 rounded-full font-bold bg-[#64B43C] text-white hover:bg-[#5AA44E] transition-colors flex items-center gap-2">
            Try the App <ArrowRight size={20} />
          </Link>
        </div>
      </main>
    </div>
  );
}
