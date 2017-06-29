/**
 * svgtoreact
 *
 * @author Michael Hsu
 */

import React from 'react';

export default function SVGMachine(props) {
  return (
    <svg width={167} height={20} viewBox="0 0 167 20" {...props}>
      <path
        d="M7.133 8.458c.755-.805 2.253-1.458 3.358-1.458h153.517c1.1 0 1.991.887 1.991 1.998v4.004c0 1.104-.888 1.998-1.997 1.998h-161.006c-1.103 0-1.383-.655-.63-1.458l4.766-5.084z"
        id="Rectangle-29"
        fill="#CBECF9"
      />
      <path
        d="M164.003 14c.554 0 .997-.444.997-.998v-4.004c0-.557-.441-.998-.991-.998h-153.517c-.827 0-2.061.537-2.629 1.142l-4.554 4.858h160.695zm-157.599-6.226c.945-1.008 2.707-1.774 4.088-1.774h153.517c1.655 0 2.991 1.337 2.991 2.998v4.004c0 1.657-1.337 2.998-2.997 2.998h-161.006c-1.979 0-2.712-1.7-1.36-3.142l4.766-5.084z"
        fill="#00A1DE"
      />
    </svg>
  );
}