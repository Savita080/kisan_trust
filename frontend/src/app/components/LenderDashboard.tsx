import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Search, Bell, ShieldCheck, ChevronDown, CheckCircle2, AlertTriangle, TrendingUp, Users, FileText, ArrowRight, X, Maximize2, MapPin, Sun, Moon } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTheme } from "../contexts/ThemeContext";

const FARMERS = [
  { id: 1, name: "Ramesh Kumar", village: "Rohtak", state: "Haryana", score: 780, rank: 1, crops: ["Wheat", "Cotton"], disease: "Healthy", diseaseColor: "#27AE60" },
  { id: 2, name: "Suresh Patel", village: "Nashik", state: "Maharashtra", score: 742, rank: 2, crops: ["Grapes", "Onion"], disease: "Powdery Mildew", diseaseColor: "#C0392B" },
  { id: 3, name: "Anita Devi", village: "Ludhiana", state: "Punjab", score: 715, rank: 3, crops: ["Wheat", "Rice"], disease: "Aphids", diseaseColor: "#F39C12" },
  { id: 4, name: "Vijay Singh", village: "Karnal", state: "Punjab", score: 690, rank: 4, crops: ["Sugarcane"], disease: "Healthy", diseaseColor: "#27AE60" },
  { id: 5, name: "Rahul Sharma", village: "Pune", state: "Maharashtra", score: 640, rank: 5, crops: ["Cotton", "Soybean"], disease: "Leaf Rust", diseaseColor: "#F39C12" },
];

const CHART_DATA = [
  { subject: 'Location', A: 95, B: 85, fullMark: 100 },
  { subject: 'Frequency', A: 80, B: 90, fullMark: 100 },
  { subject: 'Improvement', A: 75, B: 65, fullMark: 100 },
  { subject: 'Seasonal', A: 90, B: 75, fullMark: 100 },
  { subject: 'Response', A: 85, B: 70, fullMark: 100 },
];

