import { SubjectState } from "../enums/SubjectState";
import { SubjectType } from "../enums/SubjectType";
import { SupaSubject } from "@/_infra/entities/SupabaseEntities";
import { Node } from "@xyflow/react";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";

export default class Subject implements Record<string, unknown> {
  [x: string]: unknown;

  id: number;
  course_id: number;
  created_at: string;
  updated_at: string;
  credits?: number;
  code?: string;
  period?: number;
  title: string;
  requirementsIds: string[];
  type: SubjectType;
  state: SubjectState;

  constructor(
    subject: SupaSubject) {
    this.id = subject.id;
    this.course_id = subject.course_id;
    this.created_at = subject.created_at;
    this.updated_at = subject.updated_at;
    this.credits = subject.credits;
    this.code = subject.code;
    this.period = subject.period;
    this.title = subject.title;
    this.requirementsIds = subject.requirements;
    this.type = subject.type;
    this.state = subject.state;
  }

  public toNode = (): Node<Subject> => createNode<Subject>(this, {x: 0, y: 0, componentName: 'SubjectBox'});

  public toSupaSubject = (): SupaSubject => ({...this, requirements: this.requirementsIds});
}