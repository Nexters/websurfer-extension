import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';

import { increment } from '../../redux/counterSlice';
import { RootState } from '../../redux/store';

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

  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <>
      <Message
        color="blue"
        //  onClick={() => dispatch(increment())}
      >
        {/* {'샤카샤카'.repeat(count)} */}
        샤카샤카 뉴탭
      </Message>
    </>
  );
};

export default Newtab;
