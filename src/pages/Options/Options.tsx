import React from 'react';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <div>{title} Options page</div>;
};

export default Options;
