import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export default function Tooltip({ message, children, ...props }) {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root delayDuration={0}>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content
                    className="min-w-max rounded-lg bg-gray-800 p-2 text-center text-xs font-medium text-white transition-all duration-500"
                    {...props}
                >
                    {message}
                    <TooltipPrimitive.Arrow width={11} height={5} />
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}
