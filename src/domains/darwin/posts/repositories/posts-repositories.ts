/* eslint-disable prettier/prettier */

import { Posts } from "../models/post-model";

export interface PostsRepository {
  getInfoPostsRepository(): Promise<Posts>;
}
