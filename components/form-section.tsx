"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, Phone, AtSign, Mail } from "lucide-react"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Enter a valid email address."),
  company: z.string().min(1, "Please enter your company name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  // solution: z.string().min(1, "Please choose a solution."),
  message: z.string().min(2, "Tell us a little more about your business."),
})

type ContactFormValues = z.infer<typeof formSchema>

export default function FormSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      // solution: "",
      message: "",
    },
  })

  function onSubmit(data: ContactFormValues) {
    console.log(data)
    // TODO: wire up to your submission endpoint
  }

  return (
    <section className="bg-[#FAFAFA] py-10 md:py-16" id="form-section">
      <div className="container-padding-x container grid gap-10 lg:grid-cols-2">
        {/* Left column — copy */}
        <div>
          <p className="text-sm">
            We&apos;re here to answer all your questions
          </p>

          <h2 className="mt-3 font-jakarta-sans text-4xl font-bold">
            Let&apos;s Built something better
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed">
            Connect with ISAM Global to explore smarter digital solutions,
            innovative technologies, and new opportunities for your business.
          </p>

          {/* <div className="mt-8 flex items-center gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div> */}

          <div className="mt-12 divide-y divide-black/20 border-t border-black/20">
            {/* <div className="flex items-center gap-4 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                <Phone className="h-4.5 w-4.5" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm text-white/50">
                  Feel free to get in touch!
                </p>
                <p className="text-[15px] font-medium">+2 011 6114 5741</p>
              </div>
            </div> */}

            <div className="flex items-center gap-4 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                <Mail className="h-5" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm">How can we help you?!</p>
                <Link
                  href="mailto:info@isamglobal.com"
                  className="text-[15px] font-medium"
                >
                  info@isamglobal.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — form card */}
        <div className="mx-auto max-w-xl rounded-2xl border border-black/10 bg-white p-8 shadow-xl">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Just fill out the form and our global experts will be in touch right
            away with package and price solution to help you!
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6"
            noValidate
          >
            <FieldGroup>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className="sr-only">
                        Your Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        placeholder="Your Name"
                        aria-invalid={fieldState.invalid}
                        autoComplete="name"
                        className="h-11 rounded-md bg-transparent placeholder:text-black/60 dark:bg-transparent"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className="sr-only">
                        Email Address
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        placeholder="Email Address"
                        aria-invalid={fieldState.invalid}
                        autoComplete="email"
                        className="h-11 rounded-md bg-transparent placeholder:text-black/60 dark:bg-transparent"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Controller
                  name="company"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className="sr-only">
                        Company Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        placeholder="Company Name"
                        aria-invalid={fieldState.invalid}
                        autoComplete="organization"
                        className="h-11 rounded-md bg-transparent placeholder:text-black/60 dark:bg-transparent"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className="sr-only">
                        Phone Number
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        onKeyDown={(e) => {
                          // Prevent the decimal point key from registering
                          if (e.key === "." || e.key === "," || e.key === "-") {
                            e.preventDefault()
                          }
                        }}
                        type="number"
                        step={1}
                        min={0}
                        placeholder="00971xxxxxxx"
                        aria-invalid={fieldState.invalid}
                        autoComplete="tel"
                        className="h-11 rounded-md bg-transparent placeholder:text-black/60 dark:bg-transparent"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              {/* <Controller
                name="solution"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="sr-only">
                      AI Integration solutions
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        className="h-11! rounded-md bg-transparent hover:bg-transparent data-placeholder:text-white/80 dark:bg-transparent dark:hover:bg-transparent"
                      >
                        <SelectValue placeholder="AI Integration solutions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-integration">
                          AI Integration solutions
                        </SelectItem>
                        <SelectItem value="process-automation">
                          Process Automation
                        </SelectItem>
                        <SelectItem value="data-analytics">
                          Data &amp; Analytics
                        </SelectItem>
                        <SelectItem value="custom-development">
                          Custom Development
                        </SelectItem>
                        <SelectItem value="consulting">
                          Consulting &amp; Strategy
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              /> */}

              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="sr-only">
                      Tell us about your business
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      placeholder="Kindly provide enough information about your business..."
                      aria-invalid={fieldState.invalid}
                      className="h-11 rounded-md bg-transparent placeholder:text-black/60 dark:bg-transparent"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4d6952] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Submit
                <ArrowRight className="h-4 w-4" />
              </button>
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  )
}
