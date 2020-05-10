import React from "react"

const AllowingCommunication = () => (
  <>
    <h2>Communication between Go routines via channels</h2>
    <p>
      We can prevent this from happening by implementing another feature Go has
      called <a>Channels</a>. You can think of a channel as a way of
      communicating between every single routine. Here we'll use a channel to
      make sure that the main routine waits until the child routines are done.
    </p>
  </>
)

export default AllowingCommunication
