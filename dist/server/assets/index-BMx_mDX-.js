import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { u as useAuth } from "./router-9Tdca3nC.js";
import { Navigate, Link } from "@tanstack/react-router";
import { useState, createContext, useContext } from "react";
import { c as cn } from "./constants-BeZ-diu8.js";
import { B as Button } from "./button-C52Q1qbL.js";
import { LayoutDashboard, LineChart, Wallet, Bot, Settings } from "lucide-react";
import "@tanstack/react-router-devtools";
import "better-auth/react";
import "sonner";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { children: "Loading..." });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/sign-in" });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
}
const SidebarSeparator = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full my-6  flex justify-center", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-sm" }),
    /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40" })
  ] });
};
const SidebarContext = createContext(void 0);
const Sidebar = ({ children, className }) => {
  const [active, setIsActive] = useState(false);
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: { active, setIsActive }, children: /* @__PURE__ */ jsx("div", { className: cn("relative flex flex-col w-full h-full", className), children }) });
};
const SidebarItem = ({
  children,
  active,
  icon,
  link,
  className
}) => {
  const { active: sidebarActive } = useSidebarContext();
  const isActive = sidebarActive === !!active;
  const Icon = icon;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative  w-full h-full ",
        isActive ? "" : "bg-zinc-800",
        className
      ),
      children: /* @__PURE__ */ jsxs(Link, { to: link, className: "flex justify-around px-2 py-1 w-full h-full", children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }),
        /* @__PURE__ */ jsx("h3", { children })
      ] })
    }
  );
};
SidebarItem.displayName = "SidebarItem";
const SidebarAvatar = ({ className, User }) => {
  const { name, email, emailVerified, createdAt } = User;
  const PickTheFirstLetter = (str) => {
    return str.charAt(0).toUpperCase();
  };
  const isVerified = emailVerified ? "" : "before:content-[!]";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative  w-full mt-4 mb-4",
        className
      ),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            " flex bg-transparent gap-x-4 rounded-md p-2 ",
            isVerified
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: " bg-[#00C951] border border-zinc-400 rounded-sm w-10 h-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "w-6 h-6", children: PickTheFirstLetter(name) }) }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                "aria-label": "userDetails",
                className: "flex flex-col items-start justify-center w-full h-full",
                children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-white", children: name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-zinc-500", children: email })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
SidebarAvatar.displayName = "SidebarAvatar";
const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a Sidebar");
  }
  return context;
};
function Dashboard() {
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen w-screen bg-[#0f0f11] text-white", children: [
    /* @__PURE__ */ jsxs(Sidebar, { className: "w-[20%] bg-[#111214] border-r border-zinc-800 py-4", children: [
      /* @__PURE__ */ jsx(
        SidebarAvatar,
        {
          User: {
            name: "Ayush",
            email: "ayush@signalist.ai",
            emailVerified: true,
            createdAt: "2023-01-01"
          }
        }
      ),
      /* @__PURE__ */ jsx(SidebarSeparator, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsx(SidebarItem, { active: true, icon: LayoutDashboard, link: "/dashboard", children: /* @__PURE__ */ jsx("span", { className: "text-xs mt-1", children: "Dashboard" }) }),
        /* @__PURE__ */ jsx(SidebarItem, { icon: LineChart, link: "/markets", children: /* @__PURE__ */ jsx("span", { className: "text-xs mt-1", children: "Markets" }) }),
        /* @__PURE__ */ jsx(SidebarItem, { icon: Wallet, link: "/portfolio", children: /* @__PURE__ */ jsx("span", { className: "text-xs mt-1", children: "Portfolio" }) }),
        /* @__PURE__ */ jsx(SidebarItem, { icon: Bot, link: "/ai-chat", children: /* @__PURE__ */ jsx("span", { className: "text-xs mt-1", children: "AI Chat" }) }),
        /* @__PURE__ */ jsx(SidebarItem, { icon: Settings, link: "/settings", children: /* @__PURE__ */ jsx("span", { className: "text-xs mt-1", children: "Settings" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 p-6 overflow-y-auto grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxs("section", { className: "col-span-5 bg-[#151619] rounded-2xl p-5 border border-zinc-800", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold mb-3 text-zinc-400", children: "AI Top Signal of the Day" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-green-600/20 text-green-400 px-2 py-1 rounded-md text-xs w-fit", children: "STRONG BUY" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "TSLA / Tesla Inc." }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-zinc-400", children: "Confidence: 95%" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-zinc-400", children: "Target: $235 | Stop Loss: $205" }),
          /* @__PURE__ */ jsx("button", { className: "mt-3 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg", children: "Execute Trade" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "col-span-3 bg-[#151619] rounded-2xl p-5 border border-zinc-800", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold mb-3 text-zinc-400", children: "Portfolio Health" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full", children: [
          /* @__PURE__ */ jsx("span", { className: "text-green-400 text-3xl font-bold", children: "+18.2%" }),
          /* @__PURE__ */ jsx("span", { className: "text-zinc-400 text-sm mt-1", children: "PBL" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "col-span-4 bg-[#151619] rounded-2xl p-5 border border-zinc-800", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold mb-3 text-zinc-400", children: "AI Sector Sentiment" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-center text-xs", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-600/20 text-blue-400 p-2 rounded-md", children: "Tech" }),
          /* @__PURE__ */ jsx("div", { className: "bg-green-600/20 text-green-400 p-2 rounded-md", children: "Finance" }),
          /* @__PURE__ */ jsx("div", { className: "bg-red-600/20 text-red-400 p-2 rounded-md", children: "Energy" }),
          /* @__PURE__ */ jsx("div", { className: "bg-green-600/20 text-green-400 p-2 rounded-md", children: "Strong Buy" }),
          /* @__PURE__ */ jsx("div", { className: "bg-green-600/20 text-green-400 p-2 rounded-md", children: "Buy" }),
          /* @__PURE__ */ jsx("div", { className: "bg-yellow-600/20 text-yellow-400 p-2 rounded-md", children: "Hold" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "col-span-5 bg-[#151619] rounded-2xl p-5 border border-zinc-800", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold mb-3 text-zinc-400", children: "AI Sector Alerts & News Feed" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-zinc-400", children: [
          /* @__PURE__ */ jsx("p", { children: "📈 Tesla surges after strong quarterly results." }),
          /* @__PURE__ */ jsx("p", { children: "⚡ Green Energy Tech rises amid AI sector optimism." }),
          /* @__PURE__ */ jsx("p", { children: "🏦 Finance sector shows steady recovery trend." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "col-span-3 bg-[#151619] rounded-2xl p-5 border border-zinc-800", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold mb-3 text-zinc-400", children: "AI Signal Breakdown" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-zinc-400 space-y-1", children: [
          /* @__PURE__ */ jsx("p", { children: "Technical Analysis ↑" }),
          /* @__PURE__ */ jsx("p", { children: "AAPL — Hold (7/10)" }),
          /* @__PURE__ */ jsx("p", { children: "GOOGL — Sell (8/10)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "col-span-4 bg-[#151619] rounded-2xl p-5 border border-zinc-800", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold mb-3 text-zinc-400", children: "AI Personalized Insights" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-zinc-400", children: /* @__PURE__ */ jsx("p", { children: "Based on your portfolio, consider focusing on Green Energy Tech and AI Growth Startups." }) })
      ] })
    ] })
  ] });
}
const Home = () => {
  return /* @__PURE__ */ jsx(ProtectedRoute, { children: /* @__PURE__ */ jsx(Dashboard, {}) });
};
export {
  Home as component
};
