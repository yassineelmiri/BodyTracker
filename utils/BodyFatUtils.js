export const calculateBodyFat = ({ taille, cou, hanche }) => {
    if (!taille || !cou) return null;
  
    // Formule simplifiée de la méthode US Navy pour les hommes
    const bodyFat =
      86.010 * Math.log10(taille - cou) - 70.041 * Math.log10(taille) + 36.76;
  
    return bodyFat.toFixed(2);
  };
  