import { SidebarMenu } from "../sidebar-menu";
import { SidebarSeparator } from "../ui/seperator";
import Sidebar, { SidebarAvatar, SidebarItem } from "../ui/sidebar";
import {
  LayoutDashboard,
  LineChart,
  Wallet,
  Bot,
  Settings,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Bell,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-[#0a0a0c] to-[#0f0f11] text-white">
      {/* Sidebar */}
      <Sidebar className="w-[20%] bg-[#111214]/80 backdrop-blur-xl border-r border-zinc-800/50 py-4">
        <div className="px-2 flex items-center justify-center">
          <SidebarAvatar
            User={{
              name: "Ayush",
              email: "ayush@signalist.ai",
              emailVerified: true,
              createdAt: "2023-01-01",
            }}
          />
          <div>
            <SidebarMenu />
          </div>
        </div>
        <SidebarSeparator />
        <div className="flex flex-col items-center gap-4">
          <SidebarItem active icon={LayoutDashboard} link="/dashboard">
            <span className="text-xs mt-1">Dashboard</span>
          </SidebarItem>
          <SidebarItem icon={LineChart} link="/markets">
            <span className="text-xs mt-1">Markets</span>
          </SidebarItem>
          <SidebarItem icon={Wallet} link="/portfolio">
            <span className="text-xs mt-1">Portfolio</span>
          </SidebarItem>
          <SidebarItem icon={Bot} link="/ai-chat">
            <span className="text-xs mt-1">AI Chat</span>
          </SidebarItem>
          <SidebarItem icon={Settings} link="/settings">
            <span className="text-xs mt-1">Settings</span>
          </SidebarItem>
        </div>
      </Sidebar>

      {/* Main Dashboard */}
      <main className="flex-1 p-8 overflow-y-auto grid grid-cols-12 gap-8">
        {/* AI Top Signal */}
        <section className="col-span-5 bg-gradient-to-br from-[#151619] to-[#1a1d21] rounded-3xl p-6 border border-zinc-800/50 shadow-2xl hover:shadow-green-500/10 transition-all duration-300 group">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-green-400" />
            <h2 className="text-sm font-semibold text-zinc-400">
              AI Top Signal of the Day
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium border border-green-500/30">
                STRONG BUY
              </span>
              <TrendingUp className="w-4 h-4 text-green-400 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              TSLA / Tesla Inc.
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-zinc-800/50 rounded-lg p-3">
                <div className="text-zinc-400 text-xs mb-1">Confidence</div>
                <div className="text-green-400 font-bold text-lg">95%</div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-3">
                <div className="text-zinc-400 text-xs mb-1">Price</div>
                <div className="text-white font-bold text-lg">$218.45</div>
              </div>
            </div>
            <div className="flex justify-between text-sm bg-zinc-900/50 rounded-lg p-3">
              <span className="text-zinc-400">Target: <span className="text-green-400 font-medium">$235</span></span>
              <span className="text-zinc-400">Stop Loss: <span className="text-red-400 font-medium">$205</span></span>
            </div>
            <button className="mt-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Execute Trade
            </button>
          </div>
        </section>

        {/* Portfolio Health */}
        <section className="col-span-3 bg-gradient-to-br from-[#151619] to-[#1a1d21] rounded-3xl p-6 border border-zinc-800/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-blue-400" />
            <h2 className="text-sm font-semibold text-zinc-400">
              Portfolio Health
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-3">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-4 border-green-500/30 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <span className="text-green-400 text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              +18.2%
            </span>
            <span className="text-zinc-400 text-sm font-medium">Portfolio Balance</span>
            <div className="text-xs text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full">
              Last 30 days
            </div>
          </div>
        </section>

        {/* AI Sector Sentiment */}
        <section className="col-span-4 bg-gradient-to-br from-[#151619] to-[#1a1d21] rounded-3xl p-6 border border-zinc-800/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-4 h-4 text-purple-400" />
            <h2 className="text-sm font-semibold text-zinc-400">
              AI Sector Sentiment
            </h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 text-blue-400 p-3 rounded-xl text-center border border-blue-500/30 hover:border-blue-400/50 transition-colors">
                <div className="font-semibold text-sm">Tech</div>
                <div className="text-xs text-blue-300 mt-1">Bullish</div>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 text-green-400 p-3 rounded-xl text-center border border-green-500/30 hover:border-green-400/50 transition-colors">
                <div className="font-semibold text-sm">Finance</div>
                <div className="text-xs text-green-300 mt-1">Strong</div>
              </div>
              <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-400 p-3 rounded-xl text-center border border-red-500/30 hover:border-red-400/50 transition-colors">
                <div className="font-semibold text-sm">Energy</div>
                <div className="text-xs text-red-300 mt-1">Bearish</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-green-600/20 text-green-400 p-2 rounded-lg text-center font-medium border border-green-500/20">
                Strong Buy
              </div>
              <div className="bg-green-600/15 text-green-400 p-2 rounded-lg text-center font-medium border border-green-500/20">
                Buy
              </div>
              <div className="bg-yellow-600/20 text-yellow-400 p-2 rounded-lg text-center font-medium border border-yellow-500/20">
                Hold
              </div>
            </div>
          </div>
        </section>

        {/* AI Sector Alerts & News */}
        <section className="col-span-5 bg-gradient-to-br from-[#151619] to-[#1a1d21] rounded-3xl p-6 border border-zinc-800/50 shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-4 h-4 text-orange-400" />
            <h2 className="text-sm font-semibold text-zinc-400">
              AI Sector Alerts & News Feed
            </h2>
            <div className="ml-auto w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-3">
            <div className="bg-zinc-800/50 rounded-xl p-4 border-l-4 border-green-500 hover:bg-zinc-800/70 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs font-medium">BULLISH</span>
              </div>
              <p className="text-sm text-zinc-300">Tesla surges after strong quarterly results.</p>
              <span className="text-xs text-zinc-500">2 hours ago</span>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 border-l-4 border-blue-500 hover:bg-zinc-800/70 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs font-medium">MOMENTUM</span>
              </div>
              <p className="text-sm text-zinc-300">Green Energy Tech rises amid AI sector optimism.</p>
              <span className="text-xs text-zinc-500">4 hours ago</span>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 border-l-4 border-yellow-500 hover:bg-zinc-800/70 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-xs font-medium">STABLE</span>
              </div>
              <p className="text-sm text-zinc-300">Finance sector shows steady recovery trend.</p>
              <span className="text-xs text-zinc-500">6 hours ago</span>
            </div>
          </div>
        </section>

        {/* AI Signal Breakdown */}
        <section className="col-span-3 bg-gradient-to-br from-[#151619] to-[#1a1d21] rounded-3xl p-6 border border-zinc-800/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <LineChart className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-semibold text-zinc-400">
              AI Signal Breakdown
            </h2>
          </div>
          <div className="space-y-3">
            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-zinc-400">Technical Analysis</span>
                <TrendingUp className="w-3 h-3 text-green-400" />
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-1.5">
                <div className="bg-green-400 h-1.5 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-2">
                <span className="text-sm font-medium">AAPL</span>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xs">Hold</span>
                  <span className="text-zinc-400 text-xs">(7/10)</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-2">
                <span className="text-sm font-medium">GOOGL</span>
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-xs">Sell</span>
                  <span className="text-zinc-400 text-xs">(8/10)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Personalized Insights */}
        <section className="col-span-4 bg-gradient-to-br from-[#151619] to-[#1a1d21] rounded-3xl p-6 border border-zinc-800/50 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-4 h-4 text-indigo-400" />
            <h2 className="text-sm font-semibold text-zinc-400">
              AI Personalized Insights
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl p-4 border border-indigo-500/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Based on your portfolio, consider focusing on <span className="text-green-400 font-medium">Green Energy Tech</span> and <span className="text-blue-400 font-medium">AI Growth Startups</span>.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-md text-xs border border-green-500/30">
                      High Growth
                    </span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md text-xs border border-blue-500/30">
                      AI Trend
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
