import React from 'react';
import { css } from '@emotion/core';

export default {
  title: 'Badge',
  component: Button,
};

export const BadgeEllipse = (bgColor, color) => (
  <div css={`css
    text-align: center;      
    padding: 10px 3px;
    backgroundColor: ${bgColor};
    color: ${color};
  `}
  />
);
