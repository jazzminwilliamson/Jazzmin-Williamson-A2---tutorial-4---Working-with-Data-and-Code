# The Ocean Remembers - Artistic Coding Project by Jazzmin Williamson - tutorial-6

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage) 
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)

## General info

This project 'The Ocean Remembers', is an artistic and interactive data visualisation of changing ocean conditions over time. It has been coded on processing, using javascript in the p5.js mode.

Simple, dynamic wave imagery represents selected data from Sydney's oceans over the last 5 years, taken from a singular month - September.

The use of creative code unites art, data and nature to form a project that is relevant to both Australian culture and the natural environment, whilst also demonstrating my development in coding skills. 

## Technologies

Project is created with:
* Processing version: 4.4.8
* Mode: p5.js by Fathom Information Design

## Setup

To run this prototype, install Processing, download the zip and open the file.

Once the file has been opened on processing, ensure you have downloaded and selected 'p5.js' from the 'Mode' dropdown in the top right-hand corner.

Then, press the 'play' symbol on the top left-hand corner to run the code in your browser.

If you don't want to download Processing, you can access the prototype through the p5.js website. 

Simply paste the link into your browser to view the prototype and corresponding code.

## Usage

Open the sketch in the p5.js web browser: [[[https://editor.p5js.org/](https://editor.p5js.org/jazz3willo/sketches/qkKnaNYJK)](https://editor.p5js.org/jazz3willo/full/CX_RDsPr5)
](https://editor.p5js.org/jazz3willo/sketches/CX_RDsPr5)

Interact with the data visualisation:
- Click and hold your mouse to view wave height data for each year.
- Release the mouse to switch to ocean temperature data.
- Double-click anywhere on the canvas to view the bacteria levels on a different wave visual.

Read Labels:
- Each wave point has text labels to show the average data value for each year, with a corresponding emoji 
- Colours also correspond to the data points and the legend.

Refer to Legend:
- The small box on the left offers colour-coded labels to clarify each data set
- It also provides simple instructions for interaction
  
Code Example:

// View 'wave height' when mouse is pressed

	if (mouseIsPressed) {fill(41, 189, 214);
    
// Function 'waves' that also has an array of strings containing my text labels
 
	waves(0.2 * height, 10, ["2020 = 1.7 ft", "2021 = 2.2 ft", "2022 = 1.2 ft", "2023 = 1.7 ft", "2024 = 5.5 ft", "2025 = 3.4 ft"],
	[color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3), color(255, 146, 3)]);

## Project Status

This project is complete for the purpose of the Working with Data and Code Assignment 2, as it achieves its goal of being an artistic, dynamic and interactive data visualisation of the ocean. 

However, in the future, I would like to learn how to integrate live ocean data into the project, rather than having to use historical, pre-recorded data.

## Room for Improvement

Beyond trying to include live ocean information, this project could also be improved by widening the scope of data from 5 years to 10 years. 

- TO DO: Create more wave points and smaller text labels

Other areas for development would be finding new and different modes of interaction for users. 

- TO DO: Create more mouse events, or other events, using conditionals and operaters

Additionally, the data used in this visualisation is not completely accurrate due to limited availability of information. Therefore, this prototype would be stronger if the data was more reliable and accurate. 

- TO DO: Base future data visualisations on easily accessible information

## Acknowledgements

This project was inspired by:

- Rake. (2022). Ocean Feelings [Processing p5.js sketch]. Open Processing Creative Commons Attribution. https://openprocessing.org/sketch/1750070
- Allison Gowern. (2024). Ocean [Processing p5.js sketch]. Open Processing Creative Commons Attribution. https://openprocessing.org/sketch/2378064
- Spinning Cube. (2025). Parametric Fish [Processing p5.js sketch]. Open Processing Creative Commons Attribution. https://openprocessing.org/sketch/2531149

This project was based on these tutorials:


- Moren, B. (n.d.). p5.js Cheat Sheet. https://bmoren.github.io/p5js-cheat-sheet/

- p5.js. (n.d.). mouseMoved(). https://p5js.org/reference/p5/mouseMoved/

- p5js. (n.d.). Reference. P5js. https://p5js.org/reference/#Mouse

- Shiffman, D. (2015, September 12). 4.1: while and for Loops - p5.js tutorial [Video]. YouTube. https://www.youtube.com/watch?v=cnRD9o6odjk

- Shiffman, D. (2021, February 17). 3.7: Additive Waves - The Nature of Code [Video]. YouTube. https://www.youtube.com/watch?v=okfZRl4Xw-c

- W3Schools. (n.d.). JavaScript introduction. https://www.w3schools.com/js/js_intro.asp

- W3Schools. (n.d.). JavaScript variables. https://www.w3schools.com/js/js_variables.asp

- W3Schools. (n.d.). JavaScript conditionals. https://www.w3schools.com/js/js_conditionals.asp

- W3Schools. (n.d.). JavaScript operators. https://www.w3schools.com/js/js_operators.asp

- W3Schools. (n.d.). JavaScript loops. https://www.w3schools.com/js/js_loops.asp

- W3Schools. (n.d.). JavaScript strings. https://www.w3schools.com/js/js_strings.asp

- W3Schools. (n.d.). JavaScript arrays. https://www.w3schools.com/js/js_arrays.asp


Data was used from:

- Beachwatch. (n.d.). Water quality data. NSW Government. https://www.beachwatch.nsw.gov.au/waterMonitoring/waterQualityData

- Google. (2025). Wave height September 1st Manly Beach 2025. https://www.google.com/search?q=wave+height+september+1st+manly+beach+2025&oq=wave+height+september+1st+manly+beach+2025&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRiPAjIHCAMQIRiPAjIHCAQQIRiPAtIBCDk3MzRqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8

- Manly Hydraulics Laboratory. (2021). Wave climate annual summary 2020–2021. https://s3-ap-southeast-2.amazonaws.com/www-data.manly.hydraulics.works/www/publications/oeh/2021/mhl2858%20wave%20climate%20annual%20summary%202020-2021.pdf

- Manly Hydraulics Laboratory. (2022). Wave climate annual summary 2021–2022. https://s3-ap-southeast-2.amazonaws.com/www-data.manly.hydraulics.works/www/publications/oeh/2022/mhl2909%20wave%20climate%20annual%20summary%202021-2022.pdf

- Manly Hydraulics Laboratory. (2023). 2023 annual summary. https://mhl.nsw.gov.au/Publications/publications.php?content=bcd2023annualsummary

- Manly Hydraulics Laboratory. (2024). Long-term trends in NSW coastal wave climate. http://www-data.manly.hydraulics.works.s3.amazonaws.com/www/publications/OceanWave/Long%20Term%20Trends%20in%20NSW%20Coastal%20Wave%20Climate.pdf

Many thanks to...

Our class tutor Dr Evangeline Aguas, and our subject coordinator Dr Andrew Stapelton - thank you!

## Contact

UTS email: jazzmin.williamson@student.uts.edu.au
