import { ChevronDown } from "lucide-react";
import { type JobApplication, api } from "../api";
import { cn } from "../utils";

const statusColors = {
  Applied: "bg-blue-100 text-blue-800",
  Interview: "bg-purple-100 text-purple-800",
  Offer: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

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
    <div className="relative">
      <select
        value={app.status}
        onChange={(e) =>
          updateStatus(e.target.value as JobApplication["status"])
        }
        className={cn(
          "appearance-none",
          "inline-flex items-center justify-between rounded-md px-3 py-1.5 text-sm font-medium w-full",
          statusColors[app.status]
        )}
      >
        {["Applied", "Interview", "Offer", "Rejected"].map((status) => (
          <option
            key={status}
            className={cn(
              "relative cursor-pointer select-none py-2 pl-3 pr-9 text-slate-900 hover:bg-slate-100 bg-white",
              status === app.status && "bg-slate-100"
            )}
          >
            {status}
          </option>
        ))}
      </select>
      <span className="absolute pointer-events-none inset-0 flex px-3 justify-end items-center">
        <ChevronDown className="ml-1 h-4 w-4" />
      </span>
    </div>
  );
}
