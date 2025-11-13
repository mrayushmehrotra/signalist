import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { B as Button } from "./button-C52Q1qbL.js";
import { L as Label, I as InputField, F as FooterLink } from "./FooterLink-Bv9NcRnk.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon, ChevronUpIcon, SearchIcon, ChevronsUpDown, Check } from "lucide-react";
import { c as cn, I as INVESTMENT_GOALS, R as RISK_TOLERANCE_OPTIONS, P as PREFERRED_INDUSTRIES } from "./constants-BeZ-diu8.js";
import { useState } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Command as Command$1 } from "cmdk";
import countryList from "react-select-country-list";
import { s as signUp } from "./router-Dv9kToH9.js";
import { toast } from "sonner";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-router-devtools";
import "better-auth/react";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}
const SelectField = ({ name, label, placeholder, options, control, error, required = false }) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: name, className: "form-label", children: label }),
    /* @__PURE__ */ jsx(
      Controller,
      {
        name,
        control,
        rules: {
          required: required ? `Please select ${label.toLowerCase()}` : false
        },
        render: ({ field }) => /* @__PURE__ */ jsxs(Select, { value: field.value, onValueChange: field.onChange, children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "select-trigger", children: /* @__PURE__ */ jsx(SelectValue, { placeholder }) }),
          /* @__PURE__ */ jsx(SelectContent, { className: "bg-gray-800 border-gray-600 text-white", children: options.map((option) => /* @__PURE__ */ jsx(SelectItem, { value: option.value, className: "focus:bg-gray-600 focus:text-white", children: option.label }, option.value)) }),
          error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: error.message })
        ] })
      }
    )
  ] });
};
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[9999] w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden max-h-[80vh] overflow-hidden",
        className
      ),
      ...props
    }
  ) });
}
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Command$1,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx(
          Command$1.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Command$1.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Command$1.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Command$1.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Command$1.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
const CountrySelect = ({
  value,
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const countries = countryList().getData();
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: "country-select-trigger",
        children: [
          value ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { children: getFlagEmoji(value) }),
            /* @__PURE__ */ jsx("span", { children: countries.find((c) => c.value === value)?.label })
          ] }) : "Select your country...",
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      PopoverContent,
      {
        className: "w-full p-0 bg-gray-800 border-gray-600",
        align: "start",
        children: /* @__PURE__ */ jsxs(Command, { className: "bg-gray-800 border-gray-600", children: [
          /* @__PURE__ */ jsx(
            CommandInput,
            {
              placeholder: "Search countries...",
              className: "country-select-input"
            }
          ),
          /* @__PURE__ */ jsx(CommandEmpty, { className: "country-select-empty", children: "No country found." }),
          /* @__PURE__ */ jsx(CommandList, { className: "max-h-60 bg-gray-800 scrollbar-hide-default", children: /* @__PURE__ */ jsx(CommandGroup, { className: "", children: countries.map((country) => /* @__PURE__ */ jsxs(
            CommandItem,
            {
              value: `${country.label} ${country.value}`,
              onSelect: () => {
                onChange(country.value);
                setOpen(false);
              },
              className: "country-select-item",
              children: [
                /* @__PURE__ */ jsx(
                  Check,
                  {
                    className: cn(
                      "mr-2 h-4 w-4 text-yellow-500",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { children: getFlagEmoji(country.value) }),
                  /* @__PURE__ */ jsx("span", { children: country.label })
                ] })
              ]
            },
            country.value
          )) }) })
        ] })
      }
    )
  ] });
};
const CountrySelectField = ({
  name,
  label,
  control,
  error,
  required = false
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: name, className: "form-label", children: label }),
    /* @__PURE__ */ jsx(
      Controller,
      {
        name,
        control,
        rules: {
          required: required ? `Please select ${label.toLowerCase()}` : false
        },
        render: ({ field }) => /* @__PURE__ */ jsx(CountrySelect, { value: field.value, onChange: field.onChange })
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: error.message }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Helps us show market data and news relevant to you." })
  ] });
};
function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology"
    },
    mode: "onBlur"
  });
  const onSubmit = async (data) => {
    try {
      const result = await signUp.email({
        email: data.email,
        password: data.password,
        name: data.fullName
      });
      if (result.data) navigate({
        to: "/"
      });
      if (result.error) toast.error(result.error.message);
    } catch (e) {
      console.error(e);
      toast.error("Sign up failed", {
        description: e instanceof Error ? e.message : "Failed to create an account."
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full h-screen overflow-hidden relative", children: [
    /* @__PURE__ */ jsxs("section", { className: "auth-left-section scrollbar-hide-default overflow-y-auto overflow-x-hidden relative z-10", children: [
      /* @__PURE__ */ jsx("section", { className: "h-20 pt-4  w-full m-4", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "auth-logo", children: /* @__PURE__ */ jsx("div", { className: "bg-white w-fit rounded-full p-2", children: /* @__PURE__ */ jsx("img", { src: "favicon-32x32.png", alt: "Signalist logo", width: 140, height: 32, className: "h-8 w-auto" }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: " flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full space-y-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "form-title", children: "Sign Up & Personalize" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-5", children: [
          /* @__PURE__ */ jsx(InputField, { name: "fullName", label: "Full Name", placeholder: "John Doe", register, error: errors.fullName, validation: {
            required: "Full name is required",
            minLength: 2
          } }),
          /* @__PURE__ */ jsx(InputField, { name: "email", label: "Email", placeholder: "contact@jsmastery.com", register, error: errors.email, validation: {
            required: "Email name is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email address is required"
          } }),
          /* @__PURE__ */ jsx(InputField, { name: "password", label: "Password", placeholder: "Enter a strong password", type: "password", register, error: errors.password, validation: {
            required: "Password is required",
            minLength: 8
          } }),
          /* @__PURE__ */ jsx(CountrySelectField, { name: "country", label: "Country", control, error: errors.country, required: true }),
          /* @__PURE__ */ jsx(SelectField, { name: "investmentGoals", label: "Investment Goals", placeholder: "Select your investment goal", options: INVESTMENT_GOALS, control, error: errors.investmentGoals, required: true }),
          /* @__PURE__ */ jsx(SelectField, { name: "riskTolerance", label: "Risk Tolerance", placeholder: "Select your risk level", options: RISK_TOLERANCE_OPTIONS, control, error: errors.riskTolerance, required: true }),
          /* @__PURE__ */ jsx(SelectField, { name: "preferredIndustry", label: "Preferred Industry", placeholder: "Select your preferred industry", options: PREFERRED_INDUSTRIES, control, error: errors.preferredIndustry, required: true }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, className: "yellow-btn w-full mt-5", children: isSubmitting ? "Creating Account" : "Start Your Investing Journey" }),
          /* @__PURE__ */ jsx(FooterLink, { text: "Already have an account?", linkText: "Sign in", href: "/sign-in" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "auth-right-section relative z-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "z-10 relative lg:mt-4 lg:mb-16", children: [
        /* @__PURE__ */ jsx("blockquote", { className: "auth-blockquote", children: "Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("cite", { className: "auth-testimonial-author", children: "- Ethan R." }),
            /* @__PURE__ */ jsx("p", { className: "max-md:text-xs text-gray-500", children: "Retail Investor" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx("img", { src: "/assets/icons/star.svg", alt: "Star", width: 20, height: 20, className: "w-5 h-5" }, star)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/dashboard.png", alt: "Dashboard Preview", width: 1440, height: 1150, className: "auth-dashboard-preview absolute top-0" }) })
    ] })
  ] });
}
export {
  SignUp as component
};
