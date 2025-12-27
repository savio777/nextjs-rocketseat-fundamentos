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
        'text-sm font-medium transition-colors hover:text-blue-500',
        isActive ? 'text-blue-500' : 'text-gray-100'
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
