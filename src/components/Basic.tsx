import React from 'react';

interface ColorProps {
  color: string;
}
const Basic = ({ color }: ColorProps): JSX.Element => {
  return <h1>Basic file, {color}</h1>;
};

export default Basic;
