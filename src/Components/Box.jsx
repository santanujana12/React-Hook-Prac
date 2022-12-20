import React, {useState} from 'react';
import Color from './Color';
import '../style.css';

const Box = () =>{
  const [uiColor,setUiColor] = useState(null);

  const getColor = (color)=>{
    setUiColor(color);
  }

  return (
    <div>
      <div className="box" style={{background:`${uiColor}`}} />
      <Color getColor = {getColor}/>
    </div>
  );
}

export default Box;