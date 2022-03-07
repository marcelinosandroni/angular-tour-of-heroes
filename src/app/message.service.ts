import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []

  add(message: string) {
    this.messages.push(message)
    return this
  }

  remove(messageToRemove: string) {
    const NOT_FOUND = -1
    const messagePosition = this.messages.findIndex(message =>
      message === messageToRemove
    )

    if (messagePosition !== NOT_FOUND) {
      this.messages.splice(messagePosition, 1)
    }

    return this
  }

  find(text: string) {
    const pattern = new RegExp(text, 'i')
    const foundMessage = this.messages.find(message => pattern.test(message))
    return foundMessage
  }

  clear() {
    this.messages = []
    return this
  }
}
