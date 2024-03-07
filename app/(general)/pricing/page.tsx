import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Esta es la página de precios',
  keywords: ['about', 'edgar', 'jeje']
};

export default function PricingPage() {
 return (
    <span className="text-7xl">Pricing Page</span>
  )
}