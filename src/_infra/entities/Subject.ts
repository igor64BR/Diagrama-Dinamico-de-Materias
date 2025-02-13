import subjects from "@/_data/subjects";
import { SubjectState } from "../enums/SubjectState";
import { SubjectType } from "../enums/SubjectType";

export default class Subject {
  constructor(
    public code: string,
    public period: number | null,
    public name: string,
    public requirements: string[],
    public type: SubjectType,
    public state: SubjectState,
  ) { }

  private static colorMap: Record<SubjectState, string> = {
    [SubjectState.AVAILABLE]: "yellow",
    [SubjectState.UNAVAILABLE]: "red",
    [SubjectState.DONE]: "green",
    [SubjectState.ONGOING]: "blue",
  };

  public get color(): string {
    return Subject.colorMap[this.state];;
  }
}
