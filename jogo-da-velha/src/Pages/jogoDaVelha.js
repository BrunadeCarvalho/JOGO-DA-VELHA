import {FaSlackHash} from 'react-icons/fa'
import { toast } from "react-toastify";
import { useState, useEffect } from "react"
import { BodyStyled, DivBase, DivHeader } from "./styled";
export const JogoDaVelha=()=>{

    const arr = Array(9).fill(" ");
    const [base, setBase] = useState(arr);
    const [player, setPlayer]=useState("O")
    const [winner, setWinner]=useState()

    const handleClick =(index)=>{
        if(winner){
            return null;
        }

        if(base[index] !== " "){
            return null
        }
        setBase(base.map((item, itemIndex)=> itemIndex === index ? player : item));

        setPlayer(player === "X" ? "O" : "X")

        if(base.filter((item)=>{
            return item === " "
        }).length < 2){
            setBase(arr)
        }
    }

    const reset = () =>{
        setPlayer("O");
        setBase(arr)
        setWinner(null)
    }

    const result=() =>{

        const optionsToWin = [
            [base[0], base[1], base[2]],
            [base[3], base[4], base[5]],
            [base[6], base[7], base[8]],

            [base[0], base[3], base[6]],
            [base[1], base[4], base[7]],
            [base[2], base[5], base[8]],

            [base[0], base[4], base[8]],
            [base[2], base[4], base[6]],

        ];
        
        optionsToWin.forEach(cells =>{
            if(cells.every(cell => cell === "O")){
                setWinner("O venceu")
                toast('🎉 Parabéns, o jogador "O" venceu', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }); 
                reset()
            }else if(cells.every(cell => cell === "X")){
                setWinner("X venceu")
                toast('🎉 Parabéns, o jogador "X" venceu', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                reset()
            }
        })
}

    useEffect(result, [base])


    return(
        <BodyStyled>
            <DivHeader>
                <p><FaSlackHash size="40px"/></p>
                <h1>Jogo da velha</h1>

            </DivHeader>

            <DivBase {...winner? "game-over" : ""}>
                {base.map((item, index)=>(
                    <div 
                        key={index} 
                        className={`cell ${item}`}
                        onClick={() => handleClick(index)}>
                        {item}
                    </div>
            ))}
            </DivBase>
        </BodyStyled>
    )
}