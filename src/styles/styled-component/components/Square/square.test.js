import React from "react";
import { render } from "@testing-library/react";
import Square from ".";

describe('vou realizar alguns testes com o square',() => {

    it('verifica se o width do square tem 100px', () => {
        const element = render (<Square />)

        expect (element).toHaveStyle('width:  ')
    }

    )


})