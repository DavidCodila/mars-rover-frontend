import App from "../App";
import {expect, test, describe, afterEach} from "bun:test"
import {cleanup, render, screen, waitFor} from '@testing-library/react'


describe('App', () => {
    afterEach(() => {
        cleanup()
    })

    test("Shows Mars Rover App", () => {

        render(
        <App />
        )
        expect(screen.findByText("Mars Rover App"))
    })
    test("Shows map size textbox, text exists test", () => {

        render(
        <App />
        )
        expect(screen.findByLabelText("Enter squares per side"))
    })
})


