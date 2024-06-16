import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Button } from '@/components/ui/button';
import { Menu } from '@/components/admin-panel/menu';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '@/components/admin-panel/sidebar-toggle';
import WebLogo from '../WebLogo';

export function Sidebar() {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <aside
            className={cn(
                'fixed left-0 top-0 z-20 h-screen -translate-x-full bg-card transition-[width] duration-300 ease-in-out lg:translate-x-0',
                sidebar?.isOpen === false ? 'w-[80px]' : 'w-72',
            )}
        >
            <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
            <div
                className={cn(
                    'relative flex h-full flex-col overflow-y-auto px-2 pb-0 pt-4 shadow-md',
                    sidebar.isOpen && 'px-0',
                )}
            >
                <Button
                    className={cn(
                        'mb-1 transition-transform duration-300 ease-in-out',
                        sidebar?.isOpen === false ? 'translate-x-1' : 'translate-x-0',
                    )}
                    variant="link"
                    asChild
                >
                    <h1
                        className={cn(
                            'whitespace-nowrap text-lg font-bold transition-[transform,opacity,display] duration-300 ease-in-out',
                            sidebar?.isOpen === false
                                ? 'hidden -translate-x-96 opacity-0'
                                : 'translate-x-0 opacity-100',
                        )}
                    >
                        <WebLogo />
                    </h1>
                </Button>
                <Menu isOpen={sidebar?.isOpen} />
            </div>
        </aside>
    );
}
