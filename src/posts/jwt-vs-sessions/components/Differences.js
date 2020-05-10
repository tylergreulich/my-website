import * as React from 'react'

const Differences = () => (
  <>
    <h2>Why do we need sessions or tokens for auth?</h2>
    <p>
      HTTP is stateless, which means every request is stateless. However, there
      are situations where you'd like your states to be remembered. As an
      example, say you are logging in to a website like Twitter, if there was no
      way to persist and store the data you entered, then it wouldn't actually
      sign you in. It might give you an indicator on the UI that you've been
      signed in, but this would not be the case.
    </p>
    <p>
      This is where the use of sessions and tokens come in. Let's talk a bit
      more about each in further detail, followed by a diagram of how the two
      work behind the scenes.
    </p>
  </>
)

export default Differences
