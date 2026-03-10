"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { toastUI } from "@/components/ui/Toaster";

interface PasswordFormT {
  password: string;
}

export default function UserPasswordForm() {
  const form = useForm({
    defaultValues: { password: "" },
    onSubmit: async ({ value }) => {
      console.log("New password:", value.password);
      toastUI.success({
        title: "Password updated successfully.",
      });
    },
  });

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    form.setFieldValue("password", password);
    toastUI.success({ title: "New password generated successfully." });
  };

  return (
    <div>
      <form
        id="user-password-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup className="flex flex-col gap-4">
          <form.Field
            name="password"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>New Password</FieldLabel>
                <Input
                  type="password"
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldError errors={field.state.meta.errors} />
              </Field>
            )}
          />

          <div className="flex gap-2 justify-end">
            <Button className="w-auto" onClick={generatePassword} type="button">
              Generate New Password
            </Button>

            <Button
              className="w-auto bg-linear-90 from-green-500 to-green-300 text-black"
              variant={"ghost"}
              type="submit"
            >
              Update Password
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
