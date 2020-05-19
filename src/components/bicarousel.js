import React, { useState } from 'react';
import './directionButton.css'

function BiCarousel(props) {
    const [images, setImages] = useState(props.images?props.images:[]);
    const [margin,setMargin] = useState(0);
    const [array,setArray]=useState(props.images?[props.images[0]]:[])
    const [index,setIndex]=useState(0)
    const [trans,setTrans]=useState("all 0.5s")
    const [pause,setPause]=useState(false)
    const updateRight = () =>{
        if(pause===false){

            if(index<images.length-1){
                setTrans(prev=>"all 0.5s")
                setPause(prev=>true)
                let i=index;
                setArray(prev=>[images[index],images[index+1]])
                console.log('update index',index)
                setIndex(prev=>index+1)
                setMargin(prev=>1)
                setTimeout(function(){setRight(i+1)},500);
                
            }
            else{
                setPause(prev=>true)
                setTrans(prev=>"all 0.5s")
                let i=index;
                setArray(prev=>[images[index],images[0]])
                console.log('update index',index)
                setIndex(prev=>0)
                setMargin(prev=>1)
                setTimeout(function(){setRight(0)},500);
            }
        }
    }
    const setRight = (index) =>{
        setTrans(prev=>'all 0s')
        console.log('setRight index',index)
        setArray(orev=>[images[index]])
        setMargin(prev=>0)
        setPause(prev=>false)
    }



    const updateLeft = () =>{
        if(pause===false){

            if(index>0){
                setPause(prev=>true)
                setTrans(prev=>"all 0s")
                let i=index;
                setArray(prev=>[images[index-1],images[index]])
                console.log('update index',index)
                setIndex(prev=>prev-1)
                setMargin(prev=>1)
                setTimeout(function(){setLeft(i-1)},0);
                
            }
            else{
                setTrans(prev=>"all 0s")
                setPause(prev=>true)
                let i=index;
                setArray(prev=>[images[images.length-1],images[index]])
                console.log('update index',index)
                setIndex(prev=>images.length-1)
                setMargin(prev=>1)
                setTimeout(function(){setLeft(images.length-1)},0);
            }
        }
    }
    const setLeft = (index) =>{
        setTrans(prev=>'all 0.5s')
        console.log('setRight index',index)
        setMargin(prev=>0)
        setTimeout(function(){setArray(orev=>[images[index]])
            setPause(prev=>false)},500);
    }
    const values =  array.map((image) =>
    <img style={{minWidth:'100%'}} src={image}></img>);
  return (
            <div style={{position:'relative',width:'100%',height:'100%',display:'flex',overflow:'hidden'}}>
                 <div style={{width:'100%',height:'100%',display:'flex',marginLeft:100*-margin+'%',transition:trans}}>
                    {values}
                </div>
                <a onClick={e=>{updateLeft()}} className='prev'>&#10094;</a>
                <a onClick={e=>{updateRight()}} className='next'>&#10095;</a>
            </div>
  );
}

export default BiCarousel;
