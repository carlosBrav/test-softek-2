import { BaseModel } from "../../../model/base.model";

export class Posts extends BaseModel {
  public userId: number | null = null;
  public id: number | null = null;
  public title: string = "";
  public body: string = "";
}
