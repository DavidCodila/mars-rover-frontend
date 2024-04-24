import App from "../App";
import {expect, test, describe, afterEach} from "bun:test"
import {cleanup, render, screen, waitFor} from '@testing-library/react'
import userEvent from "@testing-library/user-event"

describe('App', () => {
    afterEach(() => {
        cleanup()
    })

    test("Shows Mars Rover App", () => {
        render(<App />)
        expect(screen.findByText("Mars Rover App"))
    })
    
    test("Submit input", async () => {
        render(<App />)
        await userEvent.type(screen.getByLabelText("Enter squares per side"),"1")
        await userEvent.click(screen.getByRole("button",{name: "Start Game!"}))

        await waitFor(() => {
            //need to add mock function
        })
    })
})


