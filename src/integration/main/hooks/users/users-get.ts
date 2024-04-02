import { UsersRepository } from "../../../../domains/darwin/users/repositories/user-repository";
import { useQuery } from "react-query";

export const useUsers = (repository: UsersRepository) => {
  const result = useQuery(
    "usersGet",
    () => repository.getUserInfoRepository(),
    {}
  );
  return result;
};
