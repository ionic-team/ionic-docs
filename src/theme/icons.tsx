import React from 'react';

export function Moon(props) {
  return (
    <svg
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Moon icon"
      {...props}
    >
      <path
        d="M4.8 3.38c0-1.17.18-2.37.62-3.38A8.35 8.35 0 00.5 7.7 8.3 8.3 0 008.8 16a8.35 8.35 0 007.7-4.92c-1.02.44-2.2.61-3.38.61A8.3 8.3 0 014.8 3.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export const Sun = props => (
  <svg viewBox="0 0 16 16" fill="none" aria-label="Sun icon" {...props}>
    <path
      d="M8 1.5V3M8 13V14.5M3.40375 3.40375L4.46437 4.46438M11.5356 11.5356L12.5963 12.5962M1.5 8H3M13 8H14.5M3.40375 12.5962L4.46437 11.5356M11.5356 4.46438L12.5963 3.40375"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8C10.5 9.38071 9.38071 10.5 8 10.5Z"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);
