const user1 = await User.create({
    username: 'DRpibb',
    email: 'DRpibb@email.com',
    thoughts: [],
    friends: [],
  });
  
  const user2 = await User.create({
    username: 'billymanhandel22',
    email: 'Dabillster@email.com',
    thoughts: [],
    friends: [],
  });
  
  const thought1 = await Thought.create({
    thoughtText: 'idk if this works',
    createdAt: new Date(),
    username: 'DRpibb',
    reactions: [],
  });
  
  const thought2 = await Thought.create({
    thoughtText: 'can you read my thought?',
    createdAt: new Date(),
    username: 'billymanhandel22',
    reactions: [],
  });
  
  
  const reaction1 = await Reaction.create({
    reactionBody: 'no way!',
    username: 'DRpibb',
    createdAt: new Date(),
  });
  
  const reaction2 = await Reaction.create({
    reactionBody: 'my mind is blown',
    username: 'billymanhandel22',
    createdAt: new Date(),
  });
  

  thought2.reactions.push(reaction1);
thought1.reactions.push(reaction2);

user1.thoughts.push(thought2);
user2.thoughts.push(thought1);

user1.friends.push(user2);
user2.friends.push(user1);

await user1.save();
await user2.save();
await thought1.save();
await thought2.save();