import { ChildrenProp } from "../../types/Types";

const DisplayDataCardContainer = ({ children }: ChildrenProp) => {
  return <article className="flex flex-wrap gap-10 m-10">{children}</article>;
};

export default DisplayDataCardContainer;
