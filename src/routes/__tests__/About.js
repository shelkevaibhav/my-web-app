import {render,screen} from "@testing-library/react"
import { About } from "../About/About"
import { expect } from "playwright/test"

jest.mock("my-first-lib-vaibhavit",()=>{
    class Bus {
        fw = 2;
        bw = 4;
        totalWheels(){return 6 }
        getColour() {return 'red'}
    }
    return {
        name :'sachin',
        location : 'Mumbai',
        add : (x,y)=>{
            return 100;
        },
        Bus:Bus
    }
})

describe("About components",()=>{
    it("render correctly",async ()=>{
        render (<About/>)
        const eleRef = await screen.getByRole("heading" ,{name : "About"})
        expect(eleRef).toBeInTheDocument();
    })
    test("test add function",()=>{
        render(<About/>)
        const ref = screen.getByTestId('add')
        expect(ref.textContent).toBe("100")
    })
    test("test bus function",()=>{
        render(<About/>)
        const ref = screen.getByTestId('bus')
        expect(ref.textContent).toBe("2-4-6-red")
    })
    test("test location function",()=>{
        render(<About/>)
        const ref = screen.getByTestId('name')
        expect(ref.textContent).toBe("sachin----Mumbai")
    })
})