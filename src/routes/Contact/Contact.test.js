import { Accordian, NitList } from "my-first-lib-vaibhavit";
import { Contact } from "./Contact";
import { render,screen,within } from "@testing-library/react";

jest.mock("my-first-lib-vaibhavit",()=>({
    __esModule: true,
    default : ({ths,tds,data}) =>{
        return<table>
            <tr>
                {
                    ths.map((val,ind)=>{
                        return<th key = {ind}>{val}</th>
                    })
                }
            </tr>
                 {
                    data.map((obj,index)=>{
                        return<tr key={index}>
                            {
                                tds.map((val,ind)=>{
                                    return<td key={ind}>{obj[val]}</td>
                                })
                            }
                        </tr>
                    })
                }
        </table>
        
    },
    Accordian : () =>{
        return<div>Accordian</div>
    },
    NitList : () =>{
        return<div>NitList</div>
    }
}))
   

describe("contact component ",()=>{
    it("render correctly", async ()=>{
        render(<Contact/>)
        expect( await screen.getByRole("heading")).toBeInTheDocument();
    })
    it("table loading",async()=>{
        render(<Contact/>)
        expect( await screen.getByRole("table")).toBeInTheDocument();
        expect( await screen.findAllByRole("columnheader")).toHaveLength(2);
        expect( await screen.findAllByRole("row")).toHaveLength(3);
        const rows = await screen.findAllByRole('row')
        const cells= await within(rows[1]).getAllByRole('cell')
        expect(cells).toHaveLength(2)
        expect(cells[0].textContent).toBe("s1")
    })  
    it('Accordian loading', async () => {
        render(<Contact/>)
        expect( await screen.getByText("Accordian")).toBeInTheDocument();
    })
     it('NitList loading', async () => {
        render(<Contact/>)
        expect( await screen.getByText("NitList")).toBeInTheDocument();
     })
})



