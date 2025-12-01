import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 bg-white">
      <h1 className="text-2xl font-bold text-center mb-1" style={{ color: "#342e28" }}>
        Welcome Back
      </h1>
      <p className="text-sm text-center mb-8" style={{ color: "#342e28" }}>
        Sign in to continue
      </p>

      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="grid gap-2 text-left">
          <Label>Email</Label>
          <Input type="email" placeholder="m@example.com" />
        </div>

        <div className="grid gap-2 text-left">
          <Label>Password</Label>
          <Input type="password" />
          <div className="flex justify-end">
            <Link
              to="#"
              className="text-sm underline-offset-4 hover:underline"
              style={{ color: "#342e28" }}
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Sign In → Navigate to Home */}
        <Button
          className="w-full px-4 py-2 rounded"
          style={{ backgroundColor: "#ffd57d", color: "#342e28" }}
          onClick={() => navigate("/home")}
        >
          Sign In
        </Button>

        <p className="text-sm mt-4 text-center" style={{ color: "#342e28" }}>
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
