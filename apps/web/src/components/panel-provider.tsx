import { createContext, useContext, useState, type ReactNode } from "react";

type PanelSide = "left" | "right";

interface PanelConfig {
	isOpen: boolean;
	side: PanelSide;
	width: number;
	content: ReactNode | null;
}

interface PanelContextValue {
	panel: PanelConfig;
	openPanel: (side: PanelSide, content: ReactNode, width?: number) => void;
	closePanel: () => void;
	setWidth: (width: number) => void;
}

const PanelContext = createContext<PanelContextValue | undefined>(undefined);

export function PanelProvider({ children }: { children: ReactNode }) {
	const [panel, setPanel] = useState<PanelConfig>({
		isOpen: false,
		side: "right",
		width: 350,
		content: null,
	});

	const openPanel = (
		side: PanelSide,
		content: ReactNode,
		width: number = 350
	) => {
		setPanel({
			isOpen: true,
			side,
			width,
			content,
		});
	};

	const closePanel = () => {
		setPanel((prev) => ({ ...prev, isOpen: false }));
	};

	const setWidth = (width: number) => {
		setPanel((prev) => ({ ...prev, width }));
	};

	return (
		<PanelContext.Provider value={{ panel, openPanel, closePanel, setWidth }}>
			{children}
		</PanelContext.Provider>
	);
}

export function usePanel() {
	const context = useContext(PanelContext);
	if (!context) {
		throw new Error("usePanel must be used within a PanelProvider");
	}
	return context;
}
