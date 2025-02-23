// Types
export type StateStyles = { bgColor: string, fontColor: string }

// Constants
export enum SubjectState {
    // State defined only for user selection. Must not be used in Subject entity
    UNDEFINED = -1,

    // Subjects that have all requirements done already
    AVAILABLE,

    // Subjects that have pending requirements
    UNAVAILABLE,

    // Subjects completed already
    DONE,

    // Subjects ongoing
    ONGOING,
}

export const SelectableStates = {
    UNDEFINED: SubjectState.UNDEFINED,
    DONE: SubjectState.DONE,
    ONGOING: SubjectState.ONGOING,
}

export const stateColors: { [key in SubjectState]: StateStyles } = {
    [SubjectState.UNDEFINED]: {bgColor: '', fontColor: ''},
    [SubjectState.AVAILABLE]: {bgColor: 'white', fontColor: 'black'},
    [SubjectState.UNAVAILABLE]: {bgColor: 'red', fontColor: 'white'},
    [SubjectState.DONE]: {bgColor: 'green', fontColor: 'white'},
    [SubjectState.ONGOING]: {bgColor: 'blue', fontColor: 'white'},
}

const stateNames: { [key in SubjectState]: string } = {
    [SubjectState.UNDEFINED]: 'Pendente',
    [SubjectState.AVAILABLE]: 'Disponível',
    [SubjectState.UNAVAILABLE]: 'Indisponível',
    [SubjectState.DONE]: 'Concluído',
    [SubjectState.ONGOING]: 'Em andamento',
}

// Methods
export const getStateName = (state: SubjectState) => {
    return stateNames[state];
}