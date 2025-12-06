"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ApplyModal({ role }: { role: string }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    linkedin: "",
    message: "",
    resume: null as File | null,
  });

  const handleSubmit = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("linkedin", form.linkedin);
    formData.append("message", form.message);
    if (form.resume) formData.append("resume", form.resume);

    await fetch("/api/careers/apply", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-brand text-white">Apply Now</Button>
      </DialogTrigger>

      <DialogContent className="bg-base-white border border-brand/10 shadow-xl rounded-2xl p-8 max-w-lg">

        <DialogHeader>
          <DialogTitle className="text-2xl text-brand font-bold">
            Apply for {role}
          </DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4 mt-4"
        >
          <input
            className="w-full p-3 border rounded-lg bg-brand-light/10"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-3 border rounded-lg bg-brand-light/10"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="w-full p-3 border rounded-lg bg-brand-light/10"
            placeholder="LinkedIn or Portfolio URL"
            onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
          />

          <textarea
            className="w-full p-3 border rounded-lg bg-brand-light/10"
            rows={4}
            placeholder="Why do you want to work with us?"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) =>
              setForm({ ...form, resume: e.target.files?.[0] || null })
            }
            className="w-full p-3 border rounded-lg bg-brand-light/10"
          />

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-brand text-white py-3 rounded-xl"
          >
            {loading ? "Sending..." : "Submit Application"}
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
