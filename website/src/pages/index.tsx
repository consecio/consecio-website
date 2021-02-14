import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"

const foo = (x: number) => {
  return x + 1
}

const Home = () => {
  return <div className="container">Hello World year {foo(2000)}!</div>
}

export default Home

