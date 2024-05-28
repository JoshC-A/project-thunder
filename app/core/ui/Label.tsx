import React, { createElement } from "react";
import classNames from "clsx";

type Props = React.LabelHTMLAttributes<unknown> & {
  as?: string;
};

const Label = ({ children, className, as, ...props }: Props) => {
  const tag = as ?? `label`;

  return createElement(
    tag,
    {
      className: classNames(
        `w-full text-sm font-medium text-gray-500 dark:text-gray-400 [&>*]:mt-[0.35rem]`,
        className
      ),
      ...props,
    },
    children
  );
};

export default Label;
