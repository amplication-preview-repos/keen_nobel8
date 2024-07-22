import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  location: string | null;
  price: number | null;
  name: string | null;
  description: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
};
