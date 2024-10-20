"use client";

import { TextInput, SubmitButton } from "@/components";
import Link from "next/link";

export default async function SignUpPage() {

  return (
    <div className="flex flex-col w-full">
      <div className="flex-center w-full min-h-screen">
        <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
          <h1 className="text-3xl">Create your account</h1>
          <form>
            <TextInput name="name" label="Name" error={""} />
            <TextInput name="email" label="E-mail" inputMode="email" error={""} />
            <TextInput name="password" label="Password" type="password" error={""} />
            <TextInput
              name="passwordConfirmation"
              label="Password confirmation"
              type="password"
              error={""}
            />

            <SubmitButton label="Create account" />
          </form>
          <div className="pt-8">
            <Link href={"/auth/sign-up"}>Already have an account? Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}