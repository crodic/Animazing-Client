import Link from 'next/link';
import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface IWidgetHeaderTitle {
    label?: string;
    path?: string;
    pathLabel?: string;
    Icon?: LucideIcon;
    subLabel?: string;
    subLabelPlacement?: 'top' | 'bottom';
    className?: string;
}

const WidgetHeaderTitle: FC<IWidgetHeaderTitle> = ({
    label,
    path,
    pathLabel,
    Icon,
    subLabel,
    subLabelPlacement,
    className,
}) => {
    return (
        <div className={cn('flex items-center justify-between px-2', className)}>
            <div>
                {subLabel && subLabelPlacement === 'top' && (
                    <span className="text-sm text-muted-foreground">{subLabel}</span>
                )}
                <h4 className="flex items-center gap-2">
                    {Icon && <Icon size={18} />}
                    <span className="text-lg font-bold">{label}</span>
                </h4>
                {subLabel && subLabelPlacement === 'bottom' && (
                    <span className="text-sm text-muted-foreground">{subLabel}</span>
                )}
            </div>
            <Button variant="link" asChild>
                <Link href={path || '/'}>{pathLabel}</Link>
            </Button>
        </div>
    );
};

export default WidgetHeaderTitle;
