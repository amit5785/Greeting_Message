import React from 'react';
function Card(props)
{
  return(
    <>
    <div className="main">
      <p id="para">Hello Sir,<span style={props.stylegiven}>{props.msg}</span></p>
    </div>
    </>
  );
}
export default Card;