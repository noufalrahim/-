import React from 'react';
import { SideBarHeaderProps } from './types';
import { SidebarHeader, SidebarTrigger } from '../../components/ui/sidebar';
const SideBarHeader: React.FC<SideBarHeaderProps> = ({ title, open }) => {
    return (
        <SidebarHeader className="flex justify-between flex-row">
            {
                open && (
                    <h1 className="text-2xl font-bold text-black">{title}</h1>
                )
            }
            <SidebarTrigger />
        </SidebarHeader>
    );
}

export default SideBarHeader;