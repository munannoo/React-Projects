import { useRef } from "react";

export default function ScrollToParticularSection() {
  const ref = useRef();
  const pagesData = [
    {
      label: "First Page",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Page",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Third Page",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Page",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
  ];

  function handleScrolltoSecion() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to a Particular Section</h1>
      <button onClick={handleScrolltoSecion}>to section 3</button>
      {pagesData.map((pageItem, index) => (
        <div ref={index + 1 === 3 ? ref : null} style={pageItem.style}>
          <h2>{pageItem.label}</h2>
        </div>
      ))}
    </div>
  );
}
