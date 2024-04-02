import { HttpResponse } from "integration/infra/http/http-client";

export interface PostsProvider {
  getInfoPostsProviders(): Promise<HttpResponse<Record<string, unknown>>>;
}
