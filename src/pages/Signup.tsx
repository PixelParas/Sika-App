// File: src/pages/Signup.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 bg-white">
      <h1 className="text-2xl font-bold text-center mb-1" style={{ color: "#342e28" }}>Create Account</h1>
      <p className="text-sm text-center mb-8" style={{ color: "#342e28" }}>Sign up to get started</p>

      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="grid gap-2 text-left">
          <Label>Full Name</Label>
          <Input type="text" placeholder="John Doe" />
        </div>

        <div className="grid gap-2 text-left">
          <Label>Email</Label>
          <Input type="email" placeholder="m@example.com" />
        </div>

        <div className="grid gap-2 text-left">
          <Label>Password</Label>
          <Input type="password" />
        </div>

        <div className="grid gap-2 text-left">
          <Label>Confirm Password</Label>
          <Input type="password" />
        </div>

        <div className="flex items-center gap-2 mt-2 text-left">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm" style={{ color: "#342e28" }}>
            I agree to the Terms & Conditions and Privacy Policy
          </Label>
        </div>

        <Button className="w-full px-4 py-2 rounded" style={{ backgroundColor: "#ffd57d", color: "#342e28" }}>
          Sign Up
        </Button>

        <p className="text-sm mt-4 text-center" style={{ color: "#342e28" }}>
          Already have an account?{" "}
          <Link to="/" className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
