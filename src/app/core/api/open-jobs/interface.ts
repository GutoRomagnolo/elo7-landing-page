export interface OpenJobs {
  position: string;
  active: boolean;
  link: string;
  formatedLocation?: string;
  location: any | {
    neighborhood?: string
    city?: string
    country?: string
  };
}