import { PostsMapping } from "../mappings/posts-mapping";
import { Authentication } from "../models/authentication.model";
import { PostsProvider } from "../providers/posts-providers";
import { PostsRepository } from "../repositories/posts-repositories";
import CustomError from "../../../error/custom-error";
import { from, map, catchError, firstValueFrom } from "rxjs";
import { Posts } from "../models/post-model";

export class PostsCase implements PostsRepository {
  constructor(
    private _postProvider: PostsProvider,
    private _authMapping: PostsMapping // eslint-disable-next-line no-empty-function
  ) {}

  getInfoPostsRepository(): Promise<Posts> {
    const source$ = from(this._postProvider.getInfoPostsProviders()).pipe(
      map(this._authMapping.fromResponsePosts),
      catchError(CustomError.getError)
    );
    return firstValueFrom(source$);
  }

  /* getAuthentication(): Promise<Authentication> {
    const source$ = from(this._postProvider.getAuthentication()).pipe(
      map(this._authMapping.fromResponseToAuth),
      catchError(CustomError.getError)
    );
    return firstValueFrom(source$);
  } */
}
