import { useState, useContext, createContext, useEffect, React } from "react";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem('blogData');
      return storedData ? JSON.parse(storedData) : { blogs: [] };
    }
    return { blogs: [] };
  });

  useEffect(() => {
    localStorage.setItem('blogData', JSON.stringify(data));
  }, [data]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);

export { DataProvider, useData };
