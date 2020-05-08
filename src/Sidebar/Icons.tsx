import React, { HTMLAttributes } from 'react';

export const File = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="path-2-inside-1" fill="white">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.5 2C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2H2.5ZM9 10H5V11H9V10ZM5 8H11V9H5V8ZM9 6H5V7H9V6Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 2C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2H2.5ZM9 10H5V11H9V10ZM5 8H11V9H5V8ZM9 6H5V7H9V6Z"
      fill="#757F88"
    />
    <path
      d="M5 10V9H4V10H5ZM9 10H10V9H9V10ZM5 11H4V12H5V11ZM9 11V12H10V11H9ZM11 8H12V7H11V8ZM5 8V7H4V8H5ZM11 9V10H12V9H11ZM5 9H4V10H5V9ZM5 6V5H4V6H5ZM9 6H10V5H9V6ZM5 7H4V8H5V7ZM9 7V8H10V7H9ZM3 2.5C3 2.77614 2.77614 3 2.5 3V1C1.67157 1 1 1.67157 1 2.5H3ZM3 13.5V2.5H1V13.5H3ZM2.5 13C2.77614 13 3 13.2239 3 13.5H1C1 14.3284 1.67157 15 2.5 15V13ZM13.5 13H2.5V15H13.5V13ZM13 13.5C13 13.2239 13.2239 13 13.5 13V15C14.3284 15 15 14.3284 15 13.5H13ZM13 2.5V13.5H15V2.5H13ZM13.5 3C13.2239 3 13 2.77614 13 2.5H15C15 1.67157 14.3284 1 13.5 1V3ZM2.5 3H13.5V1H2.5V3ZM5 11H9V9H5V11ZM6 11V10H4V11H6ZM9 10H5V12H9V10ZM8 10V11H10V10H8ZM11 7H5V9H11V7ZM12 9V8H10V9H12ZM5 10H11V8H5V10ZM4 8V9H6V8H4ZM5 7H9V5H5V7ZM6 7V6H4V7H6ZM9 6H5V8H9V6ZM8 6V7H10V6H8Z"
      fill="#757F88"
      mask="url(#path-2-inside-1)"
    />
  </svg>
);

export const Folder = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.98881 5.0109L7.98395 5.01562H8H13.5C13.7679 5.01562 13.9844 5.23207 13.9844 5.5V12.5C13.9844 12.7679 13.7679 12.9844 13.5 12.9844H2.5C2.23207 12.9844 2.01562 12.7679 2.01562 12.5V3.5C2.01562 3.23207 2.23207 3.01562 2.5 3.01562H5.99993C6.02781 3.01588 6.05459 3.02655 6.075 3.04554L7.98881 5.0109Z"
      fill="#757F88"
      stroke="#757F88"
      stroke-width="0.03125"
    />
  </svg>
);

export const Chevron = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="7"
    height="4"
    viewBox="0 0 7 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 1L3.5 3.5L1 1"
      stroke="#757F88"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
