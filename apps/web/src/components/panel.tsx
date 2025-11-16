import { motion, AnimatePresence } from "framer-motion";
import { usePanel } from "./panel-provider";
import { CloseIcon } from "./ui/icons";
import { cn } from "@/lib/utils";

const PANEL_WIDTH = "16rem";

export function Panel() {
	const { panel, closePanel } = usePanel();

	return (
		<AnimatePresence mode="wait" initial={false}>
			{panel.isOpen && (
				<div
					key={`panel-${panel.side}`}
					className="group peer text-sidebar-foreground hidden md:block"
					data-side={panel.side}
					data-slot="panel"
				>
					{/* This handles the panel gap */}
					<motion.div
						data-slot="panel-gap"
						className="relative bg-transparent"
						initial={{ width: 0 }}
						animate={{
							width: PANEL_WIDTH,
						}}
						exit={{ width: 0 }}
						transition={{
							type: "tween",
							duration: 0.25,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						data-slot="panel-container"
						className={cn("fixed inset-y-0 z-10 hidden h-svh md:flex p-2")}
						initial={{ width: 0, opacity: 0 }}
						animate={{
							width: PANEL_WIDTH,
							[panel.side === "right" ? "right" : "left"]: 0,
							opacity: 1,
						}}
						exit={{
							width: 0,
							[panel.side === "right" ? "right" : "left"]:
								`calc(${PANEL_WIDTH} * -1)`,
							opacity: 0,
						}}
						transition={{
							type: "tween",
							duration: 0.25,
							ease: "easeInOut",
						}}
						style={{
							[panel.side === "right" ? "right" : "left"]: 0,
						}}
					>
						<motion.div
							data-slot="panel-inner"
							className="bg-sidebar border-sidebar-border flex h-full w-full flex-col rounded-lg border shadow-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.15, delay: 0.1 }}
						>
							{/* Panel Header */}
							<div className="flex flex-col gap-2 p-2" data-slot="panel-header">
								<div className="flex items-center justify-between">
									<div className="flex-1" />
									<button
										onClick={closePanel}
										className="p-2 rounded-md hover:bg-sidebar-accent transition-colors"
										aria-label="Close panel"
									>
										<CloseIcon className="w-4 h-4 text-sidebar-foreground/70 hover:text-sidebar-foreground" />
									</button>
								</div>
							</div>

							{/* Panel Content */}
							<div
								className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2"
								data-slot="panel-content"
							>
								<div className="text-sidebar-foreground">{panel.content}</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
