import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { BodyStyled, DivBase } from "./styled"

export const JogoDaVelha=()=>{

    const arr = Array(9).fill(" ");

    const [base, setBase] = useState(arr);
    const [player, setPlayer]=useState("O")
    const [winner, setWinner]=useState()

    const handleClick =(index)=>{
        if(winner){
            toast.error('O jogo acabou!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return null;
        }

        if(base[index] !== " "){
            return null
        }
        setBase(base.map((item, itemIndex)=> itemIndex === index ? player : item));

        setPlayer(player === "X" ? "O" : "X")
    }

        const checkWinner=() =>{

            const possibleWaysToWin = [
                [base[0], base[1], base[2]],
                [base[3], base[4], base[5]],
                [base[6], base[7], base[8]],

                [base[0], base[3], base[6]],
                [base[1], base[4], base[7]],
                [base[2], base[5], base[8]],

                [base[0], base[4], base[8]],
                [base[2], base[4], base[6]],

            ];
            
            possibleWaysToWin.forEach(cells =>{
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
                }else{
/*                     toast.error('❌ Deu velha!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        }); */
                }
            })
    }

    useEffect(checkWinner, [base])


    return(
        <BodyStyled>
            <h1>Jogo da velha</h1>

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