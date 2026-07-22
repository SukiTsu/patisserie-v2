
const PAST = "/vitrine/"
const DATA = [
    {
        title: "Cupcake",
        imgSrc: `${PAST}cupcake.jpg`,
        content: `
        Les 4 cupcakes gourmands inspiré du Cycle Féminin !
        J’ai voulu créer ces petits gâteaux aux ingrédients choisis avec attention pour correspondre aux besoins de la femme selon la phase du cycle. 
        </br>🌑 Recharger — Cacao & baies de goji, ganache chocolat noir
        </br>🌗 Équilibrer — Avoine & amande sans gluten, fourrage au yaourt
        </br>🌕 Apaiser — Sarrasin & banane, crème beurre de cacahuète
        </br>🌘 Soulager — Ananas & glaçage noix de coco, sans lactose
        </br>Chaque recette est imaginée et réalisée par mes soins. Du fait maison avec amour pour un plaisir gourmand et sucré juste comme il faut.
        `,
        categories: ["parisserieartisanale"]
    },
    {
        title: "Moelleux chocolat",
        imgSrc: `${PAST}mouelleuxchocolat.jpg`,
        content: `
        Sucré juste comme il faut avec son chocolat 70% 
        </br>Son moelleux conviendra à tout les gourmands !`,
        categories: ["gateauvoyage"]
    },    
    {
        title: "Banana Bread",
        imgSrc: `${PAST}bananabread.jpg`,
        content: `
        Voici un gâteau à la banane et aux graines de sésame.
        </br>Sans sucre ajouté, il est parfaitement adapté au diabétique !`,
        categories: ["gateauvoyage"]
    },    
    {
        title: "Pomme de pain",
        imgSrc: `${PAST}pommepain.jpg`,
        content: `
        Du chocolat, avec du chocolat, et des céréales bio au chocolat pour la décoration !
        </br>C’est évidemment le plaisir idéal pour tout les amoureux de chocolat !`,
        categories: ["saisonnier"]
    },
    {
        title: "Biscuit Grenouille",
        imgSrc: `${PAST}grenouille.jpg`,
        content: `
        Fait à base de pâte de pistache maison ces gâteaux débordent de saveur ! Ils sont croustillants et abordables par tous grâce à leurs composants sans gluten et sans lactose. 
        </br>A commandé tout de suite !`,
        categories: ["saisonnier","gateauvoyage"]
    },    
    {
        title: "Biscuit Hérisson",
        imgSrc: `${PAST}herisson.jpg`,
        content: `
        Petits animaux gourmands recouvert de noisettes et d’un peu de chocolat. Aussi adorable que croustillant 🦔`,
        categories: ["saisonnier","gateauvoyage"]
    },
    {
        title: "Amaretti",
        imgSrc: `${PAST}amaretti.jpg`,
        content: `
        Ces petites bouchées sont d’inspiration italienne. Leurs bon goût d’amande n’est que plus appréciables car elles sont sans gluten !`,
        categories: ["gateauvoyage"]
    },       
    {
        title: "Bonhomme de noix de coco",
        imgSrc: `${PAST}bonhommeneige.jpg`,
        content: `
        Ces petits bonhommes s’approchent de la truffe chocolat blanc et noix de coco. Une texture onctueuse et un goût léger pour accompagner ce design adorable qui peut ravir petit et grand !`,
        categories: ["saisonnier"]
    },
        {
        title: "Bûche Glacée",
        imgSrc: `${PAST}bucheglace.jpg`,
        content: `
        Une onctueuse crème glacée à la vanille avec un insert praliné noisette maison ! 🌰`,
        categories: ["saisonnier"]
    },           
    {
        title: "Biscuit pain d’épice",
        imgSrc: `${PAST}painepice.jpg`,
        content: `
        Ces petits bonhommes sont 100% miel sans sucre ajouté en plus d’être adorable.`,
        categories: ["gateauvoyage"]
    },   
    {
        title: "Bûche entremet",
        imgSrc: `${PAST}bucheentremet.jpg`,
        content: `
        Une bûche mousseuse au chocolat intense avec son insert praliné. Un croustillant et un biscuit noisette pour la texture.`,
        categories: ["saisonnier"]
    },   
    {
        title: "Bûche de Noël Café",
        imgSrc: `${PAST}buchecafe.jpg`,
        content: `
       Voici l’onctueuse bûche traditionnelle. Avec son biscuit moelleux et sa crème au beurre gourmande.
Café, Chocolat, Praliné et vanille sont toutes les saveurs disponibles.
</br>N’hésitez à commander dès maintenant !`,
        categories: ["saisonnier"]
    },   
    {
        title: "Bûche entremet",
        imgSrc: `${PAST}bucheentremet.jpg`,
        content: `
        Une bûche mousseuse au chocolat intense avec son insert praliné. Un croustillant et un biscuit noisette pour la texture.`,
        categories: ["saisonnier","traditionnelle","gateauroulé"]
    },   
    {
        title: "Muffin Tout Chocolat",
        imgSrc: `${PAST}muffinchocolat.jpg`,
        content: `
        Reconnaissable par son moelleux et sa forte teneur en cacao cette pâtisseries saura ravir tous les amoureux du chocolat !`,
        categories: ["gateauvoyage"]
    }, 
    {
        title: "Halloween 2024",
        imgSrc: `${PAST}halloween1.jpg`,
        content: `
        Chaudron de sorcière chocolat au lait et pâte d’amande et citrouille briochée à la cannelle !`,
        categories: ["saisonnier"]
    }, 
    {
        title: "Halloween 2024",
        imgSrc: `${PAST}halloween2.jpg`,
        content: `
        Chaudron de sorcière chocolat au lait et pâte d’amande et citrouille briochée à la cannelle !`,
        categories: ["saisonnier"]
    }, 
    {
        title: "Roulé Choco-Noisette",
        imgSrc: `${PAST}roulechoconoisette.jpg`,
        content: `
        Un biscuit moelleux et un gianduja maison. C’est bien suffisant pour fondre de plaisir !`,
        categories: ["gateauroulé"]
    }, 
    {
        title: "Console PS5",
        imgSrc: `${PAST}ps5.jpg`,
        content: `
        Est-ce que vous mangeriez votre console de jeux vidéo ? Et bien certain oui ! 
        </br>Surtout si elle remplit de ganache au chocolat au lait et d’une génoise au cacao.`,
        categories: ["gateaupopculture"]
    }, 
    {
        title: "Sweet Table Rose, Chocolate Blanc",
        imgSrc: `${PAST}heart.jpg`,
        content: `
       Un heart cake, des macarons, des cupcakes, des magnums cake… Tout pour former une magnifique table sucrée pour un anniversaire ou une occasion de fête et de partage !`,
        categories: ["saisonnier"]
    }, 
    {
        title: "Dada Cookie",
        imgSrc: `${PAST}dadacooki.jpg`,
        content: `
        Voici la grande spécialité de L’atelier de Dharma : le Dada cookie ! Un cookie croustillant et moelleux à la fois plein de morceaux de chocolats au lait, blanc et noir.
        </br>Pour tous les gourmands !`,
        categories: ["gateauvoyage"]
    }, 
    {
        title: "Deadpool & Wolverine",
        imgSrc: `${PAST}deadpool.jpg`,
        content: `
        Avez-vous vu ce film ? Et bien ce n’est pas obligatoire de l’avoir vu pour manger ce superbe gâteau à la ganache au chocolat ! Recouvert de pâte d’amande et de pavés de chocolat noir.
        `,
        categories: ["gateaupopculture"]
    }, 
    {
        title: "Inspiration Raffaello",
        imgSrc: `${PAST}raffaello.jpg`,
        content: `
        Une proposition gourmande à la noix de coco et au chocolat blanc pour tous ceux qui n’aiment pas la crème au beurre.`,
        categories: ["layercake"]
    }, 
    {
        title: "Layer Cake Noisette",
        imgSrc: `${PAST}layercakenoisette.jpg`,
        content: `
        Ce gâteau est une tour ! Remplie de chocolat au lait et de gros morceaux de noisettes. `,
        categories: ["layercake"]
    }, 
    {
        title: "Layer Cake Chantilly Mascarpone",
        imgSrc: `${PAST}layercakechantilly.jpg`,
        content: `
        Pour tous ceux qui n’aiment pas la crème au beurre voici une proposition alléchante ! Cette génoise au cacao remplie de chantilly mascarpone, le tout recouvert de fleurs comestibles.`,
        categories: ["layercake"]
    }, 
    {
        title: "Geode Cake, Banane",
        imgSrc: `${PAST}layercakebanane.jpg`,
        content: `
        Gourmands de banane voici votre pêché mignon !
        </br>Un gâteau à la génoise cacaoté et à la chantilly vanillée, le tout agrémenté d’un crémeux banane.`,
        categories: ["layercake"]
    }, 
]

export default DATA