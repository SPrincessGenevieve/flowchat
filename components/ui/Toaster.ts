import { toast } from "sonner";

type ToastProps = {
  title: string;
  description?: string;
};

const baseStyle = {
  classNames: {
    toast: "bg-zinc-900 border border-white/10 text-white shadow-lg",
    title: "font-semibold text-white",
    description: "text-white/70",
    success: "bg-green-400/30 border-green-400 text-green-100",
    error: "border-red-500",
    warning: "border-yellow-500",
    info: "border-blue-500",
  },
};

export const toastUI = {
  success: ({ title, description }: ToastProps) =>
    toast.success(title, {
      description,
      ...baseStyle,
    }),

  error: ({ title, description }: ToastProps) =>
    toast.error(title, {
      description,
      ...baseStyle,
    }),

  info: ({ title, description }: ToastProps) =>
    toast.info(title, {
      description,
      ...baseStyle,
    }),

  warning: ({ title, description }: ToastProps) =>
    toast.warning(title, {
      description,
      ...baseStyle,
    }),

  loading: ({ title }: ToastProps) =>
    toast.loading(title, {
      ...baseStyle,
    }),

  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    },
  ) =>
    toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
      ...baseStyle,
    }),
};
