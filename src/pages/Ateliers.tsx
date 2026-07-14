import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Ateliers.css';

/* ---- Données ---- */

const ateliers = [
  {
    id: 'biscuits',
    icon: '🍪',
    title: 'Décoration de biscuits',
    age: 'À partir de 5 ans',
    duree: '1h30 à 2h',
    tarif: '25 € / participant',
    inclus: [
      '4 biscuits carrés par personne',
      'Glaçage royal de différentes couleurs',
      'Toppings décoratifs',
    ],
    note: 'Si plus de 6 enfants, la présence d\'un adulte responsable est demandée.',
    description:
      'Un atelier ludique et accessible pour découvrir le plaisir de décorer ses propres biscuits. Les participants décorent leurs biscuits à l\'aide de glaçage royal coloré et de différents toppings.',
  },
  {
    id: 'enluminure',
    icon: '🛡️',
    title: 'Enluminure sur biscuit',
    age: 'À partir de 7 ans',
    duree: '1h30 à 2h',
    tarif: '30 € / participant',
    inclus: [
      '1 grand biscuit par participant',
      'Glaçage royal coloré',
      'Colorants alimentaires',
      'Pinceaux',
      'Poudre dorée',
    ],
    note: 'Si plus de 8 enfants, la présence d\'un adulte responsable est demandée.',
    description:
      'Inspiré de l\'art médiéval, cet atelier propose de transformer un biscuit en véritable petite œuvre d\'art. Les participants décorent un grand biscuit en forme de bouclier, parchemin ou blason à l\'aide de glaçage, de pinceaux alimentaires et de touches dorées.',
  },
  {
    id: 'cupcakes',
    icon: '🧁',
    title: 'Atelier Cupcakes',
    age: 'À partir de 6 ans',
    duree: '1h30 à 2h',
    tarif: '35 € / participant',
    inclus: [
      '4 cupcakes par personne',
      'Crème de pochage',
      'Toppings décoratifs',
    ],
    note: 'Si plus de 6 enfants, la présence d\'un adulte responsable est demandée.',
    description:
      'Un atelier gourmand où les participants apprennent à décorer leurs propres cupcakes. Ils découvrent les bases du pochage et personnalisent leurs gâteaux avec différents toppings.',
  },
  {
    id: 'mon-gateau',
    icon: '🎂',
    title: 'Mon Gâteau',
    age: 'À partir de 8 ans',
    duree: '2h à 3h',
    tarif: '35 € – 50 € / participant',
    inclus: ['Génoise', 'Garniture', 'Décoration'],
    note: 'Tarif variable selon les garnitures et options choisies.',
    description:
      'Dans cet atelier, vous réalisez votre propre gâteau personnalisé. Les participants apprennent à monter et décorer un gâteau à partir d\'une génoise déjà cuite.',
  },
];

const bars = [
  {
    id: 'gaufres',
    icon: '🧇',
    title: 'Bar à Gaufres',
    description: 'Gaufres préparées sur place avec plusieurs choix de coulis et toppings.',
    formuleOrg: [
      { label: 'Jusqu\'à 50 gaufres', prix: '3,50 € / gaufre' },
      { label: 'À partir de 60 gaufres', prix: '3,00 € / gaufre' },
    ],
    formuleInvite: '4,00 € / gaufre',
  },
  {
    id: 'glaces',
    icon: '🍨',
    title: 'Bar à Crèmes Glacées',
    description: 'Service de coupes glacées avec 2 boules de glace, coulis et toppings. Choix jusqu\'à 4 parfums.',
    formuleOrg: [
      { label: 'Jusqu\'à 50 coupes', prix: '5,00 € / coupe' },
      { label: 'À partir de 60 coupes', prix: '4,50 € / coupe' },
    ],
    formuleInvite: '5,50 € / coupe',
  },
  {
    id: 'cookies',
    icon: '🍪',
    title: 'Bar à Cookies',
    description: 'Cookies proposés en plusieurs saveurs gourmandes.',
    formuleOrg: [
      { label: 'Jusqu\'à 50 cookies', prix: '2,50 € / cookie' },
      { label: 'À partir de 60 cookies', prix: '2,00 € / cookie' },
    ],
    formuleInvite: '3,00 € / cookie',
  },
  {
    id: 'cupcakes-bar',
    icon: '🧁',
    title: 'Bar à Cupcakes',
    description: 'Cupcakes proposés en plusieurs saveurs et décorations.',
    formuleOrg: [
      { label: 'Jusqu\'à 50 cupcakes', prix: '4,50 € / cupcake' },
      { label: 'À partir de 60 cupcakes', prix: '4,00 € / cupcake' },
    ],
    formuleInvite: '4,80 € / cupcake',
  },
];

