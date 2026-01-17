"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignupForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    // ✅ Confirm password check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }

    const res = await postUser({ name, email, password });

    setLoading(false);

    if (!res.success) {
      alert(res.message);
      return;
    }

    alert("Account created successfully");

    // Optional: auto login after signup
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel>Full Name</FieldLabel>
              <Input
                name="name"
                placeholder="John Doe"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input
                name="password"
                type="password"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Confirm Password</FieldLabel>
              <Input
                name="confirmPassword"
                type="password"
                required
              />
            </Field>

            <Field>
              <Button disabled={loading} type="submit" className="w-full">
                {loading ? "Creating..." : "Create Account"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full mt-2"
                onClick={() => signIn("google")}
              >
                Sign up with Google
              </Button>

              <FieldDescription className="text-center mt-2">
                Already have an account? <a href="/login">Sign in</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
