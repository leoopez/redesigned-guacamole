import { useContext, createContext, useState } from "react";

export interface Tab {
    isOpen: boolean;
    open?:() => void;
    tab?: number;
    changeTab?: (arg0: number) => void;
};

const initialState = {
    isOpen: true,
};

type Props = {
  children: JSX.Element | JSX.Element[],
};

const TabContext = createContext<Tab>(initialState);

export const useVscTab = () => useContext(TabContext);

export default function TabProvider({ children }: Props) {
    const [ tab, setTab] = useState(0);

    const [ isOpen, setOpen] = useState(true);
    
    const changeTab = (tabToadd: number) => setTab(tabToadd);

    const open = () => setOpen(!isOpen);
    return (
        <TabContext.Provider value={{ isOpen, tab, changeTab , open }}>
            {children}
        </TabContext.Provider>
    );
};
