import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../../components/auth/loginForm";

export const Route = createFileRoute("/(auth)/login")({
  component: Login,
});

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoginForm />
    </div>
  );
}
