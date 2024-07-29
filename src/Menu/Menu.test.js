import {render,screen} from '@testing-library/react'
import { Menu } from './Menu'
import { expect } from 'playwright/test'

describe('Menu components tests',()=>{
    it('render correctly ',async ()=>{
        render(<Menu menuItems={[]}/>)
        const ulRef = await screen.getByTestId('menu')
        expect(ulRef).toBeInTheDocument()
    })
    it('it render with props',async()=>{
        render(<Menu menuItems={[
            {
                id:'home',
                path:'home',
                text:'Home'
              }
        ]}/>)
        const listItems = await screen.getAllByRole("listitem")
        expect(listItems).toHaveLength(1)
        expect(listItems[0].textContent).toBe("Home")
    })
})