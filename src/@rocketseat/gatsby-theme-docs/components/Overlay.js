/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

export default function Overlay({ isMenuOpen, ...rest }) {
  return (
    <div
      css={css`
        ::after {
          content: '';
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(180, 180, 180, 0.4);
          z-index: 999;
          display: ${isMenuOpen ? `block` : `none`};
        }
      `}
      aria-label="Close menu"
      {...rest}
    />
  );
}

Overlay.propTypes = {
  isMenuOpen: PropTypes.bool,
};

Overlay.defaultProps = {
  isMenuOpen: false,
};
