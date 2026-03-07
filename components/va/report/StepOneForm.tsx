"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { IconChevronRight } from "@tabler/icons-react";

// 1. Schema for numeric inputs
const formSchema = z.object({
  newLeadsImported: z.number().min(0),
  friendRequestsSent: z.number().min(0),
  newConversationsStarted: z.number().min(0),
  nurtureResponseSent: z.number().min(0),
  callsBooked: z.number().min(0),
});

interface StepOneT {
  onClick: () => void;
}

export function StepOneForm({ onClick }: StepOneT) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newLeadsImported: 0,
      friendRequestsSent: 0,
      newConversationsStarted: 0,
      nurtureResponseSent: 0,
      callsBooked: 0,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted:", data);
  }

  // 2. Define fields for mapping
  const fields = [
    { name: "newLeadsImported", label: "New Leads Imported" },
    { name: "friendRequestsSent", label: "Friend Requests Sent" },
    { name: "newConversationsStarted", label: "New Conversations Started" },
    { name: "nurtureResponseSent", label: "Nurture Response Sent" },
    { name: "callsBooked", label: "Calls Booked" },
  ] as const;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-full"
    >
      <FieldGroup className="flex flex-col gap-4">
        {fields.map((field) => (
          <Controller
            key={field.name}
            name={field.name}
            control={form.control}
            render={({ field: controllerField, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
                <Input
                  {...controllerField}
                  id={field.name}
                  type="number"
                  min={0}
                  placeholder="0"
                  value={controllerField.value ?? 0}
                  onChange={(e) =>
                    controllerField.onChange(Number(e.target.value))
                  }
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        ))}
      </FieldGroup>

      <div className="col-span-2 flex justify-end gap-2 mt-4">
        <Button onClick={onClick} className="w-30" type="submit">
          Next
          <IconChevronRight
            className="text-white"
            size={18}
          ></IconChevronRight>{" "}
        </Button>
      </div>
    </form>
  );
}
