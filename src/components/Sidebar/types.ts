import { ReactNode } from "react";

export interface MenuItemsData {
    title: string;
    url: string;
    icon: ReactNode;
    children?: MenuItemsData[];
}

export interface SideBarHeaderProps {
    title: string;
    open: boolean;
}