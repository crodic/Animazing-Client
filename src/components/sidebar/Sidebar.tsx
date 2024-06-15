import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { LogOut, Menu, MenuIcon } from 'lucide-react';
import WebLogo from '../WebLogo';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { useCallback } from 'react';
import { SIDEBAR_ITEM, SidebarItemProps } from '@/mocks/sidebar-item';

const Sidebar = () => {
    const renderMenu = useCallback((menus: SidebarItemProps[]) => {
        return menus.map((menu) => (
            <div key={`${menu.id}-${menu.groupName}`} className="mb-5">
                <h4 className="mb-1 pl-4 font-semibold text-foreground">{menu.groupName}</h4>
                {menu.groupItems.map((menuItem) => (
                    <Link
                        href={menuItem.title}
                        key={`${menuItem.title}-${menuItem.id}`}
                        className="flex w-full cursor-pointer items-center gap-2 px-6 py-2 text-sm font-bold opacity-80 hover:bg-primary hover:text-primary-foreground"
                    >
                        {menuItem.icon}
                        {menuItem.title}
                    </Link>
                ))}
            </div>
        ));
    }, []);
    return (
        <Sheet key="left">
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-[250px] flex-col gap-0 bg-card p-0 text-card-foreground">
                <SheetHeader>
                    <div className="flex items-center justify-start gap-8 py-4">
                        <SheetClose className="ml-8">
                            <Menu />
                        </SheetClose>
                        <WebLogo />
                    </div>
                </SheetHeader>
                <ScrollArea className="grow">{renderMenu(SIDEBAR_ITEM)}</ScrollArea>
                <div className="flex min-h-16 w-full items-center justify-between border-t-2 px-2">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage alt="account avatar" />
                            <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                        <p className="text-body-sm flex items-center font-semibold">Crodic Crystal</p>
                    </div>
                    <Button size="icon" variant="ghost">
                        <LogOut strokeWidth={3} size={14} className="text-danger-400" />
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
