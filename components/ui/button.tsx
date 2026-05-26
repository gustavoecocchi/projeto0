import { cn } from '@/lib/utils';

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('rounded-lg bg-primary px-4 py-2 text-sm font-medium text-black hover:opacity-90 disabled:opacity-50', className)}
      {...props}
    />
  );
}
