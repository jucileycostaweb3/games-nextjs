"use client";

import { SubmitButton, TextInput } from "@/components";
import { handleSignUpForm } from "./actions";
import { useFormState } from "react-dom";

export default function SignUpForm() {

  const [state, formAction] = useFormState(handleSignUpForm, {});
  
  console.log("🟨*** ~ state:", state)

  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" />
      <TextInput name="email" label="E-mail" inputMode="email" />
      <TextInput name="password" label="Password" type="password" />
      <TextInput
        name="passwordConfirmation"
        label="Password confirmation"
        type="password"
      />

      <SubmitButton label="Create account" />
    </form>
  );
}