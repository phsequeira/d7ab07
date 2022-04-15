const db = require("../db");
const Message = require("./message");
const User = require("./user");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (...userIds) {
  for (let i = 0; i < userIds.length; i++) {
    const user = await User.findByPk(userIds[i]);
    const convos = await user.getConversations();

    // Loop through each conversation of each user 
    for (let x = 0; x < convos.length; x++) {
      const convo = await Conversation.findByPk(convos[x].id, {
        include: [{
          model: User
        }]
      });

      const isAllUsersInConvo = convo.users.every((usersInConvo) => {
        return userIds.includes(usersInConvo.id);
      })

      if (isAllUsersInConvo && userIds.length === convo.users.length) {
        return convos[x];
      }
    }
  }
};

module.exports = Conversation;
