import { createContext, ReactNode, useContext, useState } from "react";

interface IUser {
  nome: string;
}

interface IUserContext {
  user: IUser | null;
  setUsuario: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const userContext = createContext<IUserContext | undefined>(undefined);

export const useUser = (): IUserContext => {
  const user = useContext(userContext);
  if (!user) {
    throw new Error("Deu erro");
  }
  return user;
};

export const UserProvider = (props: { children: ReactNode }) => {
  const [user, setUsuario] = useState<IUser | null>(null);

  return (
    <userContext.Provider value={{ user, setUsuario }}>
      {props.children}
    </userContext.Provider>
  );
};
