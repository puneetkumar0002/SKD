"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Sparkles } from "lucide-react";
import { coursesData } from "@/data/courses";

interface EnquiryFormProps {
  defaultCourse?: string;
  source?: string;
  compact?: boolean;
}

export default function EnquiryForm({
  defaultCourse,
  source = "Website Form",
  compact = false,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "Chandigarh",
    course: defaultCourse || "ACCA Coaching in Chandigarh",
    mode: "Classroom (Chandigarh)" as "Classroom (Chandigarh)" | "Live Interactive Online" | "Flexible Hybrid",
    message: "",
    consent: true,
  });

  const [utmParams, setUtmParams] = useState({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utmSource: urlParams.get("utm_source") || "",
        utmMedium: urlParams.get("utm_medium") || "",
        utmCampaign: urlParams.get("utm_campaign") || "",
      });
    }
  }, []);

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.mobile.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!formData.consent) {
      setErrorMsg("Please agree to receive academic counselling information.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: cleanPhone,
          email: formData.email,
          city: formData.city,
          course: formData.course,
          mode: formData.mode,
          message: formData.message,
          source: source,
          ...utmParams,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || "Thank you! Your enquiry has been registered.");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          city: "Chandigarh",
          course: defaultCourse || "ACCA Coaching in Chandigarh",
          mode: "Classroom (Chandigarh)",
          message: "",
          consent: true,
        });
      } else {
        setErrorMsg(data.error || "Unable to submit enquiry. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please call +91 8054811313 directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-[#E2E8F5] shadow-card-blue ${compact ? "p-4 sm:p-6" : "p-6 sm:p-8"}`}>
      <div className="mb-6">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-semibold mb-2 border border-[#2855E8]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#DCA43A]" />
          <span>Free 1-on-1 Academic Counselling</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#101F3D]">
          Book Your Counselling Session
        </h3>
        <p className="text-sm text-[#66758C] mt-1">
          Speak with senior CA, ACCA & CMA mentors at Godrej Eternia, Chandigarh or via phone.
        </p>
      </div>

      {successMsg ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-emerald-900 mb-1">
            Enquiry Received Successfully!
          </h4>
          <p className="text-sm text-emerald-800 leading-relaxed mb-4">
            {successMsg}
          </p>
          <div className="p-3 bg-white rounded-lg border border-emerald-100 text-xs text-gray-700">
            For urgent queries, call us directly at{" "}
            <a href="tel:918054811313" className="font-bold text-[#2855E8] underline">
              +91 80548 11313
            </a>
          </div>
          <button
            type="button"
            onClick={() => setSuccessMsg(null)}
            className="mt-4 text-xs font-semibold text-[#2855E8] hover:underline"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#14243D] uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Karanveer Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E2E8F5] bg-[#F8FAFF] text-sm text-[#14243D] placeholder-gray-400 focus:outline-none focus:border-[#2855E8] focus:bg-white transition-all shadow-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#14243D] uppercase tracking-wider mb-1.5">
                Mobile Number *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-500">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="98765 43210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#E2E8F5] bg-[#F8FAFF] text-sm text-[#14243D] placeholder-gray-400 focus:outline-none focus:border-[#2855E8] focus:bg-white transition-all shadow-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#14243D] uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="karan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F5] bg-[#F8FAFF] text-sm text-[#14243D] placeholder-gray-400 focus:outline-none focus:border-[#2855E8] focus:bg-white transition-all shadow-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#14243D] uppercase tracking-wider mb-1.5">
                Interested Course *
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-3 py-3 rounded-xl border border-[#E2E8F5] bg-[#F8FAFF] text-sm text-[#14243D] focus:outline-none focus:border-[#2855E8] focus:bg-white transition-all shadow-xs"
              >
                {coursesData.map((c) => (
                  <option key={c.slug} value={c.title}>
                    {c.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#14243D] uppercase tracking-wider mb-1.5">
                City / Location
              </label>
              <input
                type="text"
                placeholder="Chandigarh / Mohali / Panchkula"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F5] bg-[#F8FAFF] text-sm text-[#14243D] placeholder-gray-400 focus:outline-none focus:border-[#2855E8] focus:bg-white transition-all shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14243D] uppercase tracking-wider mb-1.5">
              Preferred Learning Mode
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {[
                "Classroom (Chandigarh)",
                "Live Interactive Online",
              ].map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      mode: m as typeof formData.mode,
                    })
                  }
                  className={`py-2 px-3 rounded-xl border text-center transition-all ${
                    formData.mode === m
                      ? "border-[#2855E8] bg-[#EFF6FF] text-[#2855E8] font-bold shadow-xs"
                      : "border-[#E2E8F5] bg-white text-[#66758C] hover:bg-gray-50"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {!compact && (
            <div>
              <label className="block text-xs font-bold text-[#14243D] uppercase tracking-wider mb-1.5">
                Your Academic Background / Questions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g., Completed Class 12th commerce / B.Com 2nd year. Want to know about exam fees & batch start dates."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F5] bg-[#F8FAFF] text-sm text-[#14243D] placeholder-gray-400 focus:outline-none focus:border-[#2855E8] focus:bg-white transition-all shadow-xs"
              />
            </div>
          )}

          <div className="flex items-start space-x-2 pt-1">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-[#E2E8F5] text-[#2855E8] focus:ring-[#2855E8]"
            />
            <label htmlFor="consent" className="text-xs text-[#66758C] leading-snug">
              I authorize SKD Group of Institutions counsellors to contact me via Call, WhatsApp, and Email regarding course details.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2855E8] to-[#467FFF] hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all flex justify-center items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Registering Counselling...</span>
              </>
            ) : (
              <>
                <span>Submit Admission Enquiry</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-400 flex items-center justify-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 inline" />
            <span>100% Privacy Guaranteed. No spam. No misleading claims.</span>
          </p>
        </form>
      )}
    </div>
  );
}
