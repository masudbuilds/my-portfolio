export interface EducationItem {
  degree: string;
  fieldOfStudy: string;
}

export const EDUCATION_DATA: readonly EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    fieldOfStudy: "Accounting",
  },
] as const;
