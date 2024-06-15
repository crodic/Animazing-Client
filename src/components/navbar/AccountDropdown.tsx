import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Heart, Images, LogOut, Settings, Trophy, UserRoundCog } from 'lucide-react';
import BorderGradient from '../BorderGradient';
import Link from 'next/link';

const AccountDropdown = () => {
    // const uid = 'typ';
    // const DROPDOWNS_MENUITEM = useMemo(
    //     () => [
    //         {
    //             groupTitle: 'Account',
    //             danger: false,
    //             children: [
    //                 { label: 'Trang Cá Nhân', path: `users/${uid}`, icon: <UserRoundCog size={16} className="mr-2" /> },
    //                 { label: 'Bộ Sưu Tập', path: `users/${uid}`, icon: <Heart size={16} className="mr-2" /> },
    //                 { label: 'Bài Đăng Của Tôi', path: `users/${uid}`, icon: <Images size={16} className="mr-2" /> },
    //             ],
    //         },
    //         {
    //             groupTitle: 'Settings',
    //             danger: false,
    //             children: [
    //                 { label: 'Membership', path: `users/${uid}`, icon: <Trophy size={16} className="mr-2" /> },
    //                 { label: 'Cài Đặt', path: `users/${uid}`, icon: <Settings size={16} className="mr-2" /> },
    //             ],
    //         },
    //         {
    //             groupTitle: 'Settings',
    //             danger: true,
    //             children: [{ label: 'Đăng Xuất', action: () => {}, icon: <LogOut size={16} className="mr-2" /> }],
    //         },
    //     ],
    //     [uid],
    // );
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="focus:rounded-full">
                <BorderGradient isMembership isAvatar>
                    <Avatar className="size-10 cursor-pointer overflow-hidden border-2 bg-background">
                        <AvatarImage src="/avatar.png" className="object-cover object-top" />
                        <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                </BorderGradient>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuGroup className="*:cursor-pointer *:text-base *:font-medium">
                    <DropdownMenuItem inset>
                        <UserRoundCog size={16} className="mr-2" />
                        <span>Trang Cá Nhân</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem inset>
                        <Heart size={16} className="mr-2" />
                        <span>Bộ Sưu Tập</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem inset>
                        <Images size={16} className="mr-2" />
                        <span>Bài Đăng Của Tôi</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Manager</DropdownMenuLabel>
                <DropdownMenuGroup className="*:cursor-pointer *:text-base *:font-medium">
                    <DropdownMenuItem inset asChild>
                        <Link href="/membership">
                            <Trophy size={16} className="mr-2" />
                            Membership
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem inset>
                        <Settings size={16} className="mr-2" />
                        <span>Cài Đặt</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem danger inset className="cursor-pointer text-base font-medium">
                    <LogOut size={16} className="mr-2" />
                    <span>Đăng Xuất</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountDropdown;
