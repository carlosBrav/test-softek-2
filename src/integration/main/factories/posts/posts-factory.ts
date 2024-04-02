import { PostsCase } from "../../../../domains/darwin/posts/use-case/posts-use-case";
import { PostsMapping } from "../../../../domains/darwin/posts/mappings/posts-mapping";
import { PostsHttpService } from "../../../infra/http-services/posts/posts-http-services";
import { httpClient } from "../http/http-factory";

export const PostsFactory: PostsCase = new PostsCase(
  new PostsHttpService(httpClient),
  new PostsMapping()
);
