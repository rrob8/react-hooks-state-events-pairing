import video from "../data/video.js";
import Details from './Details'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details video={video} />
      </div>
  );
}

export default App;
