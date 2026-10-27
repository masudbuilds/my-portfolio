export interface EducationItem {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  status: string;
}

export const EDUCATION_DATA: readonly EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA) Honours",
    fieldOfStudy: "Accounting",
    institution: "National University of Bangladesh",
    status: "Completed",
  },
] as const;
