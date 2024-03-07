import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Esta es la página de contacto',
  keywords: ['contact', 'edgar', 'jeje']
};

export default function ContactPage() {
  return (
    <span className='text-7xl'>ContactPage</span>
  )
}
