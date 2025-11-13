import { jsx, jsxs } from "react/jsx-runtime";
import * as LabelPrimitive from "@radix-ui/react-label";
import { c as cn } from "./constants-BeZ-diu8.js";
import { Link } from "@tanstack/react-router";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const InputField = ({ name, label, placeholder, type = "text", register, error, validation, disabled, value }) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: name, className: "form-label", children: label }),
    /* @__PURE__ */ jsx(
      Input,
      {
        type,
        id: name,
        placeholder,
        disabled,
        value,
        className: cn("form-input", { "opacity-50 cursor-not-allowed": disabled }),
        ...register(name, validation)
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: error.message })
  ] });
};
const FooterLink = ({ text, linkText, href }) => {
  return /* @__PURE__ */ jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
    text,
    ` `,
    /* @__PURE__ */ jsx(Link, { to: href, className: "footer-link", children: linkText })
  ] }) });
};
export {
  FooterLink as F,
  InputField as I,
  Label as L
};
