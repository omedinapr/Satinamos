import React, { useState, createContext, ReactNode, useEffect } from "react";
import { ICoin } from "../screens/Buy";

interface ICryptoCtx {
    buying: ICoin | null
    setBuying: React.Dispatch<React.SetStateAction<ICoin | null>>
}

export const CryptoContext = createContext({} as ICryptoCtx);

export const CryptoState = ({ children }: { children: ReactNode }) => {
    const [buying, setBuying] = useState<ICoin | null>(null);

    const values = {
        buying,
        setBuying
    };

    return (
        <CryptoContext.Provider value={values} >
            {children}
        </CryptoContext.Provider>
    );
};