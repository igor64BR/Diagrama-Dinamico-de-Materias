import {SubjectType} from "@/_infra/enums/SubjectType";
import {SubjectState} from "@/_infra/enums/SubjectState";

type Subject = {
    code: string,
    period: number | null,
    name: string,
    requirements: string[],
    type: SubjectType,
    state: SubjectState,
}

export default Subject;
