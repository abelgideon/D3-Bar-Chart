# D3 Bar Chart

This project uses **D3.js** to create a bar chart visualizing the GDP data from the **Federal Reserve Economic Data (FRED)** API. The chart displays GDP values from 1947 to the most recent available data, with interactive tooltips providing additional details on hover.

## Features

- **Dynamic Bar Chart**: Bars represent GDP values for each year between 1947 and the most recent data.
- **Interactive Tooltips**: Hovering over a bar displays the year and corresponding GDP value.
- **Axes**: Both X and Y axes are dynamically scaled based on the data.
- **Responsive**: The chart adjusts to the container size, maintaining its proportions.

## Technologies Used

- **D3.js**: For data-driven DOM manipulation and creating interactive visualizations.
- **JavaScript (ES6)**: For handling data processing and interaction logic.
- **HTML5**: For structuring the page and displaying the chart.

## Getting Started

### Prerequisites

- **Web Browser**: Any modern browser (Chrome, Firefox, Safari, etc.).
- **Text Editor/IDE**: Optional, for editing the project files.

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/abelgideon/D3-Bar-Chart.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd D3-Bar-Chart
   ```
3. Open the `index.html` file in your preferred browser to view the bar chart.
4. Alternatively, you can access the live site [here](https://abelgideon.github.io/D3-Bar-Chart/).

## Usage

1. The bar chart will display GDP values for each year.
2. Hover over any bar to view the year and GDP value.
3. The X-axis represents the year, and the Y-axis represents the GDP value.

## Customizing the Chart

You can adjust the following parameters to change the chart's appearance and behavior:

- **Width and Height**: Modify the `w` and `h` variables to resize the chart.
- **Bar Width**: Adjust the `barWidth` calculation to change the width of the bars.
- **Padding**: Change the `padding` value to control the spacing around the chart.

## Project Highlights

### Interactive Tooltip

- The tooltip displays detailed information when hovering over any bar, showing the year and GDP value in the format:  
  `Year: GDP Value`.

### Scalable Axes

- Both the X and Y axes are dynamically scaled based on the dataset, ensuring the chart adjusts to different ranges of data.

### Data Handling

- The chart fetches GDP data in real-time from the **Federal Reserve Economic Data (FRED)** API, displaying up-to-date information.


## File Structure

- `index.html`: The main HTML file that includes the script and displays the chart.
- `script.js`: Contains the JavaScript code for fetching the data, creating the bar chart, and adding interactivity.
- `styles.css`: (Optional) Custom styles for the chart, if desired.

## Contributing

Contributions are welcome! Fork the repository and submit a Pull Request with your improvements.