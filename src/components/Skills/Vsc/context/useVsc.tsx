import { useContext, createContext, useState } from "react";

export interface Tab {
    isOpen: boolean;
    open?:() => void;
    tab?: string;
    tabs?: string[];
    addTabs?: (arg0: string) => void;
    deleteTabs?: (arg0: string) => void;
    changeTab?: (arg0: string) => void;
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
    const [ tab, setTab] = useState("");
    const [ tabs, setTabs] = useState([]);

    const [ isOpen, setOpen] = useState(true);
    
    const changeTab = (tabToadd: string) => setTab(tabToadd);

    const addTabs = (tabToadd: string) => {
        const index = tabs.indexOf(tabToadd);
        setTab(tabToadd);

        if(index < 0) {
            setTabs([...tabs, tabToadd]);
        }
    };

    const open = () => setOpen(!isOpen);
    return (
        <TabContext.Provider value={{ isOpen, tab, tabs, changeTab , addTabs, open }}>
            {children}
        </TabContext.Provider>
    );
};
