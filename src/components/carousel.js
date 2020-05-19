import React, { useState } from 'react';
import './directionButton.css'

function Carousel(props) {
    const [images, setImages] = useState(props.images?props.images:[]);
    const [margin,setMargin] = useState(0);
    const updateRight = () =>{
        setMargin(prev=>{
            if((prev+1)<images.length) return prev+1
            else return 0;
        })
    }
    const updateLeft = () =>{
        setMargin(prev=>{
            if((prev-1)<0) return images.length-1
            else return (prev-1);
        })
    }
    const values =  images.map((image) =>
    <img style={{minWidth:'100%'}} src={image} alt="slide"></img>);
  return (
            <div style={{position:'relative',width:'100%',height:'100%',display:'flex',overflow:'hidden'}}>
                 <div style={{width:'100%',height:'100%',display:'flex',marginLeft:100*-margin+'%',transition:"all 0.5s ease 0.05s"}}>
                    {values}
                </div>
                <a onClick={e=>{updateLeft()}} className='prev'>&#10094;</a>
                <a onClick={e=>{updateRight()}} className='next'>&#10095;</a>
            </div>
  );
}

export default Carousel;
