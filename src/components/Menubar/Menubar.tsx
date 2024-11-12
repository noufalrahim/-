import * as React from 'react';
import { MenubarProps } from './types';

const Menubar: React.FC<MenubarProps> = ({
    children,
    className,
}) => {
    return (
        <nav className='w-full bg-[#eb5d8d] py-4 px-5'>
            <div className={`${className} flex justify-end items-center`}>
                {children}
            </div>
        </nav>
    );
}

export default Menubar;