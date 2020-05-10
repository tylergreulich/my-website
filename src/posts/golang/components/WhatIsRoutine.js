import React from "react"

const WhatIsRoutine = () => (
  <>
    <h2>But wait, what the heck is a routine?</h2>
    <p>
      When we execute a program in Go, we automatically create one Go routine.
      You can think of a routine as something that exists inside of the program;
      It executes each line one by one. But let's say we don't want this kind of
      behavior in our application, that's where we can instantiate new routines,
      otherwise known as child routines.
    </p>
    <p>
      If you're familiar with Nodejs, creating new routines is essentially the
      same thing as using async / await in Node. Conceptually, both allow you to
      execute your code asynchronously without having to start any new threads.
    </p>
    <p>Let's look at an example:</p>
  </>
)

export default WhatIsRoutine
