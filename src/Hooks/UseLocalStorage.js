import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [sincronizarItem, setSincronizarItem] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizarItem(true);
      } catch (error) {
        setError(true);
      }
    }, 2000)
  }, [sincronizarItem])
  
  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  }

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizarItem(false);
  }

  return {item, saveItem, loading, error, sincronizeItem};
}

export default useLocalStorage;