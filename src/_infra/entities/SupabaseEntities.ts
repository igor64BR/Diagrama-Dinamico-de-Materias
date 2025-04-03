import { SubjectType } from "@/_infra/enums/SubjectType";
import { SubjectState } from "@/_infra/enums/SubjectState";

export type SupaSubject = {
  id?: number;
  created_at: string;
  updated_at: string;
  title: string;
  credits?: number;
  course_id: number;
  requirements: string[];
  code?: string;
  period?: number;
  type: SubjectType;
  state: SubjectState;
}