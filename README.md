# Accordion component

## Steps

the flow of the application should look something like this:

- Import the questions array from data.js into your project.
- Set up the questions array as a state variable using the useState hook.
- Iterate over the questions array and render a SingleQuestion component for each item in the array.
- In the SingleQuestion component, display the question text in the header and a button to toggle the question text.
- Define a function that toggles the state of a "showAnswer" flag, which determines whether the answer text is displayed or not.
- Modify the state of the questions array to keep track of the currently selected question id.
- Define a function that updates the state to reflect the selected question id.
- Use the selected question id to render only the SingleQuestion component that corresponds to the currently selected question.
