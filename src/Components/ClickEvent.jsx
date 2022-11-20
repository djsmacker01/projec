import React from "react";

function ClickEvent() {

  function handleSubmit(e) {
    e.preventDefault();
  console.log('button clicked');
}

  return (
    <form action="" onSubmit={handleSubmit}>
     <button type='submit'>submit</button>
    </form>
  )
}

export default ClickEvent;
