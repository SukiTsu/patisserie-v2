import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

/* ---- Petit hook d'apparition au scroll ---- */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* ======== HERO ======== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <span className="hero__badge animate-fade-up">Pâtisserie Artisanale</span>
          <h1 className="hero__title animate-fade-up delay-1">
            Atelier <em>Dharma</em>
          </h1>
          <p className="hero__subtitle animate-fade-up delay-2">
            Des créations gourmandes, réalisées avec amour et des ingrédients naturels, 
            principalement issus de producteurs français.
          </p>
          <div className="hero__actions animate-fade-up delay-3">
            <Link to="/vitrine" className="btn btn-primary">
              Découvrir mes créations
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Me contacter
            </Link>
          </div>
        </div>
        <div className="hero__scroll-hint animate-fade-in delay-5">
          <span>↓</span>
        </div>
      </section>

      {/* ======== INTRO ======== */}
      <section className="intro section">
        <div className="container">
          <RevealSection>
            <h2 className="section-title">Bienvenue dans mon univers gourmand !</h2>
            <p className="section-subtitle">Une passion née enfant, perfectionnée avec le temps</p>
          </RevealSection>

          <div className="intro__grid">
            <RevealSection className="intro__text">
              <p>
                Depuis toute petite, la pâtisserie est pour moi une véritable passion.
                Après avoir passé des années à m'amuser avec les enfants dans des centres
                de loisirs, j'ai décidé de me lancer pleinement dans l'art sucré,
                notamment lors du confinement.
              </p>
              <p>
                Ce moment m'a permis de perfectionner mes recettes et d'obtenir mon
                <strong> CAP Pâtisserie</strong>. Aujourd'hui, je partage avec vous mes
                créations artisanales, réalisées avec amour et des ingrédients naturels.
              </p>
            </RevealSection>

            <RevealSection className="intro__stats">
              <div className="stat-card">
                <span className="stat-card__icon">🎓</span>
                <span className="stat-card__label">CAP Pâtisserie</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__icon">🌿</span>
                <span className="stat-card__label">Ingrédients naturels</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__icon">🇫🇷</span>
                <span className="stat-card__label">Producteurs français</span>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section className="services section">
        <div className="container">
          <RevealSection>
            <h2 className="section-title">Ce que je vous propose</h2>
            <p className="section-subtitle">Des douceurs pour chaque occasion</p>
          </RevealSection>

          <div className="services__grid">
            <RevealSection className="service-card">
              <div className="service-card__icon">🎂</div>
              <h3>Pâtisseries sur mesure</h3>
              <p>
                Des gourmandises pour petits et grands, avec une attention particulière
                à la qualité et un dosage équilibré en sucre.
              </p>
            </RevealSection>

            <RevealSection className="service-card">
              <div className="service-card__icon">👩‍🍳</div>
              <h3>Ateliers pâtisserie</h3>
              <p>
                En famille ou entre amis, apprenez à réaliser vos propres créations
                sous ma supervision. Un moment ludique et créatif !
              </p>
              <Link to="/ateliers" className="service-card__link">
                Découvrir les ateliers →
              </Link>
            </RevealSection>

            <RevealSection className="service-card">
              <div className="service-card__icon">🧁</div>
              <h3>Marchés & Événements</h3>
              <p>
                Retrouvez-moi sur les marchés de Viarmes (mercredi) et de
                L'Isle-Adam (dimanche) avec mes Dada Cookies et bien plus !
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ======== GALERIE PREVIEW ======== */}
      <section className="preview section">
        <div className="container">
          <RevealSection>
            <h2 className="section-title">Un aperçu de mes créations</h2>
            <p className="section-subtitle">Chaque gâteau raconte une histoire</p>
          </RevealSection>

          <div className="preview__gallery">
            {[
              { src: '/cake-blanc-beige.png', alt: 'Layer Cake Vanille' },
              { src: '/cake-multi.png', alt: 'Layer Cake Coloré' },
              { src: '/cake-blanc-fleur.png', alt: 'Cake Floral' },
              { src: '/dead-pool.png', alt: 'Cake Deadpool' },
            ].map((img, i) => (
              <RevealSection key={i} className={`preview__item preview__item--${i + 1}`}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="preview__item-overlay">
                  <span>{img.alt}</span>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="preview__cta">
            <Link to="/vitrine" className="btn btn-gold">
              Voir toutes mes créations →
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="cta-section">
        <div className="cta-section__overlay" />
        <div className="container">
          <RevealSection className="cta-section__content">
            <h2>Envie d'une création personnalisée ?</h2>
            <p>
              Chaque commande est unique. Décrivez-moi votre projet et je vous
              concocterai une proposition sur mesure.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Demander un devis
            </Link>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
