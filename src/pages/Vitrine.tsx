import { useEffect, useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { manager } from '../utils/CategoryManager';
import { Cake } from '../utils/Cake';
import './Vitrine.css';

export default function Vitrine() {
  const [loaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalCake, setModalCake] = useState<Cake | null>(null);

  useEffect(() => {
    if (!manager.loaded) {
      manager.fetchData().then(() => setLoaded(true));
    } else {
      setLoaded(true);
    }
  }, []);

  const categories = useMemo(() => {
    return loaded ? manager.getCategories() : [];
  }, [loaded]);

  const displayCakes = useMemo(() => {
    if (!loaded) return [];

    let cakes: Cake[];
    if (selectedCategory) {
      cakes = manager.getCakesByCategory(selectedCategory);
    } else {
      cakes = manager.listCake;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      cakes = cakes.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.content.toLowerCase().includes(q) ||
          c.categories.some(cat => cat.toLowerCase().includes(q))
      );
    }

    return cakes;
  }, [loaded, selectedCategory, searchQuery]);

  if (!loaded) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Chargement des créations…</p>
      </div>
    );
  }

  return (
    <div className="vitrine">
      <Navbar />

      {/* ---- Hero Vitrine ---- */}
      <section className="vitrine-hero">
        <div className="vitrine-hero__bg" />
        <div className="vitrine-hero__content container">
          <h1 className="animate-fade-up">Ma Vitrine</h1>
          <p className="animate-fade-up delay-1">
            Découvrez toutes mes créations artisanales, classées par catégorie
          </p>
        </div>
      </section>

      {/* ---- Search ---- */}
      <section className="vitrine-search container">
        <div className="search-bar">
          <svg className="search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Rechercher une création…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-bar__input"
          />
          {searchQuery && (
            <button className="search-bar__clear" onClick={() => setSearchQuery('')}>
              ✕
            </button>
          )}
        </div>
      </section>

      {/* ---- Categories ---- */}
      <section className="vitrine-categories container">
        <button
          className={`cat-chip ${selectedCategory === null ? 'cat-chip--active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          Toutes
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-chip ${selectedCategory === cat ? 'cat-chip--active' : ''}`}
            onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
          >
            {cat}
            <span className="cat-chip__count">{manager.getCakesByCategory(cat).length}</span>
          </button>
        ))}
      </section>

      {/* ---- Grid ---- */}
      <section className="vitrine-grid container">
        {displayCakes.length === 0 ? (
          <div className="vitrine-empty">
            <p>Aucune création trouvée pour cette recherche.</p>
          </div>
        ) : (
          <div className="cake-grid">
            {displayCakes.map((cake, i) => (
              <div
                key={`${cake.title}-${i}`}
                className="cake-card"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setModalCake(cake)}
              >
                <div className="cake-card__img-wrapper">
                  <img src={cake.imgSrc} alt={cake.title} loading="lazy" />
                  <div className="cake-card__overlay">
                    <span>Voir détails</span>
                  </div>
                </div>
                <div className="cake-card__body">
                  <h3 className="cake-card__title">{cake.title}</h3>
                  {cake.categories.length > 0 && (
                    <div className="cake-card__tags">
                      {cake.categories.map(cat => (
                        <span
                          key={cat}
                          className="cake-card__tag"
                          onClick={e => {
                            e.stopPropagation();
                            setSelectedCategory(cat);
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ---- Modal ---- */}
      {modalCake && (
        <div className="modal-backdrop" onClick={() => setModalCake(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setModalCake(null)}>✕</button>
            <div className="modal__image">
              <img src={modalCake.imgSrc} alt={modalCake.title} />
            </div>
            <div className="modal__body">
              <h2>{modalCake.title}</h2>
              {modalCake.content && <p className="modal__desc">{modalCake.content}</p>}
              {modalCake.categories.length > 0 && (
                <div className="modal__tags">
                  {modalCake.categories.map(cat => (
                    <span key={cat} className="cake-card__tag">{cat}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
