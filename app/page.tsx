import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md rounded-2xl bg-white p-10 shadow-sm dark:bg-black">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Image
            className="dark:invert"
            src="/ap-logo.jpg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Sign in
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Alpha Infinity Accounting System
          </p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-5">
          <div>
            <FieldGroup>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input id="email" placeholder="example@example.com" />
              </Field>
              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input id="password" type="password" placeholder="••••••••" />
              </Field>
            </FieldGroup>
          </div>
          <Link href="/dashboard" className="w-full">
            <Button variant="outline" className="w-full">
              Log in
            </Button>
          </Link>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Don’t have an account?{" "}
          <a
            href="#"
            className="font-medium text-black hover:underline dark:text-zinc-50"
          >
            Sign up
          </a>
        </p>
      </main>
    </div>
  );
}
