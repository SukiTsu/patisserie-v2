import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <Navbar />

      <main className="not-found__content container">
        <p className="not-found__eyebrow">Erreur 404</p>
        <p className="not-found__illustration" aria-hidden="true">🧁</p>
        <h1>Cette page a disparu…</h1>
        <p className="not-found__text">
          Elle a peut-être été déplacée, supprimée ou l’adresse saisie n’est pas correcte.
          Retrouvons ensemble le chemin vers une création gourmande.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary">Retour à l’accueil</Link>
          <Link to="/vitrine" className="btn btn-secondary">Voir la vitrine</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
