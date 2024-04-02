import { User } from "../models/users-model";

export class UsersMapping {
  fromResponseToUsers = (json: Record<string, unknown>): User => {
    const { body } = json as any;
    return User.fromJson(body);
  };
}
