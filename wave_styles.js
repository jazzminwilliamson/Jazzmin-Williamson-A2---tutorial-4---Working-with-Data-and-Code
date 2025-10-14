let showExtraWave = false; // Assignment Operator that decides whether to draw the extra (third) wave

//All p5Js (which is in javascript) starts with function set up, where canvas, text and colours are defined

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(14);
  fill(229, 153, 37); // text color
}

// 'Function' is key part of javascript syntax and can be used to call for events such as drawing or mouse actions
function draw() {
  background(162, 209, 240);
  
// Title text
textSize(30); 
textAlign(CENTER);
fill(229, 153, 37); // or pick a colour that stands out
text("Ocean Data Visualisation (2020–2025)", width / 2, 50); // centered at the top
textSize(14); // reset to your normal text size


// Legend
fill(0, 200, 300);
textAlign(LEFT, CENTER);
text("🌡️Ocean Temperature", 40, 90);
fill(41, 189, 214);
text("🌊 Wave Height", 40, 110);
fill (0, 30, 193);
text("🦠 Bacteria Levels", 40, 130);


// True/False conditions and mouse events - calling for an 'event' that occurs conditionally when mouse is pressed
  if (mouseIsPressed) {
    fill(41, 189, 214);
    
// Function 'waves' that also has an array of strings containing my text labels
    waves(0.2 * height, 10, ["2020 = 1.7 ft", "2021 = 2.2 ft", "2022 = 1.2 ft", "2023 = 1.7 ft", "2024 = 5.5 ft", "2025 = 3.4 ft"], 
    
    //Array of colours to match each of my text labels
    [color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3)]);

// else shows what happens when mouse is NOT pressed
  } else {
    fill(0, 200, 300);
    waves(0.7 * height, 55, ["2020 = 15º🌡️", "2021 = 17º🌡️", "2022 = 17º🌡️", "2023 = 16º🌡️", "2024 = 17º🌡️", "2025 = 17º🌡️"], 
    [color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3)]);
  }

  // Conditional Statement - calls for the third dataset - 'ocean temperature waves' to show ONLY if doubleClicked has been triggered
  if (showExtraWave) {
    fill(0, 30, 193);
    waves(0.6 * height, 40, ["2020 = 0🦠", "2021 = 0🦠", "2022 = 0🦠", "2023 = 2🦠", "2024 = 0🦠", "2025 = 2🦠"],
    [color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3)]);
  }
}

// If user 'double clicks' for a second time, the 'show extra wave' function is false, therefore it goes away

function doubleClicked() {
 
// Boolean Data Types --> '=!' is a comparison operator that returns true to false

  showExtraWave = !showExtraWave;
}

//Wave SHAPES are created using 'sine' formuala defined by 3 characteristics --> vertex (height or'h'), period (frequency or 'freq'), and amplitude
//amp = amplitude of a wave
//frame count = number of frames that occur from start of the sketch - gives animated effect when used inside 'sin' as it increases by 1 each time the draw function is called

function waves(h, freq, labels, colors) {
  let amp = 30 + 10 * sin(frameCount / (freq / 4 + 12));
  
  beginShape();
  vertex(0, height);
  for (let i = 0; i < width; i++) {
    vertex(i, h + amp * sin((i + frameCount) / freq));
  }
  vertex(width, height);
  endShape(CLOSE);

  // Position text labels on the wave using 'For' Loops
  // An array with two lists in order to define font colours and text content
  
  if (labels) {
    let labelSpacing = width / (labels.length + 1);
    for (let labelPoint = 0; labelPoint < labels.length; labelPoint++) {
      let x = labelSpacing * (labelPoint + 1);
      let y = h + amp * sin((x + frameCount) / freq);
  
// Assign colours to labels
fill(colors[labelPoint]);

// Aligning the text to each wave point
//Labels refers to the array of text that I have put my data into, and the 'y' is the vertical position of the wave and its correspondong label
// 'y - 20' offsets the text vertically  
      text(labels[labelPoint], x, y - 20); // -20 so it floats just above the wave
    }
  }
}
