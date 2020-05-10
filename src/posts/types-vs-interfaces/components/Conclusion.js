import * as React from 'react';

const Conclusion = () => (
  <>
    <h2>Conclusion</h2>
    <p>
      In this article we covered the minor differences between types aliases and
      interfaces and came to the conclusion that there are times where you
      should be using one over the other.
    </p>

    <div>
      <h4
        style={{
          marginBottom: '2rem'
        }}
      >
        Recap
      </h4>
      <ul style={{ marginLeft: '2rem', lineHeight: '150%', fontSize: '1rem' }}>
        <li>
          Type aliases can act like interfaces, however, there are three
          important distinctions (union types, extending interfaces, declaration
          merging)
        </li>
        <li>Use whichever you prefer, just be consistent.</li>
        <li>
          Always use interfaces for defining public API's when authoring a
          library or 3rd party type definitions.
        </li>
      </ul>
    </div>
  </>
);

export default Conclusion;
