import { useState } from "react";

const useLocalStorage = (
  key: string,
  initialValue: number
): [number, (value: number | ((val: number) => number)) => void] => {
  const [storedValue, setStoredValue] = useState<number>(() => {
    try {
      const check = localStorage.getItem(key);
      if (check) {
        return JSON.parse(check);
      } else {
        return initialValue;
      }
    } catch (err) {
      console.log(err);
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
export default useLocalStorage;
