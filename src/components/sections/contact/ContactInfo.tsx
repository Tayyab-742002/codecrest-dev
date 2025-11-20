"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Check,
  Copy,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button, ButtonProps } from "@/src/components/ui/button";

const APP_EMAIL = "hello@codecrest.com";
const APP_PHONE = "+1 (555) 123-4567";
const APP_PHONE_2 = "+1 (555) 987-6543";

export default function ContactInfo() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/codecrest",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/codecrest",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/codecrest",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/codecrest",
      label: "Instagram",
    },
  ];

  return (
    <div className=" w-full bg-white">
      <div className="mx-auto h-full max-w-6xl ">
        <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
          <h1 className="text-4xl font-bold md:text-5xl text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-5 text-base">
            Contact the support team at Codecrest.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          <Box
            icon={Mail}
            title="Email"
            description="We respond to all emails within 24 hours."
          >
            <a
              href={`mailto:${APP_EMAIL}`}
              className="font-mono text-base font-medium tracking-wide hover:underline text-gray-900"
            >
              {APP_EMAIL}
            </a>
            <CopyButton className="size-6" test={APP_EMAIL} />
          </Box>
          <Box
            icon={MapPin}
            title="Office"
            description="Drop by our office for a chat."
          >
            <span className="font-mono text-base font-medium tracking-wide text-gray-900">
              123 Innovation Street, Tech City, TC 12345
            </span>
          </Box>
          <Box
            icon={Phone}
            title="Phone"
            description="We're available Mon-Fri, 9am-5pm."
            className="border-b-0 md:border-r-0"
          >
            <div>
              <div className="flex items-center gap-x-2">
                <a
                  href={`tel:${APP_PHONE}`}
                  className="block font-mono text-base font-medium tracking-wide hover:underline text-gray-900"
                >
                  {APP_PHONE}
                </a>
                <CopyButton className="size-6" test={APP_PHONE} />
              </div>
              <div className="flex items-center gap-x-2">
                <a
                  href={`tel:${APP_PHONE_2}`}
                  className="block font-mono text-base font-medium tracking-wide hover:underline text-gray-900"
                >
                  {APP_PHONE_2}
                </a>
                <CopyButton className="size-6" test={APP_PHONE_2} />
              </div>
            </div>
          </Box>
        </div>
        {/* <BorderSeparator /> */}
        <div className="relative flex h-full min-h-[320px] items-center justify-center">
          <div
            className={cn(
              "z-10 absolute inset-0 size-full",
              "bg-[radial-gradient(color-mix(in_oklab,rgba(0,0,0,0.3),transparent)_1px,transparent_1px)]",
              "bg-size-[32px_32px]",
              "mask-[radial-gradient(ellipse_at_center,white_30%,transparent)]"
            )}
          />

          <div className="relative z-10 space-y-6">
            <h2 className="text-center text-3xl font-bold md:text-4xl text-gray-900">
              Find us online
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-400 flex items-center gap-x-2 rounded-full border border-gray-400 px-4 py-2 transition-colors"
                >
                  <link.icon className="size-4 text-gray-700" />
                  <span className="font-mono text-sm font-medium tracking-wide text-gray-700">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({
  title,
  description,
  className,
  children,
  ...props
}: ContactBox) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between border-b border-gray-400 md:border-r md:border-b-0 bg-white",
        className
      )}
    >
      <div className="bg-gray-50 flex items-center gap-x-3 border-b border-gray-400 p-4">
        <props.icon className="text-gray-600 size-5" strokeWidth={1} />
        <h2 className="font-heading text-lg font-medium tracking-wider text-gray-900">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
      <div className="border-t border-gray-400 p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = ButtonProps & {
  test: string;
};

function CopyButton({
  className,
  variant = "ghost",
  size = "icon",
  test,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(test);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("disabled:opacity-100", className)}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      disabled={copied || props.disabled}
      {...props}
    >
      <div
        className={cn(
          "transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </Button>
  );
}
