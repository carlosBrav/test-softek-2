import React from "react";
import Layout from "design/layout/index";
import { UsersRepository } from "../../../domains/darwin/users/repositories/user-repository";
import { usersHooks } from "./hooks/users-hook";

interface Props {
  repository: UsersRepository;
}

const UsersComponent: React.FC<Props> = (props: Props) => {
  const { repository } = props;
  const { data } = usersHooks(repository);
  console.log("data ", data);
  return (
    <Layout>
      <div className="flex flex-col w-full"></div>
    </Layout>
  );
};

export default UsersComponent;
