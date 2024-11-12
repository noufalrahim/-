import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "../ui/sidebar";
import { MenuItemsData } from "./types";
import { IoHome } from "react-icons/io5";
import { MdInbox } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { useSidebar } from "../ui/sidebar";
import { ChevronDown, ChevronUp, KanbanIcon, Notebook, User2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

export default function AppSidebar() {

    const {
        open,
    } = useSidebar();

    const menuItems: MenuItemsData[] = [
        {
            title: "Home",
            url: "/",
            icon: <IoHome size={20} />
        },
        {
            title: "Inbox",
            url: "/inbox",
            icon: <MdInbox size={20} />
        },
        {
            title: "Notes",
            url: "/notes",
            icon: <Notebook size={20} />
        },
        {
            title: "Calendar",
            url: "/calendar",
            icon: <IoCalendarClear size={20} />
        },
        {
            title: "Kanban",
            url: "/kanban",
            icon: <KanbanIcon size={20} />
        }
    ]

    const collapsibleMenu: MenuItemsData[] = [
        {
            title: "Help",
            url: "/help",
            icon: <IoHome size={20} />
        }
    ]

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex justify-between flex-row">
                {
                    open && (
                        <h1 className="text-2xl font-bold text-black">Classmate</h1>
                    )
                }
                <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {menuItems.map((item, index) => (
                            <SidebarMenuItem className="list-none hover:bg-gray-600 hover:text-white rounded" key={index}>
                                <SidebarMenuButton variant={'outline'}>
                                    <a href={item.url} className="flex gap-5 flex-row items-center w-full">
                                        {item.icon}
                                        {
                                            open && (
                                                <span className="text-md">{item.title}</span>
                                            )
                                        }
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarGroupContent>
                </SidebarGroup>
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger className="hover:bg-gray-200 rounded">
                                Help
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                {collapsibleMenu.map((item, index) => (
                                    <SidebarMenuItem className="list-none hover:bg-gray-600 hover:text-white rounded" key={index}>
                                        <SidebarMenuButton variant={'outline'}>
                                            <a href={item.url} className="flex gap-5 flex-row items-center w-full">
                                                {item.icon}
                                                {
                                                    open && (
                                                        <span className="text-md">{item.title}</span>
                                                    )
                                                }
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>   
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem onClick={() => {
                                    console.log('Account');
                                }}>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}