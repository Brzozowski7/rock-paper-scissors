import { useState } from "react";

export const useLocalStorage = (
  key: string,
  initialValue: number
): [number, (value: number | ((val: number) => number)) => void] => {
  const [storedValue, setStoredValue] = useState<number>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: number | ((val: number) => number)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
