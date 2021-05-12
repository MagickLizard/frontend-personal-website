import React from 'react';
import styled, { css } from 'styled-components';

const CircleStyled = styled.div(
  ({ size  }) => css`
  padding-top: 16px;
  padding-bottom: 24px;
  width: ${size ? '700px' : '200px'};
  height: ${size ? '700px' : '200px'};
  border-radius: ${size ? '400px' : '200px'};
  background-image: linear-gradient(#fffcec, rgb(224, 213, 248)) !important;
	box-shadow: 0 1px 1px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 1%);
  `
);

const SmallCircle = styled.div(
  ({ size  }) => css`
  padding-top: 16px;
  padding-bottom: 24px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-image: linear-gradient(#fffcec, rgb(224, 213, 248)) !important;
	box-shadow: 0 1px 1px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 1%);
  transform: rotate(90deg);
  `
);

const Circle = ({size}) => {
return (
  <div className={size ? 'column-is-three-quarters': 'column'}>
    {size === 'small' ? <SmallCircle/> : <CircleStyled size={size}/>}
  </div>
  )
}

export default Circle;