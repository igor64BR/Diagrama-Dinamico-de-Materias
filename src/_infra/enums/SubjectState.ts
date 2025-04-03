// Types
export type StateStyles = { bgColor: string, fontColor: string }

// Constants
export enum SubjectState {
    // Subjects completed already
    DONE = "DONE",

    // Subjects ongoing
    ONGOING = "ONGOING",

    // Subjects available or not to be taken
    PENDING = "PENDING",
}

export enum DisplayState {
    // Subjects ongoing
    ONGOING = "ONGOING",

    // Subjects completed already
    DONE = "DONE",

    // Subjects available or not to be taken
    AVAILABLE = "AVAILABLE",

    // Subjects completed already
    UNAVAILABLE = "UNAVAILABLE",
}

const stateNames: { [key in SubjectState]: string } = {
    [SubjectState.PENDING]: 'Pendente',
    [SubjectState.DONE]: 'Concluído',
    [SubjectState.ONGOING]: 'Em andamento',
}

// Methods
export const getStateName = (state: SubjectState) => {
    return stateNames[state];
}