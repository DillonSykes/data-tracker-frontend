export interface IPerson {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  smoker: boolean;
  smoker_amount?: string;
  health_concerns: string;
}
export class Person implements IPerson {
  public first_name: string;
  public last_name: string;
  public date_of_birth: string;
  public smoker: boolean;
  public smoker_amount?: string;
  public health_concerns: string;
  constructor() {}
}
