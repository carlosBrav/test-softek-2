import { Posts } from "../models/post-model";

export class PostsMapping {
  fromResponsePosts = (json: Record<string, unknown>): Posts => {
    const { body } = json as any;
    return Posts.fromJson(body);
  };
}
