import { PostsRepository } from "../../../../domains/darwin/posts/repositories/posts-repositories";
import { useQuery } from "react-query";

export const usePosts = (repository: PostsRepository) => {
  const result = useQuery(
    "postsGet",
    () => repository.getInfoPostsRepository(),
    {}
  );
  return result;
};
