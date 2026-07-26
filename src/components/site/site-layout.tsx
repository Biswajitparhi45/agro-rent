import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { AmbientGlow } from "./ambient";
import { Sparkles } from "lucide-react";

export function SiteLayout({
  children,
  bare = false,
  noFooter = false,
}: {
  children: ReactNode;
  bare?: boolean;
  noFooter?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className={bare ? "flex-1" : "flex-1 pt-18"}>
        {children}
      </main>
      {!noFooter && <Footer />}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border/80 gradient-hero pt-12 pb-16 sm:pt-16 sm:pb-20">
      <AmbientGlow />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{eyebrow}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-3.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
