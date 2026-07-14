import { Cake } from './Cake';
import { extractAndRemoveHashtagsAndBrackets } from './parsePost';

const FB_PAGE_ID = '122096825252577148';
const GRAPH_VERSION = 'v21.0';

export class CategoryManager {
  listCake: Cake[] = [];
  categoryMap: Map<string, Cake[]> = new Map();
  private nbData = 0;
  private _loaded = false;

  get loaded() {
    return this._loaded;
  }

  addCake(cake: Cake): void {
    this.listCake.push(cake);
    for (const category of cake.categories) {
      if (!this.categoryMap.has(category)) {
        this.categoryMap.set(category, []);
      }
      this.categoryMap.get(category)!.push(cake);
    }
  }

  getCakesByCategory(category: string): Cake[] {
    return this.categoryMap.get(category) ?? [];
  }

  getCategories(): string[] {
    return Array.from(this.categoryMap.keys());
  }

  async fetchData(): Promise<void> {
    const token = import.meta.env.VITE_TOKEN;
    if (!token) {
      console.warn('VITE_TOKEN non défini — données de démonstration chargées.');
      this.loadDemoData();
      return;
    }

    const url = `https://graph.facebook.com/${GRAPH_VERSION}/${FB_PAGE_ID}?fields=id%2Cposts.limit(100)%7Bmessage%2Cfull_picture%7D&access_token=${token}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur Facebook API: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const posts = data.posts?.data ?? [];

      if (this.nbData !== posts.length) {
        this.nbData = posts.length;
        for (const post of posts) {
          if (post.full_picture && post.message) {
            const parsed = extractAndRemoveHashtagsAndBrackets(post.message);
            const cake = new Cake(
              parsed.titles[0] ?? 'Création',
              post.full_picture,
              parsed.cleanedContent,
              parsed.categories
            );
            this.addCake(cake);
          }
        }
      }

      this._loaded = true;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      this.loadDemoData();
    }
  }

  /** Données de démonstration quand l'API Facebook n'est pas disponible */
  private loadDemoData(): void {
    const demos: { title: string; img: string; desc: string; cats: string[] }[] = [
      { title: 'Layer Cake Vanille-Fraise', img: 'https://atelier-dharma.fr/cake-blanc-beige.png', desc: 'Un magnifique layer cake vanille garni de fraises fraîches et de crème onctueuse.', cats: ['Layer Cake', 'Fraise'] },
      { title: 'Layer Cake Coloré', img: 'https://atelier-dharma.fr/cake-multi.png', desc: 'Un layer cake aux couleurs vives, parfait pour les anniversaires festifs.', cats: ['Layer Cake', 'Anniversaire'] },
      { title: 'Cake Thème Gaming', img: 'https://atelier-dharma.fr/cake-ps5.png', desc: 'Un cake personnalisé thème gaming, idéal pour les amateurs de jeux vidéo.', cats: ['Layer Cake', 'Personnalisé'] },
      { title: 'Cake Deadpool', img: 'https://atelier-dharma.fr/dead-pool.png', desc: 'Un cake sur le thème de Deadpool, réalisé avec soin pour les fans de comics.', cats: ['Layer Cake', 'Personnalisé'] },
      { title: 'Cake Floral Blanc', img: 'https://atelier-dharma.fr/cake-blanc-fleur.png', desc: 'Un élégant cake blanc orné de fleurs en pâte d\'amande, idéal pour un mariage.', cats: ['Layer Cake', 'Mariage'] },
      { title: 'Dada Cookies', img: 'https://atelier-dharma.fr/coockies.PNG', desc: 'Mes fameux Dada Cookies, croustillants à l\'extérieur et fondants à l\'intérieur.', cats: ['Cookies'] },
    ];

    for (const d of demos) {
      const cake = new Cake(d.title, d.img, d.desc, d.cats);
      this.addCake(cake);
    }

    this._loaded = true;
  }
}

export const manager = new CategoryManager();
