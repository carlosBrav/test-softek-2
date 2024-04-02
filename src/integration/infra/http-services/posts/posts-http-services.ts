import {
  HttpClient,
  HttpMethod,
  HttpRequest,
} from "integration/infra/http/http-client";

/* import { AuthenticationProvider } from "../../../../domains/softtek/authentication/providers/authentication.provider"; */
import { PostsProvider } from "../../../../domains/darwin/posts/providers/posts-providers";

export class PostsHttpService implements PostsProvider {
  private readonly msAuth = "/posts";
  constructor(private _httpClient: HttpClient) {}

  getInfoPostsProviders(): Promise<any> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msAuth}`,
      method: HttpMethod.GET,
      body: {},
    };
    return this._httpClient.request(request) as any;
  }
}
