import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as mapUrl, i as PHONE, p as whatsapp, r as LOCATION, t as Button } from "./button-DrpbDoM0.mjs";
import { b as Clock, d as Phone, g as MapPin, m as MessageCircle, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./site-CRzEUwD7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DnlZHSNK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECOND_PHONE = "9629131619";
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const submit = (event) => {
		event.preventDefault();
		window.open(whatsapp(`Hi AGS CRACKER, I have an enquiry.
Name: ${name.trim()}
Phone: ${phone.trim()}
Message: ${message.trim()}`), "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "We're here to help",
			title: "Get in Touch",
			description: "Have a question about fireworks, combos or bulk orders? We'd love to hear from you."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-container section-space grid gap-12 lg:grid-cols-2 lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
					children: "Contact AGS CRACKER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-title mt-3 text-4xl text-navy sm:text-5xl",
					children: "Let's make it a celebration."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-7 text-muted-foreground",
					children: "Reach out to us directly or send a message using the form. We will help with product enquiries and current offer details."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: mapUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-start gap-4 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Visit us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm font-semibold",
								children: LOCATION
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground",
									children: "Call us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:+91${PHONE}`,
									className: "mt-1 block text-sm font-semibold hover:text-primary",
									children: PHONE
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:+91${SECOND_PHONE}`,
									className: "mt-1 block text-sm font-semibold hover:text-primary",
									children: SECOND_PHONE
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsapp(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-start gap-4 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm font-semibold",
								children: PHONE
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Business hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm font-semibold",
								children: "Please contact us for current hours."
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+91${PHONE}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Call Now"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "light",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsapp(),
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "WhatsApp"]
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "space-y-5 rounded-sm border border-border bg-card p-6 sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold text-navy",
						children: "Send an enquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Your message will open in WhatsApp for you to send."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-semibold",
						children: ["Your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							maxLength: 80,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Enter your name",
							className: "mt-2 h-12 w-full rounded-sm border border-input px-4 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-semibold",
						children: ["Phone number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							inputMode: "tel",
							maxLength: 20,
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: "Enter your phone number",
							className: "mt-2 h-12 w-full rounded-sm border border-input px-4 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-semibold",
						children: ["Your message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							maxLength: 1e3,
							value: message,
							onChange: (e) => setMessage(e.target.value),
							placeholder: "How can we help?",
							rows: 5,
							className: "mt-2 w-full rounded-sm border border-input p-4 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						variant: "navy",
						size: "lg",
						className: "w-full",
						children: ["Continue to WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-primary",
						children: "Find us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-title mt-2 text-4xl text-navy",
						children: "Visit Virudhunagar"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: mapUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 text-sm font-bold text-primary",
						children: ["Open Google Maps", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map of Virudhunagar, Tamil Nadu",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					className: "mt-6 h-[340px] w-full rounded-sm border-0 bg-card",
					src: "https://maps.google.com/maps?q=Virudhunagar%2C%20Tamil%20Nadu%20626005&t=&z=13&ie=UTF8&iwloc=&output=embed"
				})]
			})
		})
	] });
}
//#endregion
export { Contact as component };
