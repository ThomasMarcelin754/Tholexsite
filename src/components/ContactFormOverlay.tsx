'use client';

import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { useContactForm } from '@/contexts/ContactFormContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  revenue: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  revenue?: string;
}

export function ContactFormOverlay() {
  const { isOpen, closeForm } = useContactForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value.trim().length < 3) {
          return 'Minimum 3 caractères requis';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Adresse email invalide';
        }
        break;
      case 'phone':
        const phoneRegex = /^[\d\s()+\-]{8,}$/;
        const digitsOnly = value.replace(/[\s()+\-]/g, '');
        if (!phoneRegex.test(value) || digitsOnly.length < 8) {
          return 'Numéro de téléphone invalide (min. 8 chiffres)';
        }
        break;
      case 'company':
        if (value.trim().length < 3) {
          return 'Minimum 3 caractères requis';
        }
        break;
      case 'revenue':
        if (!value) {
          return 'Veuillez sélectionner une option';
        }
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Ne marquer comme "touched" et valider que si une valeur a été saisie
    if (value.trim().length > 0) {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    let hasErrors = false;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      company: true,
      revenue: true,
    });

    if (!hasErrors) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const resetForm = useCallback(() => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      revenue: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  }, []);

  const closeOverlay = useCallback(() => {
    closeForm();
    setTimeout(() => {
      resetForm();
    }, 300);
  }, [closeForm, resetForm]);

  // Reset form when overlay closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        resetForm();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, resetForm]);

  // Handle Escape key to close overlay
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeOverlay();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when overlay is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [closeOverlay, isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="tholex-form-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeOverlay();
          }}
        >
          <div className="tholex-form-card">
            {!isSubmitted ? (
              <>
                <div className="tholex-form-header">
                  <h2>Parlons de votre projet</h2>
                  <p>Remplissez ce formulaire et notre équipe vous recontactera sous 48h.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="tholex-form-grid">
                    <div className="tholex-form-field">
                      <label htmlFor="firstName">
                        VOTRE PRÉNOM <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Prénom"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        className={errors.firstName && touched.firstName ? 'error' : ''}
                      />
                      {errors.firstName && touched.firstName && (
                        <span className="error-message" id="firstName-error" role="alert">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    <div className="tholex-form-field">
                      <label htmlFor="lastName">
                        VOTRE NOM <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nom"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        className={errors.lastName && touched.lastName ? 'error' : ''}
                      />
                      {errors.lastName && touched.lastName && (
                        <span className="error-message" id="lastName-error" role="alert">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="tholex-form-field">
                    <label htmlFor="email">
                      VOTRE EMAIL <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="exemple@entreprise.fr"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={errors.email && touched.email ? 'error' : ''}
                    />
                    {errors.email && touched.email && (
                      <span className="error-message" id="email-error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="tholex-form-field tholex-form-field--compact">
                    <label htmlFor="phone">
                      VOTRE NUMÉRO DE TÉLÉPHONE<span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+33 6 12 34 56 78"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={errors.phone && touched.phone ? 'error' : ''}
                    />
                    {errors.phone && touched.phone && (
                      <span className="error-message" id="phone-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="tholex-form-field tholex-form-field--compact">
                    <label htmlFor="company">
                      NOM DE LA SOCIÉTÉ<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Votre entreprise"
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? 'company-error' : undefined}
                      className={errors.company && touched.company ? 'error' : ''}
                    />
                    {errors.company && touched.company && (
                      <span className="error-message" id="company-error" role="alert">
                        {errors.company}
                      </span>
                    )}
                  </div>

                  <div className="tholex-form-field tholex-form-field--compact">
                    <label htmlFor="revenue">
                      CHIFFRE D&apos;AFFAIRES DE LA SOCIÉTÉ<span className="required">*</span>
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.revenue}
                      aria-describedby={errors.revenue ? 'revenue-error' : undefined}
                      className={errors.revenue && touched.revenue ? 'error' : ''}
                    >
                      <option value="">Sélectionner une option</option>
                      <option value="<1m">{'< 1m€'}</option>
                      <option value="1m-5m">1m€ - 5m€</option>
                      <option value="5m-20m">5m€ - 20m€</option>
                      <option value=">20m">{'> 20m€'}</option>
                    </select>
                    {errors.revenue && touched.revenue && (
                      <span className="error-message" id="revenue-error" role="alert">
                        {errors.revenue}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="tholex-form-submit">
                    Envoyer la demande
                  </button>
                </form>

                <button
                  type="button"
                  className="tholex-form-close"
                  onClick={closeOverlay}
                  aria-label="Fermer le formulaire"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            ) : (
              <div className="tholex-form-success">
                <div className="success-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="3"/>
                    <path d="M20 32L28 40L44 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2>Merci, votre demande a bien été envoyée.</h2>
                <p>Notre équipe vous recontactera dans les plus brefs délais.</p>
                <button
                  type="button"
                  className="tholex-form-submit"
                  onClick={closeOverlay}
                >
                  Fermer
                </button>
              </div>
            )}
          </div>

          <style jsx>{`
            .tholex-form-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(3, 2, 19, 0.75);
              backdrop-filter: blur(4px);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem;
              z-index: 9999;
              animation: fadeIn 0.2s ease-out;
              overflow-y: auto;
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            .tholex-form-card {
              background: #ffffff;
              border-radius: 0.625rem;
              box-shadow: 0 20px 60px rgba(3, 2, 19, 0.15);
              max-width: 520px;
              width: 100%;
              position: relative;
              animation: slideUp 0.3s ease-out;
              margin: auto;
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .tholex-form-header {
              padding: 2rem 2rem 1.5rem;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }

            .tholex-form-header h2 {
              font-size: 1.5rem;
              font-weight: 500;
              color: #030213;
              margin: 0 0 0.5rem;
              line-height: 1.3;
            }

            .tholex-form-header p {
              font-size: 0.9375rem;
              color: #717182;
              margin: 0;
              line-height: 1.5;
            }

            form {
              padding: 2rem;
            }

            .tholex-form-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.25rem;
              margin-bottom: 1.25rem;
            }

            @media (max-width: 640px) {
              .tholex-form-grid {
                grid-template-columns: 1fr;
              }
            }

            .tholex-form-field {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }

            .tholex-form-field.tholex-form-field--compact {
              margin-top: 1.5rem;
            }

            .tholex-form-field label {
              font-size: 0.75rem;
              font-weight: 500;
              color: #030213;
              letter-spacing: 0.05em;
              text-transform: uppercase;
            }

            .tholex-form-field .required {
              color: #d4183d;
              margin-left: 0.125rem;
            }

            .tholex-form-field input,
            .tholex-form-field select {
              height: 2.75rem;
              width: 100%;
              border-radius: 0.5rem;
              border: 1px solid rgba(0, 0, 0, 0.1);
              background-color: #f3f3f5;
              padding: 0 0.875rem;
              font-size: 0.9375rem;
              font-weight: 400;
              color: #030213;
              transition: all 0.15s ease;
              outline: none;
            }

            .tholex-form-field input::placeholder,
            .tholex-form-field select option[value=""] {
              color: rgba(0, 0, 0, 0.45);
            }

            .tholex-form-field input:focus,
            .tholex-form-field select:focus {
              border-color: #030213;
              box-shadow: 0 0 0 3px rgba(3, 2, 19, 0.1);
              background-color: #ffffff;
            }

            .tholex-form-field input.error,
            .tholex-form-field select.error {
              border-color: #d4183d;
              box-shadow: 0 0 0 3px rgba(212, 24, 61, 0.1);
            }

            .tholex-form-field select {
              appearance: none;
              background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23030213' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: right 0.875rem center;
              padding-right: 2.5rem;
              cursor: pointer;
            }

            .error-message {
              font-size: 0.8125rem;
              color: #d4183d;
              font-weight: 400;
              margin-top: -0.25rem;
            }

            .tholex-form-submit {
              width: 100%;
              height: 2.75rem;
              border-radius: 0.5rem;
              border: none;
              background: #B7472A;
              color: #ffffff;
              font-size: 0.9375rem;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s ease;
              margin-top: 2rem;
              outline: none;
            }

            .tholex-form-submit:hover {
              background: rgba(183, 71, 42, 0.9);
              box-shadow: 0 4px 12px rgba(183, 71, 42, 0.3);
              transform: translateY(-1px);
            }

            .tholex-form-submit:focus-visible {
              box-shadow: 0 0 0 3px rgba(183, 71, 42, 0.2);
            }

            .tholex-form-submit:active {
              transform: translateY(0);
            }

            .tholex-form-close {
              position: absolute;
              top: 1.5rem;
              right: 1.5rem;
              width: 2rem;
              height: 2rem;
              border-radius: 0.375rem;
              border: none;
              background: transparent;
              color: #717182;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.15s ease;
              outline: none;
            }

            .tholex-form-close:hover {
              background: #f3f3f5;
              color: #030213;
            }

            .tholex-form-close:focus-visible {
              box-shadow: 0 0 0 3px rgba(3, 2, 19, 0.1);
            }

            .tholex-form-success {
              padding: 3rem 2rem;
              text-align: center;
              animation: fadeIn 0.4s ease-out;
            }

            .success-icon {
              display: inline-flex;
              color: #030213;
              margin-bottom: 1.5rem;
              animation: scaleIn 0.5s ease-out;
            }

            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .tholex-form-success h2 {
              font-size: 1.375rem;
              font-weight: 500;
              color: #030213;
              margin: 0 0 0.75rem;
              line-height: 1.3;
            }

            .tholex-form-success p {
              font-size: 0.9375rem;
              color: #717182;
              margin: 0 0 2rem;
              line-height: 1.5;
            }

            @media (max-width: 640px) {
              .tholex-form-overlay {
                align-items: flex-start;
              }

              .tholex-form-header {
                padding: 1.5rem 1.5rem 1.25rem;
              }

              .tholex-form-header h2 {
                font-size: 1.25rem;
              }

              form {
                padding: 1.5rem;
              }

              .tholex-form-success {
                padding: 2.5rem 1.5rem;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
