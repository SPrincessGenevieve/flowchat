"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { toastUI } from "@/components/ui/Toaster";

export interface UserDetailT {
  first_name: string;
  last_name: string;
  middle_name: string;
  name_ext: string;
  email: string;
  contact_no: string;
  status: string;
  training: string;
  certificate: boolean;
}

interface DataT {
  data: UserDetailT;
}

export default function UserDetailsForm({ data }: DataT) {
  const form = useForm({
    defaultValues: { ...data },
    onSubmit: async ({ value }) => {
      console.log(value);
      toastUI.success({
        title: "User information updated successfully.",
      });
    },
  });

  return (
    <div>
      <form
        id="user-details-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup className="grid grid-cols-2 gap-4">
          <form.Field
            name="first_name"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>First Name</FieldLabel>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </Field>
            )}
          />

          <form.Field
            name="middle_name"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Middle Name</FieldLabel>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </Field>
            )}
          />

          <form.Field
            name="last_name"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </Field>
            )}
          />

          <form.Field
            name="name_ext"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Name Ext.</FieldLabel>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </Field>
            )}
          />

          <form.Field
            name="email"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </Field>
            )}
          />

          <form.Field
            name="contact_no"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Contact Number</FieldLabel>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </Field>
            )}
          />
        </FieldGroup>

        <div className="mt-6 w-full flex justify-end">
          <Button type="submit" className="">
            Update Details
          </Button>
        </div>
      </form>
    </div>
  );
}
