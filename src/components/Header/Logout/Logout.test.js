import React, { useState } from "react"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { Logout } from "./Logout"
import { MemoryRouter } from "react-router-dom"
import { getCookie } from "../../../hooks/useCookie"

describe.only("<MobileHeader /> component", () => {
  let container
  beforeEach(() => {
    container = render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    )
  })

  it("should render the words Log Out on the screen", () => {
    const logoutText = container.getByText("Log Out")
    expect(logoutText).toBeInTheDocument()
  })

  it("should erase the gardenbuilder-jwt-cookie on click", async () => {
    // set token
    document.cookie =
      "gardenbuilder-jwt-token=abc123; expires=Thu, 18 Dec 2040 12:00:00 UTC"
    const logoutElement = container.getByText("Log Out")
    fireEvent.click(logoutElement)
    // await waitFor(() => expect(getCookie("gardenbuilder-jwt-token")).toBe(undefined))
    expect(getCookie("gardenbuilder-jwt-token")).toBe(undefined))
  })
})
