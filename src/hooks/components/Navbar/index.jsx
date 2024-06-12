import { useState } from "react"
import * as S from "./style"
import DropdownMenu from "../DropdownMenu" 
import {Link} from "react-router-dom";

  export default function Navbar (){
    
    const [open, setOpen] = useState(false)

     // Arrow function
     const handleMenu = () => {
        return setOpen(!open)
      }

    const ListPages = [
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
    ]

    return(
        <S.Container>
            <S.Logo>Logo</S.Logo>
            <S.Nav>
                <S.Link>
                    <Link to = "/teams"> Teams</Link>
                </S.Link>
                <S.Link>link two</S.Link>
                <S.Link>link three</S.Link>
                <S.Link onClick={handleMenu}>Link four</S.Link>
                {
                    open && <DropdownMenu pages = {ListPages}/>
                }
               <S.ContainerButton>
               <S.Button>Button</S.Button>
               <S.Button bgColor ="black" >Button</S.Button>
               </S.ContainerButton>
            </S.Nav>
        </S.Container>
    )
}