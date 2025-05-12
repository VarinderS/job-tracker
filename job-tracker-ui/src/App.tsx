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
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Job Application Tracker
          </h1>
          <p className="mt-2 text-slate-600">
            Keep track of your job applications in one place
          </p>
        </header>
        <ApplicationForm onSaved={refresh} />
        <ApplicationTable data={apps} onRefresh={refresh} />
      </div>
    </main>
  );
}
export default App;
