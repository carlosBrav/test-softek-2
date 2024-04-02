import { UsersMapping } from "../mappings/users-mapping";
import { UsersProvider } from "../providers/users-provider";
import { UsersRepository } from "../repositories/user-repository";
import CustomError from "../../../error/custom-error";
import { from, map, catchError, firstValueFrom } from "rxjs";
import { User } from "../models/users-model";

export class UsersUseCase implements UsersRepository {
  constructor(
    private _postProvider: UsersProvider,
    private _authMapping: UsersMapping // eslint-disable-next-line no-empty-function
  ) {}

  getUserInfoRepository(): Promise<User> {
    const source$ = from(this._postProvider.getUserInfoProvider()).pipe(
      map(this._authMapping.fromResponseToUsers),
      catchError(CustomError.getError)
    );
    return firstValueFrom(source$);
  }
}
