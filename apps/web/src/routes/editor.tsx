import { createFileRoute } from "@tanstack/react-router";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export const Route = createFileRoute("/editor")({
  component: EditorComponent,
});

function EditorComponent() {
  return (
    <div className="container mx-auto h-full w-full">
      <SimpleEditor />
    </div>
  );
}
