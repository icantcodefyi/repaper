import { createFileRoute } from "@tanstack/react-router";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { PanelProvider } from "@/components/panel-provider";
import { Panel } from "@/components/panel";

export const Route = createFileRoute("/editor")({
	component: EditorComponent,
});

function EditorContent() {
	return (
		<div className="flex h-full w-full overflow-hidden">
			<div className="flex-1 min-w-0 h-full overflow-auto">
				<div className="container mx-auto p-4">
					<SimpleEditor />
				</div>
			</div>

			<Panel />
		</div>
	);
}

function EditorComponent() {
	return (
		<PanelProvider>
			<EditorContent />
		</PanelProvider>
	);
}
