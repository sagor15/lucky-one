import React from 'react';

const QoustionTwo = () => {
    return (
        <div>
            <h1>2. How useState Works</h1>
            <p>useState is a hook that allows us to have state variables in functional components. We can pass initial state to that function and can get returns value.
It generates a single piece of state associated with that component. The state in a class is always an object, with hooks, the state can be any type. We can declare state in react by writing- React.useState or import it.
Some important points to remember:
i) Update function doesn't update the value directly. ii) React won't trigger a re-render, if we use the same value as the current state. iii) useState doesn't marge objects when
 the state is updated. iv) It follows the same rules that all the hooks do.
  Please note that useState hook callback for updating the state behaves
   differently than components this.setState.</p>
        </div>
    );
};

export default QoustionTwo;