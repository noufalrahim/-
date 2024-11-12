import React from "react";
import { MdDeleteOutline, MdMoreVert } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, Pencil, PlusIcon, Share, Text } from "lucide-react";
import { IoDocument } from "react-icons/io5";
import { BoxProps, DropDownMenuItemsData } from "./types";
import { ContextMenu, ContextMenuItem, ContextMenuTrigger, ContextMenuContent } from "@/components/ui/context-menu";
import { DialogBox } from "@/components/Dialog";
import { NotesForm } from "../NotesForm";

const Box = ({
    title,
    content,
    isNew
}: BoxProps) => {

    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);


    const DropDownMenuItems: DropDownMenuItemsData[] = [
        { name: "Rename", icon: <Pencil size={16} /> },
        { name: "Delete", icon: <MdDeleteOutline size={16} /> },
        { name: "Open in text editor", icon: <Text size={16} /> },
        { name: "Open in pdf viewer", icon: <IoDocument size={16} /> },
        { name: "Download as pdf", icon: <Download size={16} /> },
        { name: "Share", icon: <Share size={16} /> },
    ];

    return (
        <>
            <div className="e-card" id="basic">
                {!isNew && (
                    <div className="e-card-header">
                        <div className="e-card-header-caption flex !flex-row justify-between items-center">
                            <div className="e-card-title">{title}</div>
                            <div className="rounded-full hover:bg-gray-200 flex items-center justify-center w-7 h-7 transition duration-300">
                                <DropdownMenu onOpenChange={setOpen} open={open}>
                                    <DropdownMenuTrigger className="focus:outline-none" onClick={() => {
                                        setOpen(!open);
                                    }}>
                                        <MdMoreVert size={24} color="currentColor" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        onPointerLeave={() => setOpen(false)}
                                        className="bg-white border-1 border-gray-400 rounded">
                                        <DropdownMenuSeparator />
                                        {DropDownMenuItems.map((item, index) => (
                                            <div className="w-full hover:bg-gray-600 rounded hover:text-white">
                                                <DropdownMenuItem
                                                    key={index}
                                                    className="flex justify-between items-center cursor-pointer py-2 px-4 rounded"
                                                >
                                                    <span className="flex items-center gap-2">{item.name}</span>
                                                    {item.icon}
                                                </DropdownMenuItem>
                                            </div>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                )}
                {
                    isNew ? (
                        <div className="e-card-content justify-center flex items-center">
                            <div
                                className="hover:bg-gray-200 rounded-full flex items-center justify-center w-12 h-12 transition duration-300"
                                onClick={() => setOpenDialog(true)}
                            >
                                <PlusIcon size={32} />
                            </div>
                        </div>
                    ) : (
                        <ContextMenu>
                            <ContextMenuTrigger>
                                <div className="e-card-content">
                                    {content}
                                </div>
                            </ContextMenuTrigger>
                            <ContextMenuContent
                                className="bg-white border-1 border-gray-400 rounded">
                                {
                                    DropDownMenuItems.map((item, index) => (
                                        <div className="w-full hover:bg-gray-600 rounded hover:text-white">
                                            <ContextMenuItem
                                                key={index}
                                                className="bg-white rounded flex justify-between">
                                                <span className="flex items-center gap-2">{item.name}</span>
                                                {item.icon}
                                            </ContextMenuItem>
                                        </div>
                                    ))
                                }
                            </ContextMenuContent>
                        </ContextMenu>
                    )
                }
                <DialogBox  
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                    title="Create a new note"
                >
                    <NotesForm />
                </DialogBox>
            </div>

        </>
    );
}

export default Box;
