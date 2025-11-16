import { createFileRoute } from "@tanstack/react-router";
import { PanelProvider } from "@/components/panel-provider";
import { Panel } from "@/components/panel";
import { PlateEditor } from "@/components/editor/plate-editor";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export const Route = createFileRoute("/editor")({
	component: EditorComponent,
});

function EditorContent() {
	return (
		<>
			<AppSidebar />
			<SidebarInset className="flex-1 overflow-hidden relative">
				<div className="flex h-screen w-full relative">
					<div className="flex-1 min-w-0 relative">
						<PlateEditor />
					</div>
					<Panel />
				</div>
			</SidebarInset>
		</>
	);
}

function EditorComponent() {
	return (
		<SidebarProvider>
			<PanelProvider>
				<EditorContent />
			</PanelProvider>
		</SidebarProvider>
	);
}
