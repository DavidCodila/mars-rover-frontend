import App from "../App";
import {expect, test, describe, afterEach} from "bun:test"
import {cleanup, render, screen, waitFor} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom";


describe('App', () => {
    afterEach(() => {
        cleanup()
    })

    test("Shows Mars Rover App", () => {

        render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
        )
        expect(screen.findByText("Mars Rover App"))
    })
    test("Shows map size textbox, text exists test", () => {

        render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
        )
        expect(screen.findByLabelText("Enter squares per side"))
    })
    
    test("Submit input", async () => {
        render(
            <MemoryRouter initialEntries={['/game-page']}>
                <App />
            </MemoryRouter>
            )
        const input = screen.getByLabelText("Enter squares per side");
        userEvent.type(input, "10");
        await userEvent.type(screen.getByLabelText("Enter squares per side"),"1")
        //await userEvent.click(screen.getByRole("button",{name: "Start Game!"}))

        await waitFor(() => {
            //need to add mock function
        })
    })
})


