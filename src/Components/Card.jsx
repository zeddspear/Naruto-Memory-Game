import React from 'react'



function Card({name,image,onClickDiv,id}) {


  return (
    <div className='Card' onClick={()=>onClickDiv(id)}>
    <div className='cardImgDiv'>
    <img className='cardImg' src={`src/assets/CardImgs/${image}`} alt='card img' />
    </div>
    <span>{name}</span>
    </div>
  )
}

export default Card
