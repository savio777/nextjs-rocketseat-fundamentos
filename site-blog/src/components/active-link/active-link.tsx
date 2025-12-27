import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

type ActiveLinkProps = {
  children: React.ReactNode;
  isActive?: boolean;
} & LinkProps;

export function ActiveLink({ children, isActive, ...props }: ActiveLinkProps) {
  return (
    <Link
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isActive ? 'text-blue-200' : 'text-gray-100'
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
