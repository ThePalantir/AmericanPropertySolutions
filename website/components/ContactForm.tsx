"use client";

import { FormEvent, useState } from "react";
import { servicePriority } from "../lib/siteData";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  phone: string;
  email: string;
  property: string;
  service: string;
  location: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  property: "",
  service: "",
  location: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    if (status !== "idle") {
      setStatus("idle");
    }
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!form.service.trim()) nextErrors.service = "Choose a service interest.";
    if (!form.location.trim()) nextErrors.location = "Property location is required.";
    if (!form.message.trim()) nextErrors.message = "Tell APS what you need help with.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    await new Promise((resolve) => {
      window.setTimeout(resolve, 650);
    });

    setStatus("success");
    setForm(initialState);
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="form-status" aria-live="polite">
        {status === "idle" && "Preview form: no message is sent from this demo."}
        {status === "loading" && "Preparing confirmation..."}
        {status === "success" &&
          "Success state preview: final request routing can be connected before launch."}
        {status === "error" && "Please complete the required fields before requesting a walkthrough."}
      </div>

      <div className="form-grid">
        <label>
          Name <span aria-hidden="true">*</span>
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && <small id="name-error">{errors.name}</small>}
        </label>

        <label>
          Phone <span aria-hidden="true">*</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            required
          />
          {errors.phone && <small id="phone-error">{errors.phone}</small>}
        </label>

        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>

        <label>
          Property or Business Name
          <input
            value={form.property}
            onChange={(event) => updateField("property", event.target.value)}
          />
        </label>

        <label>
          Service Interest <span aria-hidden="true">*</span>
          <select
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            required
          >
            <option value="">Select a service</option>
            {servicePriority.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
            <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
          </select>
          {errors.service && <small id="service-error">{errors.service}</small>}
        </label>

        <label>
          Property Location <span aria-hidden="true">*</span>
          <input
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
            required
          />
          {errors.location && <small id="location-error">{errors.location}</small>}
        </label>
      </div>

      <label>
        How Can We Help? <span aria-hidden="true">*</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && <small id="message-error">{errors.message}</small>}
      </label>

      <button className="button button-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Preparing Request..." : "Request a Property Walkthrough"}
      </button>
    </form>
  );
}
