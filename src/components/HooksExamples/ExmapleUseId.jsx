<<<<<<< Updated upstream
import React, {useId} from 'react';

export default function UseId() {
  const newid = useId();
  return (
    <div>
      <input id={`${newid}-email`} placeholder="Email"/>
      <input id={`${newid}-name`} placeholder="Name"/>
    </div>
  )
}
=======
import React, {useId} from 'react';

export default function UseId() {
  const newid = useId();
  return (
    <div>
      <input id={`${newid}-email`} placeholder="Email"/>
      <input id={`${newid}-name`} placeholder="Name"/>
    </div>
  )
}
>>>>>>> Stashed changes
