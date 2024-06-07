import Cube from "./src/svg/cube.svg"

import * as S from "./style"

export default function DropdownMenu(props) {


    return (
        <S.Container>

        {
          props.pages && ( props.pages > props.pages?.length == 0 )
            
            ? 
        
            props.pages.map((pages, key) => {
                return (
                    <S.Content key={key}>
                        <S.Image src={Cube} />
                        <S.ContentText>
                            <S.Title>{pages.title}</S.Title>
                            <S.Description>{pages.description}</S.Description>
                        </S.ContentText>
                    </S.Content>
                )
            }) 
            :
            <p>Coloque um Array!!</p>

        }
        </S.Container>
    )
}