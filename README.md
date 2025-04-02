# Analog Clock

## Description
This project is a simple analog clock built using HTML, CSS, and JavaScript. It visually represents the current time with moving hour, minute, and second hands.

## Features
- Real-time updates every second
- Styled clock face with numbers (12, 3, 6, 9)
- Smooth movement of clock hands
- Lightweight and fully responsive

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
1. The HTML structure includes a circular clock face with three hands (hour, minute, second) and a center point.
2. CSS styles the clock, setting its dimensions, colors, and animations.
3. JavaScript calculates the current time and updates the rotation of the hands using the `transform` property.
4. The `setInterval` function updates the clock every second.

## Usage
1. Download or clone the repository.
2. Open the `index.html` file in a browser.
3. The clock will automatically display the current time.

## Code Overview
- The `hand` elements are positioned with `transform-origin: bottom` so they rotate correctly.
- The `updateClock` function calculates angles for each hand based on the current time.
- `setInterval(updateClock, 1000)` ensures real-time updates.

## Customization
- Modify the `background-color` in CSS to change the clock’s appearance.
- Adjust the size of the clock hands for a different look.
- Add additional numbers or markers for a more detailed clock face.

## License
This project is open-source and available for modification and personal use.

