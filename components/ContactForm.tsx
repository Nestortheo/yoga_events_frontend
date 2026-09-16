"use client";


import { useState } from "react";

type ContactFormData = {
    name: string,
    email: string, 
    subject: string,
    message: string
}

const initialFormData: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ContactForm(){
    const[formData, setFormData] = useState<ContactFormData>(initialFormData)

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<{
    msg: string;
    type: "success" | "error";
    } | null>(null);

    {/* HandleChange Function */}
    function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
    }

    {/* HandleSubmit Function */}
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setMessage(null);
        setSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
            throw new Error(data.message || "Something went wrong.");
            }

            console.log("Testing Payload ->", formData);

            setMessage({
            msg: data.message,
            type: "success",
            });

            setFormData(initialFormData);
        } catch (err: unknown) {
            console.log("Error is ->", err);

            let errorMessage = "Something went wrong.";

            if (err instanceof Error) {
            errorMessage = err.message;
            }

            setMessage({
            msg: errorMessage,
            type: "error",
            });
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
        >
        {/* Name */}
        <div className="flex flex-col gap-2">
            <label
            htmlFor="name"
            className="text-sm tracking-wide text-yellow-950/80"
            >
            Your Name
            </label>

            <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="
                rounded-lg
                border border-yellow-900/20
                bg-white/40
                px-4 py-3
                text-yellow-950
                outline-none
                transition
                placeholder:text-yellow-950/35
                focus:border-yellow-900/50
                focus:bg-white/60
            "
            />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
            <label
            htmlFor="email"
            className="text-sm tracking-wide text-yellow-950/80"
            >
            Your Email
            </label>

            <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="
                rounded-lg
                border border-yellow-900/20
                bg-white/40
                px-4 py-3
                text-yellow-950
                outline-none
                transition
                placeholder:text-yellow-950/35
                focus:border-yellow-900/50
                focus:bg-white/60
            "
            />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
            <label
            htmlFor="subject"
            className="text-sm tracking-wide text-yellow-950/80"
            >
            Subject
            </label>

            <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What would you like to talk about?"
            className="
                rounded-lg
                border border-yellow-900/20
                bg-white/40
                px-4 py-3
                text-yellow-950
                outline-none
                transition
                placeholder:text-yellow-950/35
                focus:border-yellow-900/50
                focus:bg-white/60
            "
            />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
            <label
            htmlFor="message"
            className="text-sm tracking-wide text-yellow-950/80"
            >
            Your Message
            </label>

            <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows={6}
            className="
                resize-none
                rounded-lg
                border border-yellow-900/20
                bg-white/40
                px-4 py-3
                text-yellow-950
                outline-none
                transition
                placeholder:text-yellow-950/35
                focus:border-yellow-900/50
                focus:bg-white/60
            "
            />
        </div>

        {/* Submit */}
        <button
            type="submit"
            className="
            self-start
            rounded-full
            border border-yellow-900/30
            bg-yellow-900
            px-7 py-3
            text-sm
            tracking-[0.12em]
            text-yellow-50
            transition
            hover:bg-yellow-950
            "
        >
            {submitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
        {message && (
        <p
            className={
            message.type === "success"
                ? "text-sm text-green-700"
                : "text-sm text-red-700"
            }
        >
            {message.msg}
        </p>
        )}
        </form>
    );


}