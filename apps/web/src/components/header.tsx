import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<div className="w-full flex justify-center py-6">
			<div className="max-w-3xl w-full flex items-center justify-between p-3 rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
				<Link to="/" className="flex items-center gap-3">
					<img src="/repaper.svg" alt="Repaper Logo" className="h-8 w-8" />
					<span className="text-2xl font-serif font-semibold tracking-tight">
						repaper
					</span>
				</Link>

				<Link to="/editor">
					<Button variant={"default"} className="font-semibold">
						Start Writing
					</Button>
				</Link>
			</div>
		</div>
	);
}
