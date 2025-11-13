import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect, memo } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const useTradingViewWidget = (scriptUrl, config, height = 600) => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);
  return containerRef;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className
}) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    title && /* @__PURE__ */ jsx("h3", { className: "font-semibold text-2xl text-gray-100 mb-5", children: title }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn("tradingview-widget-container", className),
        ref: containerRef,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "tradingview-widget-container__widget",
            style: { height, width: "100%" }
          }
        )
      }
    )
  ] });
};
const TradingViewWidget$1 = memo(TradingViewWidget);
export {
  TradingViewWidget$1 as T
};
