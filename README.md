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
This project is simple Lorem ipsum dolor generator.
	
## Technologies
Project is created with:
* Processing version: 4.4.8
* Mode: p5.js by Fathom Information Design

## Setup
To run this prototype, install Processing, download the zip and open the file.

Or, access the prototype through the p5.js website and simply paste the link into your browser.

## Usage

Open the sketch in the p5.js web browser: [https://editor.p5js.org/](https://editor.p5js.org/jazz3willo/sketches/qkKnaNYJK)

Interact with the data visualisation:
- Click and hold your mouse to view wave height data for each year.
- Release the mouse to switch to ocean temperature data.
- Double-click anywhere on the canvas to view the bacteria levels on a different wave visual.

Read Labels and Legend:
- Each wave point has text labels to show the average data value for each year, with a corresponding emoji (e.g., “2024 = 5.5 ft”).
- Colours also correspond to the data points and the legend.

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

TO DO: Create more wave points and smaller text labels

Other areas for development would be finding new and different modes of interaction for users. 

TO DO: Create more mouse events, or other events, using conditionals and operaters

Additionally, the data used in this visualisation is not completely accurrate due to limited availability of information. Therefore, this prototype would be stronger if the data was more reliable and accurate. 

TO DO: Base future data visualisations on easily accessible information

## Acknowledgements

This project was inspired by...
This project was based on this tutorial.
Many thanks to...

## Contact
