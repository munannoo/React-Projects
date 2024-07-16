import { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles.css";
function ImgSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImgs(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch {
      console.error("error occured");
      setLoading(false);
      setErr(true);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImgs(url);
  }, [url]);

  if (loading) {
    <div>Loading...</div>;
  }

  if (err) {
    <div>Error occured while fetching the data!</div>;
  }

  function handleNext() {
    currentSlide == images.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  }

  function handlePrevious() {
    currentSlide == 0
      ? setCurrentSlide(images.length - 1)
      : setCurrentSlide(currentSlide - 1);
  }

  function handleIndicClick(imgId) {
    setCurrentSlide(imgId);
  }

  return (
    <div className="imgComponent">
      <BsArrowLeftCircleFill
        onClick={() => handlePrevious()}
        className="arrow arrow-left"
      />
      {images && images.length > 0
        ? images.map((imgItem) => {
            console.log(imgItem.id, currentSlide);
            return (
              <img
                key={imgItem.id}
                className={
                  currentSlide == imgItem.id
                    ? "img activeImg"
                    : "img inactiveImg"
                }
                src={imgItem.download_url}
                alt={imgItem.download_url}
              />
            );
          })
        : null}
      {/* for buttons */}
      <div className="circleIndic">
        {images && images.length > 0
          ? images.map((imgItem) => {
              return (
                <button
                  key={imgItem.id}
                  onClick={() => handleIndicClick(imgItem.id)}
                  className={
                    currentSlide == imgItem.id
                      ? "indicBtn activeCircle"
                      : "indicBtn inActiveCircle"
                  }
                ></button>
              );
            })
          : null}
      </div>

      <BsArrowRightCircleFill
        onClick={() => handleNext()}
        className="arrow arrow-right"
      />
    </div>
  );
}

export default ImgSlider;
