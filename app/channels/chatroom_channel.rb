class ChatroomChannel < ApplicationCable::Channel
  def subscribed # this method is triggered whenever a user asks to be subscribed to the ChatroomChannel
    chatroom = Chatroom.find(params[:id]) # the user also needs to pass an id for the chatroom
    stream_for chatroom # stream_for actually connects the user to the specific chatroom (from ActionCable) so that they receive messages that are broadcasted from that chatroom
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
