import React from 'react';
import { css } from '@emotion/core';
import { colors, spacing } from '../style/style';

function Emotion() {
  return (
    <div>
      <div
        css={css`
          color:${colors.Text2},
          borderRadius:'12px',
          ${spacing.paddingX(10)},
          ${spacing.paddingY(3)},
        `}
      >
        divdivdiv
      </div>
    </div>
  );
}

export default Emotion;
