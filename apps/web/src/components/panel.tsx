import { motion, AnimatePresence } from "framer-motion";
import { usePanel } from "./panel-provider";
import { CloseIcon } from "./tiptap-icons/close-icon";
import { cn } from "@/lib/utils";

export function Panel() {
	const { panel, closePanel } = usePanel();

	const closeButtonPosition =
		panel.side === "right"
			? "left-4 top-4" // top-left within right panel
			: "right-4 top-4"; // top-right within left panel

	const borderSide = panel.side === "right" ? "border-l" : "border-r";

	return (
		<AnimatePresence mode="wait" initial={false}>
			{panel.isOpen && (
				<motion.div
					key={`panel-${panel.side}`}
					initial={{ width: 0, opacity: 0 }}
					animate={{ width: panel.width, opacity: 1 }}
					exit={{ width: 0, opacity: 0 }}
					transition={{
						width: {
							type: "tween",
							duration: 0.25,
							ease: "easeInOut",
						},
						opacity: {
							duration: 0.15,
						},
					}}
					className={cn(
						"h-full bg-card border-border overflow-hidden shrink-0",
						borderSide,
						panel.side === "left" ? "order-first" : "order-last"
					)}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.15, delay: 0.1 }}
						className="h-full overflow-y-auto relative"
						style={{ width: `${panel.width}px` }}
					>
						{/* Close Button */}
						<button
							onClick={closePanel}
							className={cn(
								"absolute p-2 rounded-md hover:bg-accent transition-colors z-10",
								closeButtonPosition
							)}
							aria-label="Close panel"
						>
							<CloseIcon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
						</button>

						{/* Content */}
						<div className="pt-16 px-6 pb-6 text-card-foreground">
							{panel.content}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
