import React from "react"

const HowToMakeRoutine = () => (
  <>
    <h2>So, how do we create child routines?</h2>
    <p>
      Fortunately, this is very simple to do in Go. All we have to do use make
      use of the <strong>go</strong> keyword. What this does behind the scenes
      is that when the child routine that's created by using the{" "}
      <strong>go</strong> keyword goes to sleep, control flow is then passed
      back to the main routine, and goes back through the loop. When it gets to
      the http request again, it'll spawn a new child routine and keep doing so
      until there are no more links left.
    </p>
    <p>The syntax for implementing this is very straight forward as well:</p>
  </>
)

export default HowToMakeRoutine
