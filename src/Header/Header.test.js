import { Header } from "./Header";
import { render,screen } from '@testing-library/react'

describe('Header component tests',()=>{
    it("check header text",()=>{
        render(<Header></Header>)
       const eleRef=screen.getByTestId('header')
       expect(eleRef.textContent).toBe('My web page')
    })
    test("check header text length",()=>{
        render(<Header></Header>)
        const eleRef = screen.getByTestId('header')
        expect(eleRef.textContent).toHaveLength(11)
    })
})