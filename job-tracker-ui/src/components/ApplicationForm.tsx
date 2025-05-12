import { useState } from "react";
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
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        required
      />
      <input
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        required
      />
      <button>Add</button>
    </form>
  );
}
