import { type JobApplication } from "../api";
import StatusDropdown from "./StatusDropdown";

export default function ApplicationTable({
  data,
  onRefresh,
}: {
  data: JobApplication[];
  onRefresh: () => void;
}) {
  return (
    <section aria-labelledby="job-list-heading">
      <h2
        id="job-list-heading"
        className="text-xl font-semibold text-slate-800 mb-4"
      >
        Your Applications
      </h2>
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Position
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Date Applied
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {data.map((jobApplication) => (
                <tr
                  key={jobApplication.id}
                  className="transition bg-white hover:bg-slate-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    {jobApplication.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                    {jobApplication.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <StatusDropdown app={jobApplication} onSaved={onRefresh} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                    {new Date(
                      jobApplication.dateAppliedUtc
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-sm text-slate-500"
                  >
                    No job applications yet. Add your first one above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
