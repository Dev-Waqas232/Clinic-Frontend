import Button from "../shared/button";
import Input from "../shared/input";
import logo from "../../../public/logo.svg";

export default function LoginForm() {
  return (
    <>
      <div className="flex flex-col md:w-md space-y-10">
        <div className="space-y-6">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Logo" className="size-10" />
            <p className="text-3xl font-heading">CareSync</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Welcome Back</p>
            <p className="text-caption text-sm italic">
              Login to your account to proceed further
            </p>
          </div>
        </div>
        <form className="space-y-4 w-full">
          <Input label="Email" placeholder="email@example.com" type="email" />
          <Input label="Password" placeholder="******" type="password" />
          <Button text="Login" fullWidth />
          <Button text="Login with Google" fullWidth />
          <p className="text-center">
            Don't have an account?{" "}
            <span className="italic text-primary">Create one</span>
          </p>
        </form>
      </div>
    </>
  );
}
