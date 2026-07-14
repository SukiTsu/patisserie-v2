import Navbar from "../../components/navbar";
import ContainerGroupCake from "../../components/containerGroupCake";
import Footer from "../../components/footer";
import manager  from './getData';
import { useState, useEffect, SetStateAction } from "react";
import { JSX } from "react/jsx-runtime";
import SearchBar from "../../components/searchBar";
import { ClassCake } from "../../classCake";
import ContainerCake from "../../components/containerCake";
import AnimatedOnScroll from "../../components/Animation";


const Shop =({}) => {
  const [listContainer, setListContainer] = useState<JSX.Element[]>([]);
  const [valueSearchBar, setSearchBar] = useState<string>('');
  const [listCakeSearch, setListCakeSearch] = useState<ClassCake[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allCake, setAllCake] = useState<JSX.Element[]>([]);

 

  /**
   * Génère une liste containeur des cakes trié selon leurs catégory. Lorsqu'ils sont cliqué, il redirige vers un lien permettant l'affichage de tout les cakes de la catégory
   * @returns Composant JSX 
   */
  async function generaContainerCake() {
    //console.log("appel du shop")
    const tempContainerList: JSX.Element[] = [];

    for (const [categorie, cakes] of manager.categoryMap.entries()) {
      if (manager.categoryMap.get(categorie) !== undefined) {
        let i = 0;
        const iterator = cakes.values();
        let result = iterator.next();
        let tabImg = [];

        while (!result.done && i < 4) {
          tabImg.push(result.value.imgSrc);
          result = iterator.next();
          i++;
        }
        const container = (
          <AnimatedOnScroll repeat={false} duration={i/2} children={
          <ContainerGroupCake
            key={categorie}
            srcImgs={tabImg}
            link={categorie}
            title={categorie}
          />
          }/>
        );
        tempContainerList.push(container);
      }
    }
    return (tempContainerList);
  }

  /**
   * Lors du chargement de la page, vérifie que les données sont bien à jour
   */
  useEffect(() => {
    // Si les données ne sont pas encore chargées, on les récupère
    if (manager.listCake.length === 0) {
      console.log('Les données ne sont pas chargées, tentative de fetch...');
      fetchData(true);
    } else {
      fetchData(false); // Les données sont déjà disponibles
    }
  }, []);

  /**
   * Généation d'une liste de cake corrrespondant à la recherche de l'utilistateur
   */
  useEffect(() => {
    if (!isLoading) {
      
      if (valueSearchBar) {
        const tempCakeSearch: ClassCake[] = manager.listCake.filter((cake) =>
          cake.title.toLowerCase().includes(valueSearchBar.toLowerCase()) || 
          cake.content.toLowerCase().includes(valueSearchBar.toLowerCase())
        );
        setListCakeSearch(tempCakeSearch);
      } else {
        setListCakeSearch([]);
      }

      if (valueSearchBar && listCakeSearch.length > 0) {
        let tempCake = [];
        for (const cake of listCakeSearch) {
          tempCake.push(<ContainerCake cake={cake} key={cake.title}/>);
        }
        setListContainer(tempCake);
      } else {
        setListContainer(allCake);
      }

      if (manager.listCake.length <= 0) {
        setListContainer([
          <div key="error" className="error">
            <p>
              Il se trouve que notre site a été surchargé, veuillez changer de
              page ou cliquer sur le bouton Acutaliser. Si le problème persiste,
              merci de revenir plus tard.
            </p>
            <button onClick={generaContainerCake} className="bt actualise">
              Actualiser
            </button>
          </div>,
        ]);
      }
    }
  }, [valueSearchBar, isLoading]);

  /**
   * Attribu à la variable allCake toute la liste des containercake pour évité de la regéné à chaque fois que la valeur de la navbar change
   * @param shearchData si true, le manager doit générer ses données depuis API Facebook
   */
  const fetchData = async (shearchData:boolean) => {
    if (shearchData) {await manager.fetchData(); }
    setAllCake(await generaContainerCake())
    setIsLoading(false); // Une fois les données chargées
  };

  if (isLoading) {
    return <p>Chargement en cours...</p>; // Affichage temporaire
  }
    
    return (
      <div className='seasonal body'>
        <Navbar strTitre="Vitrine"/>
        <div className='festive seasonal all-content'>
          <h2>Voici mes gâteaux classés par catégories</h2>
          <SearchBar inValue={valueSearchBar} method={setSearchBar}/>
          <div className='seasonal all-container'>
            {listContainer}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Shop