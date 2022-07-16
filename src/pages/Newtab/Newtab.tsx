import React from 'react';
// import { css } from '@emotion/react';
// import tw, { styled } from 'twin.macro';
import styled from '@emotion/styled';

interface DivStyleProps {
  color: string;
}

const Newtab = () => {
  // const Message = styled.div(({ color }) => [
  //   tw`
  //   md:w-1/3 md:flex-shrink-0 md:mt-10 md:mx-auto md:bg-pink-600 md:text-center md:text-white md:text-2xl md:py-4 md:rounded
  //   `,
  //   css`
  //     position: relative;
  //     color: ${color};
  //   `,
  // ]);

  // return <Message color="blue">New tab</Message>;

  const DivStyle = styled.div<DivStyleProps>`
    background-color: ${(props) => props.color};
    font-size: 24px;
    border-radius: 4px;
    padding: 32px;
    text-align: center;
    &:hover {
      color: white;
    }
  `;

  return <DivStyle color="hotpink">샤카샤카!</DivStyle>;
};

export default Newtab;
