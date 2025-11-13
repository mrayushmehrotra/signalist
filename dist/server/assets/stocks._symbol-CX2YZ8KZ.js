import { jsx, jsxs } from "react/jsx-runtime";
import { T as TradingViewWidget } from "./TradingViewWidget-CkLwnamb.js";
import { useState, useMemo } from "react";
import { S as SYMBOL_INFO_WIDGET_CONFIG, C as CANDLE_CHART_WIDGET_CONFIG, B as BASELINE_WIDGET_CONFIG, b as TECHNICAL_ANALYSIS_WIDGET_CONFIG, d as COMPANY_PROFILE_WIDGET_CONFIG, e as COMPANY_FINANCIALS_WIDGET_CONFIG } from "./constants-BeZ-diu8.js";
import { R as Route } from "./router-9Tdca3nC.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-router";
import "@tanstack/react-router-devtools";
import "better-auth/react";
import "sonner";
const WatchlistButton = ({
  symbol,
  company,
  isInWatchlist,
  showTrashIcon = false,
  type = "button",
  onWatchlistChange
}) => {
  const [added, setAdded] = useState(!!isInWatchlist);
  const label = useMemo(() => {
    if (type === "icon") return added ? "" : "";
    return added ? "Remove from Watchlist" : "Add to Watchlist";
  }, [added, type]);
  const handleClick = () => {
    const next = !added;
    setAdded(next);
    onWatchlistChange?.(symbol, next);
  };
  if (type === "icon") {
    return /* @__PURE__ */ jsx(
      "button",
      {
        title: added ? `Remove ${symbol} from watchlist` : `Add ${symbol} to watchlist`,
        "aria-label": added ? `Remove ${symbol} from watchlist` : `Add ${symbol} to watchlist`,
        className: `watchlist-icon-btn ${added ? "watchlist-icon-added" : ""}`,
        onClick: handleClick,
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: added ? "#FACC15" : "none",
            stroke: "#FACC15",
            strokeWidth: "1.5",
            className: "watchlist-star",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557L3.04 10.385a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z"
              }
            )
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxs("button", { className: `watchlist-btn ${added ? "watchlist-remove" : ""}`, onClick: handleClick, children: [
    showTrashIcon && added ? /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-5 h-5 mr-2",
        children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-7 4v6m4-6v6m4-6v6" })
      }
    ) : null,
    /* @__PURE__ */ jsx("span", { children: label })
  ] });
};
function StockDetails() {
  const {
    symbol
  } = Route.useParams();
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen p-4 md:p-6 lg:p-8", children: /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx(TradingViewWidget, { scriptUrl: `${scriptUrl}symbol-info.js`, config: SYMBOL_INFO_WIDGET_CONFIG(symbol), height: 170 }),
      /* @__PURE__ */ jsx(TradingViewWidget, { scriptUrl: `${scriptUrl}advanced-chart.js`, config: CANDLE_CHART_WIDGET_CONFIG(symbol), className: "custom-chart", height: 600 }),
      /* @__PURE__ */ jsx(TradingViewWidget, { scriptUrl: `${scriptUrl}advanced-chart.js`, config: BASELINE_WIDGET_CONFIG(symbol), className: "custom-chart", height: 600 })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(WatchlistButton, { symbol: symbol.toUpperCase(), company: symbol.toUpperCase(), isInWatchlist: false }) }),
      /* @__PURE__ */ jsx(TradingViewWidget, { scriptUrl: `${scriptUrl}technical-analysis.js`, config: TECHNICAL_ANALYSIS_WIDGET_CONFIG(symbol), height: 400 }),
      /* @__PURE__ */ jsx(TradingViewWidget, { scriptUrl: `${scriptUrl}company-profile.js`, config: COMPANY_PROFILE_WIDGET_CONFIG(symbol), height: 440 }),
      /* @__PURE__ */ jsx(TradingViewWidget, { scriptUrl: `${scriptUrl}financials.js`, config: COMPANY_FINANCIALS_WIDGET_CONFIG(symbol), height: 464 })
    ] })
  ] }) });
}
export {
  StockDetails as component
};
