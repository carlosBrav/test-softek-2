import { UsersUseCase } from "../../../../domains/darwin/users/use-case/user-use-case";
import { UsersMapping } from "../../../../domains/darwin/users/mappings/users-mapping";
import { UsersHttpService } from "../../../infra/http-services/users/users-http-services";
import { httpClient } from "../http/http-factory";

export const UsersFactory: UsersUseCase = new UsersUseCase(
  new UsersHttpService(httpClient),
  new UsersMapping()
);
