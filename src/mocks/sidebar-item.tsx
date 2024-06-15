import {
    BookPlus,
    BookText,
    Boxes,
    Brush,
    FileBadge,
    FileVideo,
    ImagePlay,
    ImagePlus,
    PartyPopper,
    Swords,
    TentTree,
    UserRoundCog,
    UserRoundSearch,
    Users,
} from 'lucide-react';
import { ReactNode } from 'react';

export interface SidebarItemProps {
    id: number;
    groupName: string;
    groupItems: {
        id: number;
        title: string;
        path: string;
        icon: ReactNode;
    }[];
}

export const SIDEBAR_ITEM: SidebarItemProps[] = [
    {
        id: 1,
        groupName: 'Trang Chủ',
        groupItems: [
            {
                id: 1,
                title: 'Nghệ Thuật',
                path: '/',
                icon: <Brush size={18} />,
            },
            {
                id: 2,
                title: 'Manga',
                path: '/',
                icon: <TentTree size={18} />,
            },
            {
                id: 3,
                title: 'Tiểu Thuyết',
                path: '/',
                icon: <BookText size={18} />,
            },
            {
                id: 4,
                title: 'Video Ngắn',
                path: '/',
                icon: <ImagePlay size={18} />,
            },
        ],
    },
    {
        id: 2,
        groupName: 'Bài Đăng',
        groupItems: [
            {
                id: 1,
                title: 'Đăng Hình Ảnh',
                path: '/',
                icon: <ImagePlus size={18} />,
            },
            {
                id: 2,
                title: 'Đăng Manga',
                path: '/',
                icon: <TentTree size={18} />,
            },
            {
                id: 3,
                title: 'Đăng Tiểu Thuyết',
                path: '/',
                icon: <BookPlus size={18} />,
            },
            {
                id: 4,
                title: 'Đăng Video Ngắn',
                path: '/',
                icon: <FileVideo size={18} />,
            },
        ],
    },
    {
        id: 3,
        groupName: 'Người Dùng',
        groupItems: [
            {
                id: 1,
                title: 'Theo Dõi',
                path: '/',
                icon: <UserRoundSearch size={18} />,
            },
            {
                id: 2,
                title: 'Người Theo Dõi',
                path: '/',
                icon: <Users size={18} />,
            },
            {
                id: 3,
                title: 'Bảng Xếp Hạng',
                path: '/',
                icon: <Swords size={18} />,
            },
        ],
    },
    {
        id: 2,
        groupName: 'Quản Lý',
        groupItems: [
            {
                id: 1,
                title: 'Tài Khoản',
                path: '/',
                icon: <UserRoundCog size={18} />,
            },
            {
                id: 2,
                title: 'Bộ Sưu Tập',
                path: '/',
                icon: <Boxes size={18} />,
            },
            {
                id: 3,
                title: 'Bài Đăng',
                path: '/',
                icon: <FileBadge size={18} />,
            },
            {
                id: 4,
                title: 'FanBox',
                path: '/',
                icon: <PartyPopper size={18} />,
            },
        ],
    },
];
