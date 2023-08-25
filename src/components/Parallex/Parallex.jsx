import React from 'react'
import { BsBorder } from 'react-icons/bs'


function Parallex(props) {
  return (
    <div className="parallax" style={{
      backgroundImage: `url(${props.back})`,
      height: '100%',
      width:'100%',
      padding:'0px',
      margin:"0px",
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
    }}>
      <div style={{ height: 600,margin:0,padding:0 }}></div>
    </div>
  )
}

export default Parallex