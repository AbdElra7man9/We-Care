'use client';
import { cn } from '@lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { ImSpinner7 } from 'react-icons/im'
import Ripples from 'react-ripples'

export const buttonVariants = cva(
    'active:scale-95 duration-300 overflow-hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-color disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default:'bg-blue-500 text-white border border-blue-200 dark:border-none',
                hi: 'bg-slate-900 text-white hover:bg-slate-800',
                ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
            },
            
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2',
                lg: 'h-11 px-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
    className,
    children,
    variant,
    isLoading,
    size,
    ...props
}) => {
    return (
        <Ripples>
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                disabled={isLoading}
                {...props}>
                {isLoading ?
                    <span className='mr-2 h-4 w-4 animate-spin'>
                        <ImSpinner7 />
                    </span>
                    : null}
                {children}
            </button>
        </Ripples>
    )
}

export default Button