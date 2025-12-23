import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diana Lashes | Premium Lash Extensions",
  description: "Experience the art of lash-by-lash extensions in Satu Mare, Romania.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
