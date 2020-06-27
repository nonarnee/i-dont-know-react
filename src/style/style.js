import { css } from '@emotion/core';

export const spacing = {
  marginA(n) {
    return `margin:${n}px`;
  },
  marginX(n) {
    return `margin-left: ${n}px, margin-right: ${n}px`;
  },
  marginY(n) {
    return `margin-top: ${n}px, margin-bottom: ${n}px`;
  },
  paddingA(n) {
    return `padding: ${n}px`;
  },
  paddingX(n) {
    return `padding-left: ${n}px, padding-right: ${n}px`;
  },
  paddingY(n) {
    return `padding-top: ${n}px, padding-bottom: ${n}px`;
  },
};

export const colors = {
  Main2: '#325cbc',
  Main3: '#5ac7ff',
  Icon: '#677294',
  Text2: '#5e5e5e',
  Text3: '#b9b9b9',
  Background1: '#fafafc',
  PointSub: '#ff494a',
  Salmon: '#ff7070',
  Black: '#232323',
  CeruleanBlue: '#0077ed',
};
