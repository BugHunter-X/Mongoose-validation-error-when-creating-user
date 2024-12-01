```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

async function createUser(name, age) {
  try {
    const user = new User({ name, age });
    await user.save();
    console.log('User created:', user);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

async function run() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase');
    await createUser('John Doe', 30);
    // Add more operations or queries here if needed
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.disconnect();
  }
}

run();
```