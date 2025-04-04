import { createContext, useContext, useState } from "react";

const DnDContext = createContext([
  null,
  (_: any) => {
    console.log(_);
  },
]);

export const DnDProvider = ({ children }: any) => {
  const [type, setType] = useState(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDContext;

export const useDnD: any = () => {
  return useContext(DnDContext);
};
