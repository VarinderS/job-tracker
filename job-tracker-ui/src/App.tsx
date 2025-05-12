import { useEffect, useState } from "react";
import { api, type JobApplication } from "./api";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationTable from "./components/ApplicationTable";

function App() {
  const [apps, setApps] = useState<JobApplication[]>([]);

  const refresh = () =>
    api.get<JobApplication[]>("JobApplications").then((r) => setApps(r.data));

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <h1>Job Application Tracker</h1>
      <ApplicationForm onSaved={refresh} />
      <ApplicationTable data={apps} onRefresh={refresh} />
    </>
  );
}
export default App;
