import { type JobApplication, api } from "../api";

export default function StatusDropdown({
  app,
  onSaved,
}: {
  app: JobApplication;
  onSaved: () => void;
}) {
  async function updateStatus(s: JobApplication["status"]) {
    await api.put(`JobApplications/${app.id}`, { ...app, status: s });
    onSaved();
  }
  return (
    <select
      value={app.status}
      onChange={(e) => updateStatus(e.target.value as JobApplication["status"])}
    >
      {["Applied", "Interview", "Offer", "Rejected"].map((s) => (
        <option key={s}>{s}</option>
      ))}
    </select>
  );
}
