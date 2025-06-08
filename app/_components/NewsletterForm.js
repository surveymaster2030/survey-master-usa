"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setStatus("❌ Please enter your email.");
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus("❌ Please enter a valid email address.");
      return;
    }

    setStatus("⏳ Submitting...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxKZnEgSeeybbLKEWOwbAlexj5zhlrOfQUFSHmNudtMRsL-8vJXE_1LOxJPcRkyKVIw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }),
        },
      );

      const result = await response.text();
      console.log("Response:", result);

      if (response.ok) {
        setStatus("✅ Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("❌ Failed to subscribe.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error while subscribing.");
    }
  };

  return (
    <div className="relative -top-10 mx-auto flex w-full max-w-2/3 flex-col items-center justify-around rounded-md bg-teal-600 p-6 px-10 lg:flex-row">
      <div className="flex flex-col">
        <h2 className="mb-2 text-2xl font-extrabold md:text-3xl">
          SurvayM Newsletter
        </h2>
        <p className="mb-4 text-xs">
          Subscribe to our Newsletter to receive SURVAY MASTER updates on
          product.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-4 rounded-md bg-white p-1.5 sm:flex-row"
      >
        <input
          type="text"
          placeholder="Type your email here"
          className="px-4 text-black placeholder:text-gray-600 focus:ring-0 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-secondary hover:bg-primary cursor-pointer rounded-md px-6 py-3 text-xs"
        >
          Subscribe
        </button>
        {status && (
          <p className="absolute -bottom-6 mt-2 text-xs text-gray-100">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
