export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/masudbuilds",
    label: "Masud Rana on GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/iammasudrn/",
    label: "Masud Rana on LinkedIn",
  },
] as const;
