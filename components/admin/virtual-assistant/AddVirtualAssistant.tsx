"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toastUI } from "@/components/ui/Toaster";

// 1️⃣ Define Zod schema
const vaSchema = z.object({
  first_name: z.string().min(1, "First Name is required"),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, "Last Name is required"),
  name_ext: z.string().optional(),
  email: z.string().email("Invalid email address"),
  contact_no: z.string().min(1, "Contact Number is required"),
});

type VAFormValues = z.infer<typeof vaSchema>;

export default function AddVirtualAssistant() {
  const form = useForm<VAFormValues>({
    resolver: zodResolver(vaSchema),
    defaultValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      name_ext: "",
      email: "",
      contact_no: "",
    },
  });

  const onSubmit = (data: VAFormValues) => {
    toastUI.success({
      title: "User Created Successfully",
    });
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Virtual Assistant</Button>
      </DialogTrigger>

      <DialogContent
        className={`overflow-y-auto virtual-info-cont w-full min-w-200 bg-primary-blue-500 shadow-[0_0_10px_0px_#ffffff]`}
      >
        <DialogHeader>
          <DialogTitle>
            <Label className="text-xl">Add Virtual Assistant</Label>
          </DialogTitle>
          <DialogDescription>
            Create a new VA account. An email will not be sent automatically.
            Provide them with these credentials to log in.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <Controller
              name="first_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>First Name</FieldLabel>
                  <Input {...field} placeholder="John" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Middle Name */}
            <Controller
              name="middle_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Middle Name</FieldLabel>
                  <Input {...field} placeholder="M." />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Last Name */}
            <Controller
              name="last_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Last Name</FieldLabel>
                  <Input {...field} placeholder="Doe" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Name Ext */}
            <Controller
              name="name_ext"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Name Ext.</FieldLabel>
                  <Input {...field} placeholder="Jr." />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input {...field} placeholder="john@example.com" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Contact No */}
            <Controller
              name="contact_no"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Contact No.</FieldLabel>
                  <Input {...field} placeholder="+63 912 345 6789" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <div className="mt-6 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-30 border-primary-blue-100 bg-transparent text-primary-blue-100 hover:bg-primary-blue-100/30 hover:text-white"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button className="w-30" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
