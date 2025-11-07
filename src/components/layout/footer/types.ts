export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface FooterConfig {
  company: {
    name: string
    description: string
    logo?: string
  }
  columns: FooterColumn[]
  social: SocialLink[]
  bottomLinks: FooterLink[]
  copyright: string
}

