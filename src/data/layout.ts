import Logo from "../assets/Logo.svg"
import Burger from "../assets/icons/Burger.svg"
import Cross from "../assets/icons/Cross.svg"

export const headerData = {
  logo: {
    src: Logo,
    alt: "do4you",
  },
  navItems: [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Our Process" },
    { href: "#work", label: "Work" },
  ],
  cta: {
    label: "Contact us",
    href: "#contact",
    icon: {
      src: null,
      alt: "Call",
    },
    menuIcon: {
      src: Burger,
    },
    closeIcon: {
      src: Cross,
    },
  },
};


export const footerData = {
    logo: {
      src: Logo,
      alt: "Client Logo"
    },
    tagline: "Assistance with visas and permit form fillings in South Africa. We help you choose the right visa, complete your forms, and prepare your documents correctly.",
    copyright: "2025 do4you. All rights Reserved",
    quickLinks: [
      { href: "#", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#process", label: "Our Process" },
      { href: "#contact", label: "Contact" },
      { href: "#work", label: "Work" },
    ]
}

