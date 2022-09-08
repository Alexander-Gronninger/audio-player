import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AudioPlayer autoplay src="https://example.com/audio.mp3" />
    </div>
  );
}

export default App;
