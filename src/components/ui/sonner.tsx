import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      gap={8}
      toastOptions={{
        classNames: {
          toast: [
            "group toast",
            "!bg-[oklch(0.18_0.02_155)]",
            "!text-white",
            "!border-white/10",
            "!shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.3)]",
            "!rounded-2xl",
            "!px-4 !py-3.5",
            "!font-sans",
            "backdrop-blur-xl",
            "min-w-[300px]",
          ].join(" "),
          title: "!text-white !font-semibold !text-sm !leading-snug",
          description: "!text-white/55 !text-xs !mt-0.5 !leading-snug",
          icon: "!mt-0.5",
          // Error
          error: [
            "!bg-[oklch(0.18_0.02_155)]",
            "!border-l-4 !border-l-red-500 !border-y-white/8 !border-r-white/8",
          ].join(" "),
          // Success
          success: [
            "!bg-[oklch(0.18_0.02_155)]",
            "!border-l-4 !border-l-emerald-500 !border-y-white/8 !border-r-white/8",
          ].join(" "),
          // Info
          info: [
            "!bg-[oklch(0.18_0.02_155)]",
            "!border-l-4 !border-l-sky-400 !border-y-white/8 !border-r-white/8",
          ].join(" "),
          // Warning
          warning: [
            "!bg-[oklch(0.18_0.02_155)]",
            "!border-l-4 !border-l-amber-400 !border-y-white/8 !border-r-white/8",
          ].join(" "),
          actionButton: [
            "!bg-white/15 !text-white !text-xs !font-semibold",
            "!rounded-lg !px-3 !py-1.5",
            "hover:!bg-white/25 !transition-colors",
          ].join(" "),
          cancelButton: [
            "!bg-white/8 !text-white/60 !text-xs",
            "!rounded-lg !px-3 !py-1.5",
            "hover:!bg-white/15 !transition-colors",
          ].join(" "),
          closeButton: [
            "!bg-white/10 !text-white/50 !border-white/10",
            "hover:!bg-white/20 hover:!text-white !transition-colors",
            "!rounded-lg",
          ].join(" "),
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
