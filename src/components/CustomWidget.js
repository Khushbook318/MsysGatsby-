import React from 'react';
import Widget from 'rasa-webchat';
// import { Webchat } from '@rasahq/rasa-webchat';

function CustomWidget() {
  return (
    <>
    <div id="webchat" data-websocket-url="https://chatbot.msystechnologies.com"></div>
    <script src="https://cdn.jsdelivr.net/npm/rasa-webchat@0.11.11/lib/index.min.js" type="application/javascript"></script>
    <Widget
    id= {"webchat"}
    initPayload={"/get_started"}
    socketUrl={"http://localhost:5005"}
    socketPath={"/socket.io/"}
    customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
    title={"Michelle from MSys"}
    subtitle={"BETA"}
    />
    </>
  );
}
export default CustomWidget