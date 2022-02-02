import React, {useCallback, useState} from 'react';
import Photo from './Photo';
import random from 'random-string-generator';
import arrayShuffle from 'array-shuffle';


function Level({level, incrementScore, lostGame}) {
    const [seed,setSeed] = useState(() => {
        const seed = []
        for(let i = 0; i < ( level + 2 ); i++){
            seed.push({seed: random(8,'lower'), clicked:false})
        }
        return seed
    })
    const handleClick = useCallback(
        (arg) => {
            const current = seed.filter(i => i.seed === arg)[0]
            if(!current.clicked){
                incrementScore()
                setSeed(prevState => {
                    const newState = arrayShuffle(prevState.map(i => {
                        if(i.seed === arg){
                            return {
                                seed: arg,
                                clicked: true
                            }
                        }
                        return i
                    }))
                    return newState
                })
            }else{
                lostGame()
            }
        }
    ,[seed,incrementScore,lostGame])

    return (
    <div className='bg-black text-white w-screen min-h-screen flex flex-col justify-center items-center'>
        <p className='my-8'>Current Level {level}</p>
        <div className='flex justify-center items-start gap-4 flex-wrap m-8 content-center'>
        {seed.map(i => <Photo data={i} key={i.seed} handleClick={handleClick}/>)}
        </div>
    </div>
    )
    }
export default Level;
