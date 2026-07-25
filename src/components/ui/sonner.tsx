import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card/95 group-[.toaster]:backdrop-blur-xl group-[.toaster]:text-foreground group-[.toaster]:border-border/80 group-[.toaster]:shadow-float group-[.toaster]:rounded-2xl group-[.toaster]:p-4 group-[.toaster]:text-xs group-[.toaster]:font-medium data-[type=error]:!border-destructive/40 data-[type=error]:!bg-card data-[type=error]:!text-foreground data-[type=success]:!border-emerald-500/40 data-[type=success]:!bg-card data-[type=success]:!text-foreground data-[type=info]:!border-primary/40 data-[type=info]:!bg-card data-[type=info]:!text-foreground",
          description: "group-[.toast]:text-muted-foreground group-[.toast]:text-[11px]",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:rounded-xl group-[.toast]:text-xs group-[.toast]:font-semibold",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:rounded-xl group-[.toast]:text-xs",
          closeButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-border group-[.toast]:hover:bg-accent group-[.toast]:hover:text-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
