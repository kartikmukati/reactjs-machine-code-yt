import "./App.css";

function App() {

  return (
    <div className="scroller">
      {/* SVG PAth */}
      <div className="mask">
        <svg viewBox="0 0 1025 437" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_17)">
                  <rect width="1024.6" height="437" fill="white" />
                  <path
                    d="M1056 390.5L500 483L1029.5 312L226.5 467.5L1010 238.5L-14.5 442.5L956.5 174.5L26.5 349.5L854.5 104L107.5 251.5L755 34.5L277.5 118L396.5 50"
                    stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" pathLength="1" />
                </g>
                <defs>
                  <clipPath id="clip0_3_17">
                    <rect width="1024.6" height="837" fill="none" />
                  </clipPath>
                </defs>
              </svg>
      </div>
      {/* Video */}
      <div className="video">
      <video autoPlay playsInline muted disablePictureInPicture disableRemotePlayback loop src="https://www.apple.com/105/media/ww/ipad-10.9/2022/4c5d6d90-d0de-429a-84f7-cf8827181a11/anim/features/large_2x.mp4"></video>
      </div>
    </div>
  );
}

export default App;
