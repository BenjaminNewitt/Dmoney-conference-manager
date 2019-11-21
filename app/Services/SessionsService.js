import _store from "../store.js"
import Speaker from "../Models/Speaker.js";

class SessionsService {
  addSpeaker(speakerData) {
    let speaker = new Speaker(speakerData)
    let foundSession = _store.State.sessions.find(session => session.id == speaker.sessionId)
    foundSession.speakers.push(speaker)
    _store.saveState()
  }
 constructor() {
  console.log('Hello from sesionsService')
 }
}

const SESSIONSERVICE = new SessionsService();

export default SESSIONSERVICE;
