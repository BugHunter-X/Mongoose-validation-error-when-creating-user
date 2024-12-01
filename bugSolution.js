```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 }, // Example validation: age must be non-negative
});

const User = mongoose.model('User', userSchema);

async function createUser(name, age) {
  try {
    // Check if the input data is valid according to the schema
    const validationError = userSchema.validateSync({ name, age });
    if (validationError) {
      console.error('Validation error:', validationError);
      throw validationError; // Throw the error to prevent saving invalid data
    }

    const user = new User({ name, age });
    await user.save();
    console.log('User created:', user);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function run() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase');
    // Example usage with potential validation issues:
    await createUser('', -5);
    await createUser('Valid Name', 25);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.disconnect();
  }
}

run();
```