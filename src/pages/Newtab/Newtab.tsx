import React from 'react';
import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface DivStyleProps {
  color: string;
}

const Newtab = () => {
  const Message = styled.div((props: DivStyleProps) => [
    tw`
    md:w-1/3 md:flex-shrink-0 md:mt-10 md:mx-auto md:bg-pink-600 md:text-center md:text-white md:text-2xl md:py-4 md:rounded md:px-2
    `,
    css`
      position: relative;
      color: ${props.color};
    `,
  ]);

  return (
    <>
      <Message color="blue">샤카샤카 뉴탭</Message>
    </>
  );
};

export default Newtab;
