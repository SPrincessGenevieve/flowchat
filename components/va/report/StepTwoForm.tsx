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
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

// 1. Schema for numeric inputs
const formSchema = z.object({
  newReplies: z.number().min(0),
  pendingBooking: z.number().min(0),
  qualifiedLeadsAdded: z.number().min(0),
});

interface StepTwoT {
  onClick: () => void;
  onClickBack: () => void;
}

export function StepTwoForm({ onClick, onClickBack }: StepTwoT) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newReplies: 0,
      pendingBooking: 0,
      qualifiedLeadsAdded: 0,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted:", data);
  }

  // 2. Define fields for mapping
  const fields = [
    { name: "newReplies", label: "New Leads Imported" },
    { name: "pendingBooking", label: "Friend Requests Sent" },
    { name: "qualifiedLeadsAdded", label: "New Conversations Started" },
  ] as const;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="h-full flex flex-col justify-between"
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

      <div className="col-span-2 flex justify-between gap-2 mt-4">
        <Button onClick={onClickBack} className="w-30" type="submit">
          <IconChevronLeft className="text-white" size={18}></IconChevronLeft>{" "}
          Back
        </Button>
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
