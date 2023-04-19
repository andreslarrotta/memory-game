import React, { useState, useEffect, useMemo } from "react";

const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [uniqueElementsArray, setUniqueElementsArray] = useState([]);
  const [cards, setCards] = useState();

  const getAnimals = async () => {
    const endpoint =
      "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=4";
    try {
      const response = await fetch(endpoint, { cache: "no-cache" });
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.entries;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const shuffleCards = (array) => {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setUniqueElements = async () => {
    const data = await getAnimals();

    class CardElement {
      constructor(data, id) {
        this.id = id;
        this.image = data.fields.image.url;
        this.name = data.meta.name;
      }
    }

    data.forEach((element, index) => {
      const cardElement = new CardElement(element, index);
      uniqueElementsArray.push(cardElement);
      uniqueElementsArray.push(cardElement);
      setUniqueElementsArray(uniqueElementsArray);
    });

    console.log(shuffleCards(uniqueElementsArray));

    setCards(shuffleCards(uniqueElementsArray));
  };

  useEffect(() => {}, []);

  /* console.log("hola", uniqueElements); */

  const value = useMemo(() => {
    return {
      cards,
      setUniqueElements,
    };
  }, [cards, setUniqueElements]);

  return <GameContext.Provider value={value} {...props} />;
};

export const useGame = () => {
  const context = React.useContext(GameContext);

  if (!context) {
    throw new Error("useUsario debe estar dentro del proveedor UsuarioContext");
  }

  return context;
};
