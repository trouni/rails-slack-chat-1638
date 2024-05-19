Chatroom.destroy_all
User.destroy_all

Chatroom.create(name: "general")
Chatroom.create(name: "1638")
User.create(email: "doug@me.com", nickname: "Doug", password: "123123", username: 'dmbf29')
User.create(email: "trouni@me.com", nickname: "Trouni", password: "123123", username: 'trouni')