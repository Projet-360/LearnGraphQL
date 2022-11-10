import { Box } from "@mui/system";
import React from "react";

const style = {
  with: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "2rem",

  "& > span": {
    margin: "1rem",
    fontSize: "1.5rem",
  },
};

const Welcome = () => {
  return (
    <Box sx={style}>
      <span>
        Le but de ce test est de voir votre capacité d'adaptation ainsi que
        votre façon de concevoir un composant react.
      </span>
      <span>
        L'objectif principal est de rendre générique le composant tableau se
        trouvant sur la page "/customers" et de l'utiliser dans les pages
        "/sites" et "/contacts".
      </span>
      <span>
        Pour les nouveaux tableaux, vous devez afficher tous les éléments
        décrits dans la query. Attention, les requêtes sont simulées, si vous
        souhaitez plus de données, n'hésitez pas à écrire plus de data dans le
        dossier "/src/apolloClient"
      </span>
      <span>
        Pour le reste, sentez-vous libre de faire ce que vous voulez ! Vous
        pouvez tout aussi bien modifier la structure du projet, ajouter des
        librairies, vous attarder sur le design du tableau ou ajouter de
        nouvelles fonctionnalités (barre de recherche, filtres, trie,
        debouncedState, etc...). Tout ce qui est pertinent sera pris en compte.
      </span>
      <span>
        Pas d'inquiétude si vous avez commencé une fonctionnalité que vous
        n'avez pas eu le temps de finir. Un petit commentaire m'expliquant
        comment vous auriez fait peut me suffire.
      </span>
    </Box>
  );
};

export default Welcome;
