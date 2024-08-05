export default function ScrollToParticularSection() {
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
  return (
    <div>
      <h1>Scroll to a Particular Section</h1>
      {pagesData.map((pageItem) => (
        <div style={pageItem.style}>
          <h2>{pageItem.label}</h2>
        </div>
      ))}
    </div>
  );
}
