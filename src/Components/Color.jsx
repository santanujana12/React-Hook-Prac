import React, {useState} from 'react';

const Color = ({getColor}) =>{
  const [color,setColor] = useState(null);

  const handleChange = (e) => {
    setColor(e.target.value);
    getColor(e.target.value);
  }

  return (
    <>
      <input type="text" value={color} onChange={handleChange}/>
    </>
  );
}

export default Color;