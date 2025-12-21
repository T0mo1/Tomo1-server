export class ImportCsvResultDto {
    success!: boolean;
    imported!: number;
    failed!: number;
    errors!: string[];
}

export class QueryDenverQuestionsDto {
    ageMonths?: number;
    category?: 'receptive' | 'expressive';
    type?: 'yes-no' | 'multiple';
}