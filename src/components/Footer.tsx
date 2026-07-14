import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,40 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__col">
              <h3 className="footer__brand">
                ✦ Atelier <em>Dharma</em>
              </h3>
              <p className="footer__tagline">
                Pâtisseries artisanales réalisées avec amour et des ingrédients naturels.
              </p>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h4>Navigation</h4>
              <Link to="/">Accueil</Link>
              <Link to="/vitrine">Vitrine</Link>
              <Link to="/ateliers">Ateliers</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Infos */}
            <div className="footer__col">
              <h4>Informations</h4>
              <p>📍 Viarmes, Val d'Oise</p>
              <p>🕐 Sur commande</p>
              <p>🚚 Livraison dans un rayon de 15 km</p>
            </div>

            {/* Réseaux */}
            <div className="footer__col">
              <h4>Suivez-moi</h4>
              <a
                href="https://www.facebook.com/atelierdharma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/atelierdharma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="footer__bottom">
            <p>© {year} Atelier Dharma — Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
