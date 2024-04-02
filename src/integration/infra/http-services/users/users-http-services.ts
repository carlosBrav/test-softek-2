import {
  HttpClient,
  HttpMethod,
  HttpRequest,
} from "integration/infra/http/http-client";

/* import { AuthenticationProvider } from "../../../../domains/softtek/authentication/providers/authentication.provider"; */
import { UsersProvider } from "../../../../domains/darwin/users/providers/users-provider";

export class UsersHttpService implements UsersProvider {
  private readonly msAuth = "/users";
  constructor(private _httpClient: HttpClient) {}

  getUserInfoProvider(): Promise<any> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msAuth}`,
      method: HttpMethod.GET,
      body: {},
    };
    return this._httpClient.request(request) as any;
  }
}