export default function LenderDashboard() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [selectedFarmers, setSelectedFarmers] = useState<number[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFarmer, setActiveFarmer] = useState<any>(null);

  const toggleFarmer = (id: number) => {
    setSelectedFarmers(prev => {
      if (prev.includes(id)) return prev.filter(f => f !== id);
      if (prev.length < 3) return [...prev, id];
      return prev;
    });
  };

  const openProfile = (farmer: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveFarmer(farmer);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0B120B] flex flex-col font-sans transition-colors duration-500">
      {/* TOP BAR */}
      <header className="h-[64px] bg-white dark:bg-[#111E11] border-b border-[#E2E8F0] dark:border-white/10 px-6 flex items-center justify-between shrink-0 sticky top-0 z-40 transition-colors duration-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-[8px] bg-[#1A3A1A] dark:bg-[#64B43C] flex items-center justify-center text-white dark:text-[#1A3A1A]"><ShieldCheck size={16} /></div>
            <span className="font-heading text-[18px] text-[#1A3A1A] dark:text-white">KisanTrust</span>
          </div>
          <div className="bg-[#F1F5F9] dark:bg-white/10 text-[#64748B] dark:text-white px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wide">Lender Portal</div>
        </div>

        <div className="flex-1 max-w-[500px] mx-8 relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] dark:text-white/50" />
          <input type="text" placeholder="Search farmer by phone number or name..." className="w-full h-10 pl-9 pr-4 rounded-[6px] bg-[#F8FAFC] dark:bg-[#1A3A1A] border border-[#E2E8F0] dark:border-white/10 focus:border-[#64B43C] focus:bg-white dark:focus:bg-[#1A3A1A] dark:text-white transition-colors outline-none text-[13px]" />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-medium text-[#1A3A1A] dark:text-white hidden sm:block">State Bank of India</span>
            <div className="bg-[#E8F5E0] dark:bg-[#1A3A1A] text-[#1A3A1A] dark:text-white px-2 py-1 rounded-[4px] text-[11px] font-bold flex items-center gap-1 border border-[#64B43C]/20 dark:border-white/10 transition-colors duration-500">
              <CheckCircle2 size={12} className="text-[#27AE60]" /> Verified
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full border transition-all flex items-center justify-center mr-2 ${isDarkTheme ? 'bg-[#1A3A1A] text-[#FAFBF7] border-[#64B43C]/30 hover:bg-[#64B43C]/20' : 'bg-[#E2E8F0] text-[#1A3A1A] border-[#CBD5E1] hover:bg-[#CBD5E1]'}`}
              title="Toggle Theme"
            >
              {isDarkTheme ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className="relative text-[#64748B] dark:text-white/70 hover:text-[#1A3A1A] dark:hover:text-white transition-colors">
              <Bell size={20} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#EF4444] rounded-full border border-white" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-hidden flex flex-col gap-6 max-w-[1400px] mx-auto w-full">
        
        {/* SUMMARY ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0">
          <div className="bg-white dark:bg-[#111E11] p-4 rounded-[10px] border border-[#E2E8F0] dark:border-white/10 shadow-sm transition-colors duration-500">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[12px] font-medium text-[#64748B] dark:text-[#A4B598]">Farmers reviewed today</span>
              <Users size={16} className="text-[#94A3B8] dark:text-white/50" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-bold text-[#1E293B] dark:text-white leading-none">124</span>
              <span className="text-[12px] font-bold text-[#10B981] mb-1 flex items-center">+12%</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111E11] p-4 rounded-[10px] border border-[#E2E8F0] dark:border-white/10 shadow-sm transition-colors duration-500">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[12px] font-medium text-[#64748B] dark:text-[#A4B598]">Loans approved this week</span>
              <FileText size={16} className="text-[#94A3B8] dark:text-white/50" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-bold text-[#1E293B] dark:text-white leading-none">42</span>
              <span className="text-[12px] font-bold text-[#10B981] mb-1 flex items-center">+5</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111E11] p-4 rounded-[10px] border border-[#E2E8F0] dark:border-white/10 shadow-sm transition-colors duration-500">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[12px] font-medium text-[#64748B] dark:text-[#A4B598]">Average Trust Score</span>
              <TrendingUp size={16} className="text-[#94A3B8] dark:text-white/50" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-heading text-[#1A3A1A] dark:text-white leading-none">685</span>
              <span className="text-[12px] font-medium text-[#64748B] dark:text-white/50 mb-1">/ 850</span>
            </div>
          </div>
          
          <div className="bg-[#FEF2F2] dark:bg-[#2A1111] p-4 rounded-[10px] border border-[#FCA5A5] dark:border-[#EF4444]/30 shadow-sm transition-colors duration-500">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[12px] font-medium text-[#991B1B] dark:text-[#FCA5A5]">Pending applications</span>
              <AlertTriangle size={16} className="text-[#EF4444]" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-bold text-[#7F1D1D] dark:text-[#FCA5A5] leading-none">18</span>
              <span className="text-[12px] font-bold text-[#B91C1C] dark:text-[#EF4444] mb-1">Requires attention</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 overflow-hidden">
          
          {/* LEADERBOARD (60%) */}
          <div className="lg:w-[60%] flex flex-col gap-4 bg-white dark:bg-[#111E11] border border-[#E2E8F0] dark:border-white/10 rounded-[12px] shadow-sm overflow-hidden flex-1 transition-colors duration-500">
            <div className="p-5 border-b border-[#E2E8F0] dark:border-white/10 flex items-center justify-between bg-[#F8FAFC] dark:bg-[#1A3A1A] transition-colors duration-500">
              <h2 className="font-heading text-[20px] text-[#1E293B] dark:text-white">Top Farmers by Score</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white dark:bg-[#1A3A1A] border border-[#CBD5E1] dark:border-white/10 rounded-[6px] text-[12px] font-medium text-[#475569] dark:text-white flex items-center gap-1 hover:bg-[#F1F5F9] dark:hover:bg-white/5 transition-colors">
                  All States <ChevronDown size={14} />
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-[#1A3A1A] border border-[#CBD5E1] dark:border-white/10 rounded-[6px] text-[12px] font-medium text-[#475569] dark:text-white flex items-center gap-1 hover:bg-[#F1F5F9] dark:hover:bg-white/5 transition-colors">
                  Sort: Score <ChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-2">
              {FARMERS.map((farmer, i) => (
                <div 
                  key={farmer.id} 
                  onClick={() => toggleFarmer(farmer.id)}
                  className={`relative p-3 rounded-[8px] border transition-all cursor-pointer group flex items-center gap-4 ${selectedFarmers.includes(farmer.id) ? 'border-[#64B43C] bg-[#F0FDF4] dark:bg-[#1A3A1A] dark:border-[#64B43C] shadow-sm' : 'border-[#E2E8F0] dark:border-white/5 hover:border-[#CBD5E1] dark:hover:border-white/20 hover:bg-[#F8FAFC] dark:hover:bg-[#1A3A1A]'}`}
                >
                  {/* Rank Badge */}
                  <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${farmer.rank === 1 ? 'bg-[#FEF08A] text-[#92400E] shadow-sm border border-[#FDE047]' : farmer.rank === 2 ? 'bg-[#E2E8F0] text-[#475569] shadow-sm border border-[#CBD5E1]' : farmer.rank === 3 ? 'bg-[#FED7AA] text-[#9A3412] shadow-sm border border-[#FDBA74]' : 'bg-transparent text-[#94A3B8]'}`}>
                    {farmer.rank}
                  </div>

                  {/* Avatar & Info */}
                  <div className="flex items-center gap-3 w-[200px] shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center font-heading text-[14px]">
                      {farmer.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#1E293B] dark:text-white text-[14px] leading-tight transition-colors">{farmer.name}</span>
                      <span className="text-[11px] text-[#64748B] dark:text-[#A4B598] transition-colors">{farmer.village}, {farmer.state}</span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex items-center gap-2 shrink-0 w-[100px]">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="absolute inset-0 transform -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke={isDarkTheme ? "#1A3A1A" : "#E2E8F0"} strokeWidth="12" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#64B43C" strokeWidth="12" strokeDasharray="251" strokeDashoffset={251 * (1 - farmer.score/850)} strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="font-heading text-[18px] text-[#1E293B] dark:text-white transition-colors">{farmer.score}</span>
                  </div>

                  {/* Crops */}
                  <div className="flex gap-1 flex-1 min-w-0">
                    {farmer.crops.map((c, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-[#F1F5F9] dark:bg-[#1A3A1A] text-[#475569] dark:text-white rounded-[4px] text-[10px] font-medium border border-[#E2E8F0] dark:border-white/10 truncate max-w-[60px] transition-colors">{c}</span>
                    ))}
                  </div>

                  {/* Disease Status */}
                  <div className="shrink-0 w-[100px] flex justify-end">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: farmer.diseaseColor }} title={farmer.disease} />
                  </div>

                  {/* Action Button (Hover) */}
                  <button 
                    onClick={(e) => openProfile(farmer, e)}
                    className="absolute right-4 opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-white dark:bg-[#1A3A1A] border border-[#CBD5E1] dark:border-white/20 rounded-[6px] text-[12px] font-medium text-[#0F172A] dark:text-white hover:bg-[#F8FAFC] dark:hover:bg-white/5 transition-all shadow-sm z-10"
                  >
                    View Profile
                  </button>

                  {/* Selected Checkbox */}
                  {selectedFarmers.includes(farmer.id) && (
                    <div className="absolute top-2 right-2 bg-[#64B43C] text-white rounded-full p-0.5 w-4 h-4 flex items-center justify-center z-10">
                      <CheckCircle2 size={10} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* COMPARISON PANEL (40%) */}
          <div className="lg:w-[40%] bg-white dark:bg-[#111E11] border border-[#E2E8F0] dark:border-white/10 rounded-[12px] shadow-sm flex flex-col overflow-hidden transition-colors duration-500">
            <div className="p-5 border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-[#1A3A1A] flex items-center justify-between transition-colors duration-500">
              <h2 className="font-heading text-[20px] text-[#1E293B] dark:text-white">Compare Farmers</h2>
              <span className="text-[12px] text-[#64748B] dark:text-white/60 font-medium">{selectedFarmers.length}/3 selected</span>
            </div>

            <div className="flex-1 p-5 overflow-y-auto custom-scrollbar bg-[#F8FAFC]/50 dark:bg-[#0B120B]">
              {selectedFarmers.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#94A3B8] dark:text-white/50">
                  <Maximize2 size={48} className="mb-4 text-[#CBD5E1] dark:text-white/20" />
                  <p className="text-[14px]">Click any farmer row to add them to comparison.</p>
                  <p className="text-[12px] mt-2">Select up to 3 to compare radar charts.</p>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                  
                  {/* Selected Chips */}
                  <div className="flex flex-wrap gap-2">
                    {selectedFarmers.map(id => {
                      const f = FARMERS.find(x => x.id === id)!;
                      return (
                        <div key={id} className="bg-white dark:bg-[#1A3A1A] border border-[#CBD5E1] dark:border-white/20 px-3 py-1.5 rounded-[6px] text-[12px] font-bold text-[#1E293B] dark:text-white flex items-center gap-2 shadow-sm transition-colors duration-500">
                          <div className={`w-2 h-2 rounded-full ${id === 1 ? 'bg-[#3B82F6]' : id === 2 ? 'bg-[#EF4444]' : 'bg-[#10B981]'}`} />
                          {f.name}
                          <button onClick={() => toggleFarmer(id)} className="text-[#94A3B8] hover:text-[#EF4444] transition-colors"><X size={12} /></button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Radar Chart */}
                  <div className="h-[250px] bg-white dark:bg-[#1A3A1A] rounded-[10px] border border-[#E2E8F0] dark:border-white/10 p-4 shadow-sm flex items-center justify-center transition-colors duration-500">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CHART_DATA}>
                        <PolarGrid stroke={isDarkTheme ? "rgba(255,255,255,0.1)" : "#E2E8F0"} />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: isDarkTheme ? 'rgba(255,255,255,0.5)' : '#64748B', fontSize: 10, fontWeight: 600 }} />
                        <Radar name="Ramesh" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
                        {selectedFarmers.length > 1 && <Radar name="Suresh" dataKey="B" stroke="#EF4444" fill="#EF4444" fillOpacity={0.2} />}
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-[#E0F2FE] dark:bg-[#1E3A8A]/20 border border-[#BFDBFE] dark:border-[#1E3A8A]/50 p-4 rounded-[10px] text-[13px] text-[#1E3A8A] dark:text-[#BFDBFE] transition-colors duration-500">
                    <strong className="font-bold flex items-center gap-1 mb-1"><AlertTriangle size={14} /> AI Recommendation:</strong>
                    Ramesh Kumar shows the most consistent location data (100% match over 3 months) — lower fraud risk compared to peers.
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button className="w-full h-10 rounded-[6px] bg-white dark:bg-[#1A3A1A] border border-[#CBD5E1] dark:border-white/20 text-[#1E293B] dark:text-white text-[13px] font-medium hover:bg-[#F8FAFC] dark:hover:bg-white/5 transition-colors">Request More Data</button>
                    <button className="w-full h-10 rounded-[6px] bg-[#1A3A1A] dark:bg-[#64B43C] text-[#FAFBF7] dark:text-[#1A3A1A] text-[13px] font-medium hover:bg-[#2A4A2A] dark:hover:bg-[#539630] shadow-md transition-colors duration-500">Approve Loan</button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* FARMER PROFILE DRAWER */}
      <AnimatePresence>
        {drawerOpen && activeFarmer && (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[480px] bg-white dark:bg-[#0B120B] shadow-2xl z-50 flex flex-col border-l border-[#E2E8F0] dark:border-white/10 transition-colors duration-500"
          >
            <div className="h-[200px] bg-[#1A3A1A] dark:bg-[#64B43C] relative shrink-0 overflow-hidden p-6 flex flex-col justify-between transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=800&q=80')] opacity-10 object-cover" />
              
              <div className="flex justify-between items-start relative z-10">
                <button onClick={() => setDrawerOpen(false)} className="text-white dark:text-[#1A3A1A] hover:bg-white/10 dark:hover:bg-black/10 p-1.5 rounded-[6px] transition-colors"><X size={20} /></button>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white dark:text-[#1A3A1A] px-3 py-1 rounded-[6px] text-[12px] font-bold flex items-center gap-1 shadow-sm">
                  <ShieldCheck size={14} className="text-[#64B43C] dark:text-[#1A3A1A]" /> DPDP Act Compliant
                </div>
              </div>

              <div className="flex items-end justify-between relative z-10">
                <div className="flex items-end gap-4">
                  <div className="w-[72px] h-[72px] rounded-full border-4 border-[#1A3A1A] dark:border-[#64B43C] bg-[#8B5E3C] flex items-center justify-center text-white font-heading text-[24px] shadow-lg transition-colors duration-500">
                    {activeFarmer.name.split(' ').map((n: string)=>n[0]).join('')}
                  </div>
                  <div className="flex flex-col pb-1">
                    <h2 className="font-heading text-[28px] text-white dark:text-[#1A3A1A] leading-tight">{activeFarmer.name}</h2>
                    <span className="text-[#CBD5E1] dark:text-[#1A3A1A]/80 text-[13px]">{activeFarmer.village}, {activeFarmer.state}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-heading text-[32px] text-[#64B43C] dark:text-white leading-none">{activeFarmer.score}</span>
                  <span className="text-[#94A3B8] dark:text-white/80 text-[10px] uppercase tracking-wider font-bold">Agri-Trust</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-[#F8FAFC] dark:bg-[#0B120B] transition-colors duration-500">
              
              <div className="flex gap-4 mb-6 border-b border-[#E2E8F0] dark:border-white/10 pb-2">
                <button className="text-[13px] font-bold text-[#1A3A1A] dark:text-white border-b-2 border-[#1A3A1A] dark:border-white pb-2 px-1 -mb-[9px] transition-colors">Overview</button>
                <button className="text-[13px] font-medium text-[#64748B] dark:text-[#A4B598] hover:text-[#1E293B] dark:hover:text-white pb-2 px-1 -mb-[9px] transition-colors">Diagnosis History</button>
                <button className="text-[13px] font-medium text-[#64748B] dark:text-[#A4B598] hover:text-[#1E293B] dark:hover:text-white pb-2 px-1 -mb-[9px] transition-colors">Loan History</button>
              </div>

              <div className="bg-white dark:bg-[#111E11] rounded-[12px] border border-[#E2E8F0] dark:border-white/10 p-5 shadow-sm mb-6 flex flex-col gap-4 transition-colors duration-500">
                <h3 className="text-[14px] font-bold text-[#1E293B] dark:text-white border-b border-[#E2E8F0] dark:border-white/10 pb-3">Creditworthiness Estimate</h3>
                <p className="text-[13px] text-[#475569] dark:text-white/80 leading-relaxed">
                  Based on 8 weeks of verified farm data, this farmer demonstrates above-average crop management. Location verification is 100% (all uploads within 47m of registered field).
                </p>
                <div className="bg-[#F0FDF4] dark:bg-[#1A3A1A] border border-[#BBF7D0] dark:border-[#64B43C]/20 p-3 rounded-[8px] flex items-center justify-between transition-colors duration-500">
                  <span className="text-[12px] font-bold text-[#166534] dark:text-[#A4B598]">Recommended Credit Range:</span>
                  <span className="text-[16px] font-heading font-bold text-[#15803D] dark:text-[#64B43C]">₹30,000 – ₹60,000</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#111E11] rounded-[12px] border border-[#E2E8F0] dark:border-white/10 p-5 shadow-sm transition-colors duration-500">
                <h3 className="text-[14px] font-bold text-[#1E293B] dark:text-white mb-4 flex items-center gap-2"><MapPin size={16} /> Verified Fields (2)</h3>
                <div className="h-[150px] bg-[#E2E8F0] rounded-[8px] relative overflow-hidden z-0 border border-[#E2E8F0]">
                  <MapContainer center={[28.8955, 76.6066]} zoom={13} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false} zoomControl={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[28.8955, 76.6066]} />
                  </MapContainer>
                  <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-[4px] text-[10px] font-bold shadow-sm z-[1000]">GPS Verified</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-[#111E11] border-t border-[#E2E8F0] dark:border-white/10 shrink-0 transition-colors duration-500">
              <button className="w-full h-12 rounded-[8px] bg-[#1A3A1A] dark:bg-[#64B43C] text-white dark:text-[#1A3A1A] font-medium text-[14px] hover:bg-[#2A4A2A] dark:hover:bg-[#539630] shadow-lg flex items-center justify-center gap-2 transition-colors duration-500">
                Initiate Loan Application <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-[2px] z-40"
            onClick={() => setDrawerOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
