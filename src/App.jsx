import { useRef } from "react";
import "./App.css";


function App() {

  const ref = useRef();
  
  const imageArrSocial = [
    "/images/x.png",
    "/images/twitter.png",
    "/images/amazon.png",
    "/images/netflix.png",
    "/images/apple.png",
    "/images/facebook.png",
    "/images/instagram.png",
    "/images/x.png",
    "/images/twitter.png",
    "/images/amazon.png",
    "/images/netflix.png",
    "/images/apple.png",
    "/images/facebook.png",
    "/images/instagram.png",
  ];

  const prevClickHandler = () => {
    const scrollLeft = ref.current.scrollLeft;
    const itemWidth = parseInt(getComputedStyle(ref.current.children[0]).width)
    ref.current.scrollLeft = scrollLeft - itemWidth;
  }

  const nextClickHandler = () => {
    const scrollLeft = ref.current.scrollLeft;
    const itemWidth = parseInt(getComputedStyle(ref.current.children[0]).width)
    ref.current.scrollLeft = scrollLeft + itemWidth;
  }

  return (
    <>
      <div className="containers shadow-sm p-3 mb-5 bg-body-tertiary rounded" >
        <div className="item-list" ref={ref}>
          {imageArrSocial.map((item, index) => {
            return (
              <div>
                <img className="item" src={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="btn-ctn">
        <button className="btn btn-outline-primary" onClick={prevClickHandler}>Prev</button>
        <button className="btn btn-outline-primary" onClick={nextClickHandler}>Next</button>
      </div>
    </>
  );
}

export default App;
