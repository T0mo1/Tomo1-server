export interface AgeRangeDefinition {
    id: string;
    label: string;
    minMonths: number;
    maxMonths: number; // Exlusive or inclusive? Usually ranges are like [0, 12), [12, 24)
    description?: string;
}

export const DENVER_AGE_RANGES: AgeRangeDefinition[] = [
    {
        id: 'early_infancy',
        label: 'Early Infancy',
        minMonths: 0,
        maxMonths: 12, // 0-12 months (up to 1st birthday)
    },
    {
        id: 'toddler',
        label: 'Toddler Stage',
        minMonths: 12,
        maxMonths: 24,
    },
    {
        id: 'early_preschool',
        label: 'Early Preschool',
        minMonths: 24,
        maxMonths: 36,
    },
    {
        id: 'preschool',
        label: 'Preschool',
        minMonths: 36,
        maxMonths: 48,
    },
    {
        id: 'late_preschool',
        label: 'Late Preschool',
        minMonths: 48,
        maxMonths: 60,
    },
    {
        id: 'pre_primary',
        label: 'Pre-Primary',
        minMonths: 60,
        maxMonths: 72, // Up to 6 years
    },
];

export const DENVER_EVALUATION_RULES = {
    PASS: 'D',
    FAIL: 'K',
};
