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
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Status</th>
          <th>Date Applied</th>
        </tr>
      </thead>
      <tbody>
        {data.map((a) => (
          <tr key={a.id}>
            <td>{a.company}</td>
            <td>{a.position}</td>
            <td>
              <StatusDropdown app={a} onSaved={onRefresh} />
            </td>
            <td>{new Date(a.dateAppliedUtc).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
