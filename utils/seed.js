const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const user1 = await User.create({
      username: 'DRpibb',
      email: 'drpibb@example.com',
    });

    const user2 = await User.create({
      username: 'billymanhandel22',
      email: 'billymanhandel22@example.com',
    });

    const thought1 = await Thought.create({
      thoughtText: 'This is my first thought.',
      username: user1.username,
    });

    const thought2 = await Thought.create({
      thoughtText: 'I have another thought.',
      username: user2.username,
    });

    user1.thoughts.push(thought1);
    user2.thoughts.push(thought2);

    
    await user1.save();
    await user2.save();

    console.log('Seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
});
   

