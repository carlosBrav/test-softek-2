import { usePosts } from "../../../../integration/main/hooks/posts/posts-get";
import { PostsRepository } from "../../../domains/darwin/posts/repositories/posts-repositories";

export function postsHooks(repository: PostsRepository) {
  const { data } = usePosts(repository);

  return {
    data,
  };
}
