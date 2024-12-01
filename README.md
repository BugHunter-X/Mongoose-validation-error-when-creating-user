## Mongoose validation error when creating user

This bug occurs when there's an issue with the data being saved to the MongoDB database using Mongoose. It often arises due to validation errors in the defined schema or incorrect data types being passed during the creation of a new user.

### Reproduction Steps

1. Make sure you have MongoDB running locally.
2. Save the `bug.js` code into a file.
3. Install Mongoose using: `npm install mongoose`
4. Run the code with node: `node bug.js`

You should see an error message indicating the validation problem.

### Solution

Examine the `bugSolution.js` file to understand how the issue is resolved by ensuring that the input data adheres to the schema definition before attempting to save the user. Further debugging might involve checking the MongoDB logs for specific errors or reviewing the Mongoose documentation for schema validation best practices.