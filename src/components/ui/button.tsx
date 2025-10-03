import * as React from 'react';

const cn = (arg1: string, arg2: string | undefined) => {
  return arg1 + (arg2 ?? '');
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: string;
  size?: string;
}

const baseButtonClasses =
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      const childClassName = (child.props && child.props.className) || '';
      const mergedClassName = cn(baseButtonClasses + ' ', cn(childClassName, className));
      return React.cloneElement(child, { className: mergedClassName, ref: ref as any, ...props });
    }

    return (
      <button ref={ref} className={cn(baseButtonClasses + ' ', className)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
