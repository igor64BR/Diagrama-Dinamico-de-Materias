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

  private static colorMap: Record<SubjectState, { bgColor: string, fontColor: string }> = {
    [SubjectState.AVAILABLE]: {bgColor: "white", fontColor: "black"},
    [SubjectState.UNAVAILABLE]: {bgColor: "red", fontColor: "white"},
    [SubjectState.DONE]: {bgColor: "green", fontColor: "white"},
    [SubjectState.ONGOING]: {bgColor: "blue", fontColor: "white"},
  };

  public get color() {
    return Subject.colorMap[this.state];;
  }
}
