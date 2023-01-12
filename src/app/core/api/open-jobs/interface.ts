export interface OpenJobs {
  position?: string;
  active?: boolean;
  link?: string;
  location?: {
    neighborhood: string
    city: string
    country: string
  };
}