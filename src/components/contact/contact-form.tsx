"use client";

import * as React from "react";
import { Send, Loader2, AlertCircle, Info, ExternalLink, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [values, setValues] = React.useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitNotice, setSubmitNotice] = React.useState<{
    type: "info" | "error";
    message: string;
    mailtoUrl?: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email.trim())) {
        newErrors.email = "Please enter a valid email address (e.g. name@example.com).";
      }
    }

    if (!values.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Please enter a message with at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitNotice) {
      setSubmitNotice(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate validation and state transition
    setTimeout(() => {
      setIsSubmitting(false);

      // Honest handling: Since no backend email service or API endpoint is configured in this repository,
      // direct background delivery requires provider setup (e.g., Resend, SendGrid).
      // We provide the user with a pre-filled mailto action and clearly report configuration requirements.
      const encodedSubject = encodeURIComponent(`[Portfolio] ${values.subject.trim()}`);
      const encodedBody = encodeURIComponent(
        `Hi Masud,\n\n${values.message.trim()}\n\n---\nFrom: ${values.name.trim()}\nEmail: ${values.email.trim()}`
      );
      const mailtoUrl = `mailto:immasudrn@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

      setSubmitNotice({
        type: "info",
        message:
          "Form validated. Direct automated delivery requires a backend email provider configuration (e.g., Resend). You can launch your email client with this pre-filled message below.",
        mailtoUrl,
      });
    }, 350);
  };

  const handleReset = () => {
    setValues({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmitNotice(null);
  };

  return (
    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 shadow-xs">
      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          Send a Message
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Fill out the form below or email me directly at{" "}
          <a
            href="mailto:immasudrn@gmail.com"
            className="text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
          >
            immasudrn@gmail.com
          </a>
          .
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Your Name <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              disabled={isSubmitting}
              value={values.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              placeholder="e.g. Alex Johnson"
              className={cn(
                "w-full rounded-xl border bg-background/80 px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50",
                "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
                "disabled:cursor-not-allowed disabled:opacity-60",
                errors.name
                  ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                  : "border-border/80"
              )}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                role="alert"
                className="text-xs font-medium text-destructive flex items-center gap-1 mt-0.5"
              >
                <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Email Address <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isSubmitting}
              value={values.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              placeholder="e.g. alex@example.com"
              className={cn(
                "w-full rounded-xl border bg-background/80 px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50",
                "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
                "disabled:cursor-not-allowed disabled:opacity-60",
                errors.email
                  ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                  : "border-border/80"
              )}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="text-xs font-medium text-destructive flex items-center gap-1 mt-0.5"
              >
                <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-subject"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Subject <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            disabled={isSubmitting}
            value={values.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            placeholder="e.g. Project Inquiry / Opportunity"
            className={cn(
              "w-full rounded-xl border bg-background/80 px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50",
              "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
              "disabled:cursor-not-allowed disabled:opacity-60",
              errors.subject
                ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                : "border-border/80"
            )}
          />
          {errors.subject && (
            <p
              id="contact-subject-error"
              role="alert"
              className="text-xs font-medium text-destructive flex items-center gap-1 mt-0.5"
            >
              <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-message"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Message <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            disabled={isSubmitting}
            value={values.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            placeholder="Tell me about your project, idea, or questions..."
            className={cn(
              "w-full rounded-xl border bg-background/80 px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 resize-y min-h-[120px]",
              "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
              "disabled:cursor-not-allowed disabled:opacity-60",
              errors.message
                ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                : "border-border/80"
            )}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="text-xs font-medium text-destructive flex items-center gap-1 mt-0.5"
            >
              <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Status / Notice Announcement Area */}
        <div aria-live="polite" className="space-y-3">
          {submitNotice && (
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
              <div className="flex items-start gap-2.5">
                <Info className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    {submitNotice.message}
                  </p>
                  {submitNotice.mailtoUrl && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        href={submitNotice.mailtoUrl}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span>Open in Email Client</span>
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1 rounded-lg border border-border/80 bg-background/80 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <RotateCcw className="size-3" aria-hidden="true" />
                        <span>Clear Form</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-between pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 h-10 font-medium text-sm shadow-xs transition-transform active:scale-98 motion-reduce:transform-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin motion-reduce:animate-none mr-2" aria-hidden="true" />
                <span>Preparing...</span>
              </>
            ) : (
              <>
                <Send className="size-4 mr-2" aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </Button>

          {(values.name || values.email || values.subject || values.message) && (
            <button
              type="button"
              onClick={handleReset}
              disabled={isSubmitting}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
