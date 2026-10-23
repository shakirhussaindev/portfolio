// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { FiMail, FiPhone, FiSend } from "react-icons/fi";
// // import { FaWhatsapp } from "react-icons/fa";
// // import { profile } from "@/lib/data";
// // import SectionHeading from "./SectionHeading";

// // const contactMethods = [
// //   {
// //     label: "Email",
// //     value: profile.email,
// //     href: `mailto:${profile.email}`,
// //     icon: FiMail,
// //   },
// //   {
// //     label: "Phone",
// //     value: profile.phone,
// //     href: `tel:${profile.phone.replace(/\s+/g, "")}`,
// //     icon: FiPhone,
// //   },
// //   {
// //     label: "WhatsApp",
// //     value: profile.whatsapp,
// //     href: `https://wa.me/${profile.whatsapp.replace(/[\s+]/g, "")}`,
// //     icon: FaWhatsapp,
// //   },
// // ];

// // export default function Contact() {
// //   const [form, setForm] = useState({ name: "", email: "", message: "" });

// //   const handleChange = (e) =>
// //     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const subject = encodeURIComponent(
// //       `Portfolio inquiry from ${form.name || "a visitor"}`,
// //     );
// //     const body = encodeURIComponent(
// //       `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`,
// //     );
// //     window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
// //   };

// //   return (
// //     <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
// //       <SectionHeading
// //         index="05"
// //         title="Let's build something"
// //         subtitle="Get in touch"
// //       />

// //       <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-60px" }}
// //           transition={{ duration: 0.5 }}
// //           className="space-y-4"
// //         >
// //           <p className="text-sm leading-relaxed text-text-muted sm:text-base">
// //             Have a project in mind, an opening on your team, or just want to
// //             talk about React and Node? My inbox is open.
// //           </p>
// //           {contactMethods.map(({ label, value, href, icon: Icon }) => (
// //             <a
// //               key={label}
// //               href={href}
// //               target={label === "WhatsApp" ? "_blank" : undefined}
// //               rel={label === "WhatsApp" ? "noreferrer noopener" : undefined}
// //               className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent-2/50"
// //             >
// //               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-2/10 text-accent-2">
// //                 <Icon className="h-5 w-5" />
// //               </span>
// //               <span>
// //                 <span className="block font-mono text-xs text-text-muted">
// //                   {label}
// //                 </span>
// //                 <span className="block text-sm font-medium text-text">
// //                   {value}
// //                 </span>
// //               </span>
// //             </a>
// //           ))}
// //         </motion.div>

// //         <motion.form
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-60px" }}
// //           transition={{ duration: 0.5, delay: 0.1 }}
// //           onSubmit={handleSubmit}
// //           className="space-y-4 rounded-xl border border-border bg-surface p-6"
// //         >
// //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="mb-1.5 block font-mono text-xs text-text-muted"
// //               >
// //                 Name
// //               </label>
// //               <input
// //                 id="name"
// //                 name="name"
// //                 required
// //                 value={form.name}
// //                 onChange={handleChange}
// //                 placeholder="Your name"
// //                 className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2"
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="mb-1.5 block font-mono text-xs text-text-muted"
// //               >
// //                 Email
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 required
// //                 value={form.email}
// //                 onChange={handleChange}
// //                 placeholder="you@example.com"
// //                 className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2"
// //               />
// //             </div>
// //           </div>
// //           <div>
// //             <label
// //               htmlFor="message"
// //               className="mb-1.5 block font-mono text-xs text-text-muted"
// //             >
// //               Message
// //             </label>
// //             <textarea
// //               id="message"
// //               name="message"
// //               required
// //               rows={5}
// //               value={form.message}
// //               onChange={handleChange}
// //               placeholder="Tell me a bit about your project or role..."
// //               className="w-full resize-none rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
// //           >
// //             Send message
// //             <FiSend className="h-4 w-4" />
// //           </button>
// //           <p className="font-mono text-[11px] text-text-muted">
// //             Opens your email client with this message pre-filled.
// //           </p>
// //         </motion.form>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiMail,
//   FiPhone,
//   FiSend,
//   FiCheck,
//   FiAlertCircle,
// } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
// import { profile } from "@/lib/data";
// import SectionHeading from "./SectionHeading";

