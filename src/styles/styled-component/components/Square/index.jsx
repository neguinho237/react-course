import { SquareContainer, SquareLink } from "./style";

  export default function Square (props){
    console.log(props.borderStyle)
      return(
        <SquareContainer  borderStyle = {props.borderStyle} colorC = {props.colorC}>
            <SquareLink 
            href="https://styled-components.com/" 
            target="_blank">
            {props.borderStyle ? props.borderStyle : "Adicione a prop no Square"}
                </SquareLink>
        </SquareContainer>
    );
}