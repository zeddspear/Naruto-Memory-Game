import React, { useEffect } from 'react'
import Header from './Header'
import Card from './Card'
import Data from './Data/Data'

function Game() {

  // shuffle array algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

shuffleArray(Data)

const [characterData,setCharacterData] = React.useState(() => Data);

const [score,setScore] = React.useState(0);

const [highestScore,setHighestScore] = React.useState(0);


// Shuffle arrayData on every click
useEffect(()=>{

  const tempArray = characterData;
  shuffleArray(tempArray)
  setCharacterData(tempArray);

},[characterData])


function onClickDiv(id){

  // check if div is clicked already
  const clickCheck = characterData.every((ele)=>{
    if(ele.id === id && ele.isClicked === true){
      return false;
    }else{
      return true;
    }
  })


  if(clickCheck){
    setCharacterData(prevElements =>{
      return prevElements.map(ele =>{
        return id === ele.id ?
              {...ele,isClicked:true}
              : ele
      })
    })
    setScore(() => score+1);
  }else{
    alert("You Lose!");
    setScore(0);
    setCharacterData(Data);
  }
 
}


// setting highScore
React.useEffect(()=>{

  if(score > highestScore){
    setHighestScore(score);
  }

},[score,highestScore])

const Cards = characterData.map((item) =>{
  return <Card 
              key={item.id}
              id={item.id}  
              name={item.name} 
              image={item.img} 
              onClickDiv={onClickDiv}
               />
})


  return (
    <div className='GameDiv'>
      <Header score={score} highestScore={highestScore}/>
      <div className='CardsDiv'>
        {Cards}
      </div>
    </div>
  )
}

export default Game
