import React, { useState, useMemo, useEffect } from "react";

const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [uniqueElementsArray, setUniqueElementsArray] = useState([]);
  const [cards, setCards] = useState();
  const [win, setWin] = useState(false);
  const [user, setUser] = useState("");

  const getAnimals = async () => {
    const endpoint =
      "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=6";
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setUniqueElements = async () => {
    const data = await getAnimals();

    class CardElement {
      constructor(data, id) {
        this.id = id;
        this.image = data.fields.image.url;
        this.name = data.meta.name;
        this.stat = "";
      }
    }

    data.forEach((element, index) => {
      const cardElement = new CardElement(element, index);
      uniqueElementsArray.push(cardElement);
      setUniqueElementsArray(uniqueElementsArray);
    });

    data.forEach((element, index) => {
      const cardElement = new CardElement(element, index);
      uniqueElementsArray.push(cardElement);
      setUniqueElementsArray(uniqueElementsArray);
    });

    setCards(uniqueElementsArray.sort(() => Math.random() - 0.5));
  };

  const saveCards = (cards) => {
    setCards([...cards]);
  };

  const saveName = (name) => {
    localStorage.setItem("userGame", name);
    setUser(name);
  };

  const getName = () => {
    const userName = localStorage.getItem("userGame");
    if (userName) {
      return userName;
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (cards) {
      const result = cards.filter((card) => card.stat !== "correct");
      if (result.length === 0) {
        setWin(true);
      }
    }
  }, [cards]);

  useEffect(() => {
    setUser(user);
  }, [user]);

  const value = useMemo(() => {
    return {
      cards,
      win,
      user,
      saveCards,
      getName,
      setUniqueElements,
      saveName,
    };
  }, [win, user, cards, setUniqueElements]);

  return <GameContext.Provider value={value} {...props} />;
};

export const useGame = () => {
  const context = React.useContext(GameContext);

  if (!context) {
    throw new Error("useUsario debe estar dentro del proveedor UsuarioContext");
  }

  return context;
};
