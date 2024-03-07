import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'SEO Description',
  keywords: ['about', 'edgar', 'jeje']
};
export default function AboutPage() {
  return (
      <span className="text-7xl">About</span>
  );
};