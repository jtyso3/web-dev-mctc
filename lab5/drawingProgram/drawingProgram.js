
  let canvas = document.querySelector('#canvas')
  let context = canvas.getContext('2d')   //  Provides the context for canvas.

  let colorPicker = document.querySelector('#color')    //  Selects the color input
  let pointerSize = document.querySelector('#range')    //  Selects the range input

  // Keep track of whether the mouse button has been pressed down or not.
  // Think of this as whether the user is drawing or not, is their brush on the canvas?
  let mousedown = false

  canvas.addEventListener('mousedown', function() {
    mousedown = true
  })

  canvas.addEventListener('mouseup', function() {
    mousedown = false
  })

  // If mouse leaves the canvas then stop drawing
  canvas.addEventListener('mouseout', function() {
    mousedown = false
  })

  canvas.addEventListener('mousemove', function() {

    // If the mouse button is not pressed down, do not draw.
    if (!mousedown) { return }


    // event is a built-in variable, contains the event that triggered this function
    // get the x, y location of the event
    let x = event.offsetX;
    let y = event.offsetY;   //offsetX, offsetY, may not work in older browsers
    context.strokeStyle= colorPicker.value    //  Uses the value of the selected color from coor input

    //Draw a filled rectangle centered under the mouse click
    //x, y is the top left corner, so shift up and left by 5 to center it under the mouse.
    context.beginPath();
    context.arc(x, y, pointerSize.value , 0, 2 * Math.PI);    //  Uses the value of selected range input
    context.stroke();
  })
