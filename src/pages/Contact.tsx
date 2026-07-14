import { useState, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const updateField = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Envoi via un service comme Formspree, EmailJS, ou votre propre backend
      // Ici on utilise Formspree comme exemple — remplacez l'URL par votre endpoint
      const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

      if (formspreeUrl) {
        const response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            _subject: form.subject || 'Nouveau message depuis le site',
            message: form.message,
          }),
        });

        if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      } else {
        // Simulation si pas d'endpoint configuré
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Formulaire soumis (mode démo):', form);
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact">
      <Navbar />

      {/* ---- Hero ---- */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="contact-hero__content container">
          <h1 className="animate-fade-up">Contactez-moi</h1>
          <p className="animate-fade-up delay-1">
            Une envie, un projet, une question ? Je serai ravie d'échanger avec vous !
          </p>
        </div>
      </section>

      {/* ---- Content ---- */}
      <section className="contact-body container">
        <div className="contact-grid">
          {/* Infos */}
          <div className="contact-infos">
            <h2>Mes coordonnées</h2>
            <div className="info-card">
              <div className="info-card__icon">📍</div>
              <div>
                <h4>Adresse</h4>
                <p>Viarmes, Val d'Oise</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card__icon">📞</div>
              <div>
                <h4>Téléphone</h4>
                <p>Sur demande</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card__icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>Via le formulaire</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card__icon">🕐</div>
              <div>
                <h4>Horaires</h4>
                <p>Sur commande uniquement</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card__icon">🚚</div>
              <div>
                <h4>Livraison</h4>
                <p>Rayon de 15 km autour de Viarmes</p>
              </div>
            </div>

            {/* Marchés */}
            <div className="contact-markets">
              <h3>Retrouvez-moi aux marchés</h3>
              <div className="market-badge">
                <span className="market-badge__day">Mercredi</span>
                <span className="market-badge__place">Marché de Viarmes</span>
              </div>
              <div className="market-badge">
                <span className="market-badge__day">Dimanche</span>
                <span className="market-badge__place">Marché de L'Isle-Adam</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <h2>Envoyez-moi un message</h2>

            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success__icon">✓</div>
                <h3>Message envoyé !</h3>
                <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
                <button className="btn btn-secondary" onClick={() => setStatus('idle')}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={e => updateField('name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="votre@email.fr"
                      value={form.email}
                      onChange={e => updateField('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      value={form.phone}
                      onChange={e => updateField('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Sujet</label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={e => updateField('subject', e.target.value)}
                    >
                      <option value="">— Choisir un sujet —</option>
                      <option value="Commande">Commande personnalisée</option>
                      <option value="Devis">Demande de devis</option>
                      <option value="Atelier">Réservation atelier</option>
                      <option value="Marché">Question sur les marchés</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou votre demande…"
                    value={form.message}
                    onChange={e => updateField('message', e.target.value)}
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error">
                    Une erreur est survenue. Veuillez réessayer ou me contacter directement.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
