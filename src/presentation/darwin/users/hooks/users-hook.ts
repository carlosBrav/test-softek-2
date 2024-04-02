import { useUsers } from "../../../../integration/main/hooks/users/users-get";
import { UsersRepository } from "../../../../domains/darwin/users/repositories/user-repository";

export function usersHooks(repository: UsersRepository) {
  const { data } = useUsers(repository);

  return {
    data,
  };
}
