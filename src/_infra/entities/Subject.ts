import { SubjectType } from "../enums/SubjectType";

export default class Subject {
  constructor(
    public code: string,
    public period: number | null,
    public name: string,
    public requirements: string[],
    public type: SubjectType,
  ) {}
}
