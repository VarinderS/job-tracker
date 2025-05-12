import { useState } from "react";
import { Plus } from "lucide-react";
import { api, type JobApplication } from "../api";

type Props = { onSaved: () => void; initial?: Partial<JobApplication> };

export default function ApplicationForm({ onSaved, initial = {} }: Props) {
  const [company, setCompany] = useState(initial.company ?? "");
  const [position, setPosition] = useState(initial.position ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await api.post<JobApplication>("JobApplications", {
      company,
      position,
      status: "Applied",
      dateAppliedUtc: new Date().toISOString(),
    });
    setCompany("");
    setPosition("");
    onSaved();
  }

  return (
    <section aria-labelledby="add-job-heading" className="mb-8">
      <h2 id="add-job-heading" className="sr-only">
        Add New Job Application
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 md:p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-md p-2 transition border-2 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 outline-0"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full rounded-md p-2 transition border-2 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 outline-0"
              placeholder="Enter job position"
              required
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="inline-flex transition cursor-pointer items-center gap-1.5 border-2 border-emerald-600 hover:border-emerald-700 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Add job application"
            >
              <Plus className="h-4 w-4" />
              <span>Add Job</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
