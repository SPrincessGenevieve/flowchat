"use client";

import * as React from "react";
import { Controller, useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { formSchema } from "./SubmitReportDialog";

type FormSchemaT = z.infer<typeof formSchema>;

interface StepFourT {
  onClickBack: () => void;
  onSubmit: (data: FormSchemaT) => void;
  form: UseFormReturn<FormSchemaT>;
}

export function StepFourForm({ onClickBack, onSubmit, form }: StepFourT) {
  const inputFields = [
    { name: "topGroup", label: "Top Performing Group" },
    { name: "commonObj", label: "Common Objection" },
  ] as const;

  const textareaFields = [
    { name: "winningHook", label: "Winning Hook" },
    { name: "recommendations", label: "Recommendations" },
    { name: "blockers", label: "Blockers (Optional)" },
  ] as const;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="flex flex-col gap-4 form-cont">
        {/* Inputs */}
        {inputFields.map((field) => (
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
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        ))}

        {/* Textareas */}
        {textareaFields.map((field) => (
          <Controller
            key={field.name}
            name={field.name}
            control={form.control}
            render={({ field: controllerField, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>

                <InputGroup className="border border-white/30 text-white">
                  <InputGroupTextarea
                    {...controllerField}
                    id={field.name}
                    rows={4}
                    className="resize-none "
                    aria-invalid={fieldState.invalid}
                  />
                </InputGroup>

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
        <Button className="w-30" type="submit">
          Submit
          <IconChevronRight
            className="text-white"
            size={18}
          ></IconChevronRight>{" "}
        </Button>
      </div>
    </form>
  );
}
