import React from "react";
import Layout from "design/layout/index";
import { PostsRepository } from "../../../domains/darwin/posts/repositories/posts-repositories";
import { postsHooks } from "./hooks/posts-hooks";

interface Props {
  repository: PostsRepository;
}

const PostComponent: React.FC<Props> = (props: Props) => {
  const { repository } = props;
  const { data } = postsHooks(repository);
  console.log("data ", data);
  return (
    <Layout>
      <div className="flex flex-col w-full"></div>
    </Layout>
  );
};

export default PostComponent;
