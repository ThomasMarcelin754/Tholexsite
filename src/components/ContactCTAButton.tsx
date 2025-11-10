'use client';

import React from 'react';
import { useContactForm } from '@/contexts/ContactFormContext';

interface ContactCTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

export function ContactCTAButton({
  children = 'Nous contacter',
  className = '',
  variant = 'default',
  size = 'default',
}: ContactCTAButtonProps) {
  const { openForm } = useContactForm();

  const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]';

  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
  };

  const sizeStyles = {
    default: 'h-10 px-6 text-sm',
    sm: 'h-8 px-4 text-sm',
    lg: 'h-12 px-8 text-base',
  };

  return (
    <button
      onClick={openForm}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
