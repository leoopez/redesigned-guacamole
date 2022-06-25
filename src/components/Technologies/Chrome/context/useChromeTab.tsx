import { useContext, createContext, useState } from "react";
import staticInfo  from "../../../../static/static.json";

export interface Tab {
    tab: number;
    tabs?: number;
    items?: string[];
    changeTab?: (arg0: number) => void;
};

const initialState = {
    tab: 0
};

type Props = {
  children: JSX.Element | JSX.Element[],
};

const TabContext = createContext<Tab>(initialState);
const tabs =  staticInfo.technologies.subjects.length;

export const useChromeTab = () => useContext(TabContext);

export default function TabProvider({ children }: Props) {
    const [ tab, setTab] = useState(0);

    const { items } = staticInfo.technologies.subjects[tab];
    const changeTab = (tab: number) => setTab(tab);

    return (
        <TabContext.Provider value={{ tab, tabs, changeTab , items}}>
            {children}
        </TabContext.Provider>
    );
};
