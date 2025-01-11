export const calculateIMC = (poids, taille) => {
    if (!poids || !taille) return null;
    return (poids / (taille * taille)).toFixed(2);
  };