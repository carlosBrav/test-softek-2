import { HttpResponse } from "integration/infra/http/http-client";

export interface UsersProvider {
  getUserInfoProvider(): Promise<HttpResponse<Record<string, unknown>>>;
}
