"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function EnrollForm({
    open,
    onClose,
    courseTitle,
}: {
    open: boolean
    onClose: () => void
    courseTitle: string
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const payload = { ...formData, courseTitle }

        try {
            const res = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })

            if (!res.ok) throw new Error("Failed to send email")

            onClose()
        } catch (err) {
            console.error("❌ Submission failed", err)
        }
        setFormData({ name: "", email: "", phone: "", college: "" })
    }


    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-xl rounded-2xl border border-black bg-slate-100 shadow-2xl px-6 py-8">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-black border-b border-black pb-3 mb-6">
                        Enroll in {courseTitle}
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <Label htmlFor="name" className="text-black font-medium">
                            Full Name
                        </Label>
                        <Input
                            name="name"
                            required
                            onChange={handleChange}
                            value={formData.name}
                            className="bg-white border border-black text-black placeholder:text-gray-500"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <Label htmlFor="email" className="text-black font-medium">
                            Email
                        </Label>
                        <Input
                            name="email"
                            type="email"
                            required
                            onChange={handleChange}
                            value={formData.email}
                            className="bg-white border border-black text-black placeholder:text-gray-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <Label htmlFor="phone" className="text-black font-medium">
                            Phone
                        </Label>
                        <Input
                            name="phone"
                            type="tel"
                            required
                            onChange={handleChange}
                            value={formData.phone}
                            className="bg-white border border-black text-black placeholder:text-gray-500"
                            placeholder="+91 "
                        />
                    </div>

                    <div>
                        <Label htmlFor="college" className="text-black font-medium">
                            College / Institution
                        </Label>
                        <Input
                            name="college"
                            required
                            onChange={handleChange}
                            value={formData.college}
                            className="bg-white border border-black text-black placeholder:text-gray-500"
                            placeholder="Your College"
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button
                            type="submit"
                            className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
