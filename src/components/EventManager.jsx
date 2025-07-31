import React from 'react'

function EventManager() {
    function handleClick() {
        alert("Button clicked!")
    };

    function handleChange(event) {
        console.log("Typed: ", event.target.value);
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>

        <br/>
        <input type="text" onChange={handleChange} placeholder='Type here...' />
    </div>
  )
}

export default EventManager