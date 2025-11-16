"use client";

import { cn } from "@/lib/utils";

import { Toolbar } from "./toolbar";

export function FixedToolbar(props: React.ComponentProps<typeof Toolbar>) {
	return (
		<div className="sticky bottom-4 left-0 right-0 z-50">
			<Toolbar
				{...props}
				className={cn(
					"scrollbar-hide w-full justify-between overflow-x-auto border-t border-t-border bg-background/95 p-1 backdrop-blur-sm supports-backdrop-blur:bg-background/60",
					props.className
				)}
			/>
		</div>
	);
}
