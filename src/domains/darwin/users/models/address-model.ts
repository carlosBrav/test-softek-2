import { BaseModel } from "../../../model/base.model";
import { GeoModel } from "./geo-model";

export class AddressModel extends BaseModel {
  public street: string = "";
  public suite: string = "";
  public city: string = "";
  public zipcode: string = "";
  public geo: GeoModel | null = null;
}
