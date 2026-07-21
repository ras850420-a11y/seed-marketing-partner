"use client";

import { useState, type BaseSyntheticEvent, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const optionalText = z.string().trim().optional();
const optionalUrl = z
  .string()
  .trim()
  .refine((value) => value.length === 0 || /^https?:\/\/.+/.test(value), {
    message: "URLは https:// から入力してください。"
  })
  .optional();

const formSchema = z.object({
  companyName: optionalText,
  officeName: z.string().trim().min(1, "事務所名を入力してください。"),
  name: z.string().trim().min(1, "氏名を入力してください。"),
  email: z.string().trim().email("メールアドレスを正しく入力してください。"),
  phone: optionalText,
  websiteUrl: optionalUrl,
  message: z.string().trim().min(1, "相談内容を入力してください。")
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  variant: "consultation" | "contact";
}

const inputClass =
  "mt-2 min-h-12 w-full rounded-lg border border-line bg-white px-4 text-base text-ink outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10";

const textareaClass =
  "mt-2 min-h-36 w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10";

function encodeFormData(formData: FormData) {
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      params.append(key, value);
    }
  });

  return params.toString();
}

function isLocalPreview() {
  return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
}

async function submitToNetlify(form: HTMLFormElement) {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData(new FormData(form))
  });

  if (!response.ok && !isLocalPreview()) {
    throw new Error("Netlify form submission failed.");
  }
}

export function ContactForm({ variant }: ContactFormProps) {
  const formName = "seed-contact";
  const inquiryType = variant === "consultation" ? "無料相談" : "お問い合わせ";
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      officeName: "",
      name: "",
      email: "",
      phone: "",
      websiteUrl: "",
      message: ""
    }
  });

  async function onSubmit(_values: FormValues, event?: BaseSyntheticEvent) {
    setSubmitError(null);

    const form = event?.target;
    if (!(form instanceof HTMLFormElement)) {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
      return;
    }

    try {
      await submitToNetlify(form);
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
    }
  }

  if (submitted) {
    return (
      <Card>
        <h2 className="text-xl font-bold text-brand">
          {variant === "consultation" ? "ありがとうございます。" : "お問い合わせありがとうございます。"}
        </h2>
        <p className="mt-4 leading-8 text-muted">
          {variant === "consultation"
            ? "内容を確認し、3営業日以内に返信いたします。"
            : "内容を確認後、ご連絡いたします。"}
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <form
        className="grid gap-5"
        action="/"
        method="POST"
        name={formName}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <input type="hidden" name="form-name" value={formName} />
        <input type="hidden" name="inquiryType" value={inquiryType} />
        <p className="sr-only" aria-hidden="true">
          <label>
            入力しないでください
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        {variant === "consultation" ? (
          <Field label="会社名" optional error={errors.companyName?.message}>
            <input className={inputClass} type="text" autoComplete="organization" {...register("companyName")} />
          </Field>
        ) : null}

        <Field label="事務所名" required error={errors.officeName?.message}>
          <input className={inputClass} type="text" autoComplete="organization" {...register("officeName")} />
        </Field>

        <Field label="氏名" required error={errors.name?.message}>
          <input className={inputClass} type="text" autoComplete="name" {...register("name")} />
        </Field>

        <Field label="メール" required error={errors.email?.message}>
          <input className={inputClass} type="email" autoComplete="email" {...register("email")} />
        </Field>

        <Field label="電話" optional error={errors.phone?.message}>
          <input className={inputClass} type="tel" autoComplete="tel" {...register("phone")} />
        </Field>

        {variant === "consultation" ? (
          <Field label="ホームページURL" optional error={errors.websiteUrl?.message}>
            <input className={inputClass} type="url" placeholder="https://" {...register("websiteUrl")} />
          </Field>
        ) : null}

        <Field
          label={variant === "consultation" ? "相談内容" : "お問い合わせ内容"}
          required
          error={errors.message?.message}
        >
          <textarea className={textareaClass} {...register("message")} />
        </Field>

        {submitError ? <p className="text-sm font-bold text-accent">{submitError}</p> : null}

        <div>
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "送信中" : "送信"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

interface FieldProps {
  label: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
  optional?: boolean;
}

function Field({ label, children, error, required = false, optional = false }: FieldProps) {
  return (
    <label className="block text-sm font-bold text-brand">
      <span className="flex items-center gap-2">
        {label}
        {required ? <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">必須</span> : null}
        {optional ? <span className="rounded bg-soft px-2 py-0.5 text-xs text-muted">任意</span> : null}
      </span>
      {children}
      {error ? <span className="mt-2 block text-sm text-accent">{error}</span> : null}
    </label>
  );
}
