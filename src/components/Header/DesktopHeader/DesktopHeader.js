import React from "react"
import { Navbar } from "./Navbar"
import Profile from "./Profile"

export const DesktopHeader = function () {
  return (
    <>
      <h1>GardenBuilder</h1>
      <Profile />
      <Navbar />
    </>
  )
}
