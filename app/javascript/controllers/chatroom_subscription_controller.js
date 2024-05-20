import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static values = { chatroomId: Number }
  static targets = ["messages"]

  connect() {
    this.subscription = createConsumer().subscriptions.create(
      { channel: "ChatroomChannel", id: this.chatroomIdValue }, // this is the radio frequency for our channel
      { received: data => {  // this is a callback for when the JS receives WS data
        this.messagesTarget.insertAdjacentHTML("beforeend", data)
        this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight)
      } }
    )
    console.log(`Subscribed to the chatroom with the id ${this.chatroomIdValue}.`)
  }

  disconnect() {
    console.log("Unsubscribed from the chatroom")
    this.subscription.unsubscribe()
  }

  resetForm(event) {
    event.target.reset()
  }
}


