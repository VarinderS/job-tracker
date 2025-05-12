import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names or class name objects into a single string.
 * Uses clsx for conditional class names and tailwind-merge to properly merge Tailwind CSS classes.
 *
 * @param inputs - Class names or conditional class objects
 * @returns A string of merged class names
 *
 * Example usage:
 * cn("text-red-500", isActive && "bg-blue-500", { "p-4": isPadded })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