type TabType = 'ateliers' | 'bars';

export default function Ateliers() {
  const [activeTab, setActiveTab] = useState<TabType>('ateliers');
  const [expandedAtelier, setExpandedAtelier] = useState<string | null>(null);

  const toggleAtelier = (id: string) => {
    setExpandedAtelier(prev => (prev === id ? null : id));
  };

  return (
    <div className="ateliers">
      <Navbar />

      {/* ---- Hero ---- */}
      <section className="ateliers-hero">
        <div className="ateliers-hero__bg" />
        <div className="ateliers-hero__content container">
          <span className="ateliers-hero__badge animate-fade-up">Sur mesure</span>
          <h1 className="animate-fade-up delay-1">Ateliers & Événements</h1>
          <p className="animate-fade-up delay-2">
            Des activités gourmandes et conviviales, à domicile ou sur le lieu de votre événement
          </p>
        </div>
      </section>

      {/* ---- Déplacement ---- */}
      <section className="deplacement container">
        <div className="deplacement__card">
          <div className="deplacement__icon">🚗</div>
          <div className="deplacement__content">
            <h3>Déplacement</h3>
            <p>
              Je me déplace là où <strong>vous en avez besoin !</strong> Les ateliers peuvent avoir lieu à mon atelier, chez vous ou dans tout autre lieu de votre choix. <strong>Les bars à desserts sont installés directement sur le lieu de votre événement.</strong>
            </p>
            <div className="deplacement__tarifs">
              <div className="deplacement__tarif">
                <span className="deplacement__tarif-label">Jusqu'à 10 km</span>
                <span className="deplacement__tarif-prix deplacement__tarif-prix--free">Gratuit</span>
              </div>
              <div className="deplacement__tarif">
                <span className="deplacement__tarif-label">Au-delà de 10 km</span>
                <span className="deplacement__tarif-prix">0,50 € / km</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Tabs ---- */}
      <section className="ateliers-tabs container">
        <div className="tab-bar">
          <button
            className={`tab-btn ${activeTab === 'ateliers' ? 'tab-btn--active' : ''}`}
            onClick={() => setActiveTab('ateliers')}
          >
            <span className="tab-btn__icon">👩‍🍳</span>
            Ateliers Pâtisserie
          </button>
          <button
            className={`tab-btn ${activeTab === 'bars' ? 'tab-btn--active' : ''}`}
            onClick={() => setActiveTab('bars')}
          >
            <span className="tab-btn__icon">🍰</span>
            Bars à Desserts
          </button>
        </div>
      </section>

      {/* ---- Intro commun ---- */}
      <section className="ateliers-intro container">
        {activeTab === 'ateliers' ? (
          <div className="intro-block">
            <h2>Le concept</h2>
            <p>
              Envie d'une activité originale et gourmande pour votre événement ? Les ateliers pâtisserie
              de l'Atelier Dharma sont pensés pour être <strong>conviviaux, créatifs et accessibles à tous</strong>.
            </p>
            <p>
              Que ce soit pour un anniversaire, une soirée entre amis, une pyjama party, un EVJF,
              une réunion de famille ou même un événement d'entreprise, les ateliers permettent de
              partager un moment amusant tout en créant ses propres gourmandises.
            </p>
            <p>
              Chaque participant réalise ses créations et <strong>repart avec ses réalisations</strong>.
            </p>
            <div className="intro-badge">
              ✨ Tous les ateliers peuvent être adaptés selon les besoins alimentaires :
              <strong> sans gluten, sans lactose ou végétalien</strong> (sur demande).
            </div>
          </div>
        ) : (
          <div className="intro-block">
            <h2>Le concept</h2>
            <p>
              Vous organisez un événement et vous souhaitez proposer des desserts variés sans vous
              compliquer la vie ? L'Atelier Dharma peut installer et tenir un véritable
              <strong> bar à desserts sur place</strong> pendant votre événement.
            </p>
            <p>C'est une solution idéale pour :</p>
            <div className="intro-tags">
              {['Anniversaires', 'Mariages', 'Fêtes de famille', 'Événements d\'entreprise', 'Soirées entre amis'].map(tag => (
                <span key={tag} className="intro-tag">{tag}</span>
              ))}
            </div>
            <div className="formules-recap">
              <div className="formule-mini">
                <span className="formule-mini__badge">Formule 1</span>
                <p><strong>L'organisateur offre les desserts</strong> — Devis selon le nombre d'invités.</p>
              </div>
              <div className="formule-mini">
                <span className="formule-mini__badge">Formule 2</span>
                <p><strong>Les invités paient leurs desserts</strong> — Seul le déplacement est facturé.</p>
              </div>
            </div>
            <div className="intro-badge">
              ✨ Tous les bars peuvent être adaptés <strong>sans gluten, sans lactose ou vegan</strong> sur demande.
            </div>
          </div>
        )}
      </section>

      {/* ---- Liste Ateliers ---- */}
      {activeTab === 'ateliers' && (
        <section className="ateliers-list container">
          {ateliers.map((a, i) => (
            <div
              key={a.id}
              className={`atelier-card ${expandedAtelier === a.id ? 'atelier-card--expanded' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="atelier-card__header" onClick={() => toggleAtelier(a.id)}>
                <div className="atelier-card__icon">{a.icon}</div>
                <div className="atelier-card__summary">
                  <h3>{a.title}</h3>
                  <div className="atelier-card__meta">
                    <span className="meta-chip">{a.age}</span>
                    <span className="meta-chip">⏱ {a.duree}</span>
                    <span className="meta-chip meta-chip--price">{a.tarif}</span>
                  </div>
                </div>
                <div className={`atelier-card__chevron ${expandedAtelier === a.id ? 'rotated' : ''}`}>
                  ▾
                </div>
              </div>

              <div className="atelier-card__body">
                <p className="atelier-card__desc">{a.description}</p>
                <div className="atelier-card__details">
                  <div className="atelier-card__inclus">
                    <h4>Inclus</h4>
                    <ul>
                      {a.inclus.map(item => (
                        <li key={item}>
                          <span className="check-icon">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {a.note && (
                  <div className="atelier-card__note">
                    ⚠️ {a.note}
                  </div>
                )}
              </div>
            </div>
          ))}

      {/* ---- Atelier sur mesure ---- */}
<section className="atelier-sur-mesure container">
  <div className="sur-mesure-card">
    <div className="sur-mesure-icon">✨</div>

    <div className="sur-mesure-content">
      <h2>Un atelier sur mesure ?</h2>

      <p>
        Vous avez une autre idée en tête ? Vous souhaitez apprendre à réaliser
        un gâteau ou un dessert en particulier qui ne figure pas dans les
        ateliers proposés ? C'est tout à fait possible !
      </p>

      <p>
        Que vous rêviez de confectionner un entremets, un layer cake, une tarte
        ou toute autre création, je peux concevoir un atelier entièrement
        adapté à votre demande.
      </p>

      <p>
        Il vous suffit de m'envoyer un e-mail en précisant le dessert souhaité,
        le nombre de participants ainsi que toute information utile.
      </p>

      <div className="sur-mesure-badge">
        ✨ Je vous proposerai ensuite un devis personnalisé.
      </div>
    </div>
  </div>
</section>

        </section>
      )}

      {/* ---- Liste Bars ---- */}
      {activeTab === 'bars' && (
        <section className="ateliers-list container">
          {bars.map((b, i) => (
            <div
              key={b.id}
              className={`bar-card`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="bar-card__header">
                <span className="bar-card__icon">{b.icon}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p className="bar-card__desc">{b.description}</p>
                </div>
              </div>

              <div className="bar-card__formules">
                <div className="bar-formule bar-formule--org">
                  <h4>🥂 Formule Organisateur</h4>
                  <p className="bar-formule__subtitle">L'organisateur offre les desserts</p>
                  <div className="bar-formule__tarifs">
                    {b.formuleOrg.map(t => (
                      <div key={t.label} className="bar-tarif-row">
                        <span>{t.label}</span>
                        <span className="bar-tarif-prix">{t.prix}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bar-formule bar-formule--invite">
                  <h4>🎟️ Formule Invités</h4>
                  <p className="bar-formule__subtitle">Les invités paient directement</p>
                  <div className="bar-formule__tarif-big">{b.formuleInvite}</div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}




      {/* ---- CTA ---- */}
      <section className="ateliers-cta container">
        <div className="cta-box">
          <h2>Contactez-moi !</h2>
          <p>
            Je serai ravie d'échanger avec vous, de répondre à vos questions et de vous accompagner dans votre projet. 
            <br/><strong>À très bientôt en cuisine !</strong>
          </p>
          <div className="cta-box__actions">
            <Link to="/contact" className="btn btn-primary">
              Demander un devis
            </Link>
            <a href="tel:" className="btn btn-secondary">
              Appeler
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
