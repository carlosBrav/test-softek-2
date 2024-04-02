import { BaseModel } from "../../../model/base.model";
import { CompanyModel } from "./company-model";
import { AddressModel } from "./address-model";

export class User extends BaseModel {
  public id: number | null = null;
  public name: string = "";
  public username: string = "";
  public email: string = "";
  public address: AddressModel | null = null;
  public company: CompanyModel | null = null;
  public phone: string = "";
  public website: string = "";
}
