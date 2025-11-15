import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const [showSignIn, setShowSignIn] = useState(false);

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-3xl">
				{showSignIn ? (
					<LoginForm onSwitchToSignUp={() => setShowSignIn(false)} />
				) : (
					<SignupForm onSwitchToSignIn={() => setShowSignIn(true)} />
				)}
			</div>
		</div>
	);
}
