import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { B as Button } from "./button-C52Q1qbL.js";
import { I as InputField, F as FooterLink } from "./FooterLink-Bv9NcRnk.js";
import { a as authClient, b as signIn } from "./router-9Tdca3nC.js";
import { toast } from "sonner";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./constants-BeZ-diu8.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@tanstack/react-router-devtools";
import "react";
import "better-auth/react";
const SignIn = () => {
  const session = authClient.useSession();
  console.log(session);
  const navigate = useNavigate();
  if (session.data) {
    navigate({
      to: "/"
    });
  }
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur"
  });
  const onSubmit = async (data) => {
    try {
      const result = await signIn.email(data);
      if (result.data) navigate({
        to: "/"
      });
    } catch (e) {
      console.error(e);
      toast.error("Sign in failed", {
        description: e instanceof Error ? e.message : "Failed to sign in."
      });
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxs("section", { className: "auth-left-section  overflow-x-hidden ", children: [
      /* @__PURE__ */ jsx("section", { className: "h-20 pt-4 m-4", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "auth-logo", children: /* @__PURE__ */ jsx("div", { className: "bg-white w-fit rounded-full p-2", children: /* @__PURE__ */ jsx("img", { src: "favicon-32x32.png", alt: "Signalist logo", width: 140, height: 32, className: "h-8 w-auto" }) }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "form-title", children: "Welcome back" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-5", children: [
        /* @__PURE__ */ jsx(InputField, { name: "email", label: "Email", placeholder: "contact@jsmastery.com", register, error: errors.email, validation: {
          required: "Email is required",
          pattern: /^\w+@\w+\.\w+$/
        } }),
        /* @__PURE__ */ jsx(InputField, { name: "password", label: "Password", placeholder: "Enter your password", type: "password", register, error: errors.password, validation: {
          required: "Password is required",
          minLength: 8
        } }),
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, className: "yellow-btn w-full mt-5", children: isSubmitting ? "Signing In" : "Sign In" }),
        /* @__PURE__ */ jsx(FooterLink, { text: "Don't have an account?", linkText: "Create an account", href: "/sign-up" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "auth-right-section", children: [
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
  ] }) });
};
export {
  SignIn as component
};
