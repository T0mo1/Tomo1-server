export const CLASSIFICATION = {
    MAM: 'Mầm',
    CHOI: 'Chồi',
    LA: 'Lá'
} as const;

export type ClassificationType = typeof CLASSIFICATION[keyof typeof CLASSIFICATION];


export const CLASSIFICATION_THRESHOLD_MONTHS = 2.5;
