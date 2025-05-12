import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:5128/api" });

export type JobApplication = {
  id: number;
  company: string;
  position: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
  dateAppliedUtc: string;
};