// const contactMethods = [
//   {
//     label: "Email",
//     value: profile.email,
//     href: `mailto:${profile.email}`,
//     icon: FiMail,
//   },
//   {
//     label: "Phone",
//     value: profile.phone,
//     href: `tel:${profile.phone.replace(/\s+/g, "")}`,
//     icon: FiPhone,
//   },
//   {
//     label: "WhatsApp",
//     value: profile.whatsapp,
//     href: `https://wa.me/${profile.whatsapp.replace(/[\s+]/g, "")}`,
//     icon: FaWhatsapp,
//   },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("idle"); // idle | sending | success | error
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     setErrorMsg("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data?.error || "Failed to send message.");
//       }

//       setStatus("success");
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       setStatus("error");
//       setErrorMsg(err.message || "Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
//       <SectionHeading
//         index="05"
//         title="Let's build something"
//         subtitle="Get in touch"
//       />

//       <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.5 }}
//           className="space-y-4"
//         >
//           <p className="text-sm leading-relaxed text-text-muted sm:text-base">
//             Have a project in mind, an opening on your team, or just want to
//             talk about React and Node? My inbox is open.
//           </p>
//           {contactMethods.map(({ label, value, href, icon: Icon }) => (
//             <a
//               key={label}
//               href={href}
//               target={label === "WhatsApp" ? "_blank" : undefined}
//               rel={label === "WhatsApp" ? "noreferrer noopener" : undefined}
//               className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent-2/50"
//             >
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-2/10 text-accent-2">
//                 <Icon className="h-5 w-5" />
//               </span>
//               <span>
//                 <span className="block font-mono text-xs text-text-muted">
//                   {label}
//                 </span>
//                 <span className="block text-sm font-medium text-text">
//                   {value}
//                 </span>
//               </span>
//             </a>
//           ))}
//         </motion.div>

//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           onSubmit={handleSubmit}
//           className="space-y-4 rounded-xl border border-border bg-surface p-6"
//         >
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="mb-1.5 block font-mono text-xs text-text-muted"
//               >
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 required
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 disabled={status === "sending"}
//                 className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2 disabled:opacity-60"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="mb-1.5 block font-mono text-xs text-text-muted"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 disabled={status === "sending"}
//                 className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2 disabled:opacity-60"
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="message"
//               className="mb-1.5 block font-mono text-xs text-text-muted"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               required
//               rows={5}
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Tell me a bit about your project or role..."
//               disabled={status === "sending"}
//               className="w-full resize-none rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2 disabled:opacity-60"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={status === "sending"}
//             className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//           >
//             {status === "sending" ? "Sending..." : "Send message"}
//             <FiSend className="h-4 w-4" />
//           </button>

//           {status === "success" && (
//             <p className="flex items-center gap-2 font-mono text-[12.5px] text-accent-2">
//               <FiCheck className="h-4 w-4" />
//               Message sent — I&apos;ll get back to you soon.
//             </p>
//           )}
//           {status === "error" && (
//             <p className="flex items-center gap-2 font-mono text-[12.5px] text-red-400">
//               <FiAlertCircle className="h-4 w-4" />
//               {errorMsg}
//             </p>
//           )}
//           {status === "idle" && (
//             <p className="font-mono text-[11px] text-text-muted">
//               Sends straight to my inbox.
//             </p>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: FiPhone,
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: `https://wa.me/${profile.whatsapp.replace(/[\s+]/g, "")}`,
    icon: FaWhatsapp,
  },
];

const EMAIL_REGEX = /^[^\s@]+@gmail\.com$/i;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const isEmailValid =
    form.email.trim() === "" || EMAIL_REGEX.test(form.email.trim());
  const showEmailError = emailTouched && !isEmailValid;

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailTouched(true);

    if (!EMAIL_REGEX.test(form.email.trim())) {
      setStatus("error");
      setErrorMsg("Please enter a valid Gmail address.");
      return;
    }

    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email.trim()})`;

    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(profile.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Open synchronously (no await before this) so popup blockers don't block it.
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setErrorMsg("");
    setForm({ name: "", email: "", message: "" });
    setEmailTouched(false);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="05"
        title="Let's build something"
        subtitle="Get in touch"
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            Have a project in mind, an opening on your team, or just want to
            talk about React and Node? My inbox is open.
          </p>
          {contactMethods.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel={label === "WhatsApp" ? "noreferrer noopener" : undefined}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent-2/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-2/10 text-accent-2">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-xs text-text-muted">
                  {label}
                </span>
                <span className="block text-sm font-medium text-text">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-border bg-surface p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-xs text-text-muted"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2 disabled:opacity-60"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-xs text-text-muted"
              >
                Email <span className="text-text-muted/70">(Gmail only)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                onBlur={() => setEmailTouched(true)}
                placeholder="you@gmail.com"
                aria-invalid={showEmailError}
                className={`w-full rounded-md border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors ${
                  showEmailError
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-border focus:border-accent-2"
                }`}
              />
              {showEmailError && (
                <p className="mt-1.5 font-mono text-[11px] text-red-400">
                  Enter a valid Gmail address (e.g. you@gmail.com)
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block font-mono text-xs text-text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project or role..."
              className="w-full resize-none rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-2 disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Send message
            <FiSend className="h-4 w-4" />
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 font-mono text-[12.5px] text-accent-2">
              <FiCheck className="h-4 w-4" />
              Gmail draft opened in a new tab — hit Send there to deliver it.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 font-mono text-[12.5px] text-red-400">
              <FiAlertCircle className="h-4 w-4" />
              {errorMsg}
            </p>
          )}
          {status === "idle" && (
            <p className="font-mono text-[11px] text-text-muted">
              Opens a pre-filled draft in your Gmail — you review and hit send.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}