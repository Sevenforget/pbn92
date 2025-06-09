import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function formatSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
