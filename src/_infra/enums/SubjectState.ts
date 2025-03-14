// Types
export type StateStyles = { bgColor: string, fontColor: string }

// Constants
export enum SubjectState {
    // Subjects completed already
    DONE,

    // Subjects ongoing
    ONGOING,

    // Subjects available or not to be taken
    PENDING,
}

export enum DisplayState {
    // Subjects ongoing
    ONGOING,

    // Subjects completed already
    DONE,

    // Subjects available or not to be taken
    AVAILABLE,

    // Subjects completed already
    UNAVAILABLE,
}

export const stateColors: { [key in DisplayState]: StateStyles } = {
    [DisplayState.AVAILABLE]: {bgColor: 'white', fontColor: 'black'},
    [DisplayState.UNAVAILABLE]: {bgColor: 'red', fontColor: 'white'},
    [DisplayState.DONE]: {bgColor: 'green', fontColor: 'white'},
    [DisplayState.ONGOING]: {bgColor: 'blue', fontColor: 'white'},
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