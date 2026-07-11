import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
  component: Login,
});

export default function Login() {
  return <div>Login</div>;
}
