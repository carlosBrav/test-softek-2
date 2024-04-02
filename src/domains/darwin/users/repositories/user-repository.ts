/* eslint-disable prettier/prettier */

import { User } from "../models/users-model";

export interface UsersRepository {
  getUserInfoRepository(): Promise<User>;
}
