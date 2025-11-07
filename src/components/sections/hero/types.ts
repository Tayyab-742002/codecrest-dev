export interface HeroButton {
  label: string
  href: string
  variant?: "primary" | "secondary"
  external?: boolean
}

export interface HeroConfig {
  title: string
  subtitle?: string
  description: string
  buttons: HeroButton[]
  image?: {
    src: string
    alt: string
  }
}

