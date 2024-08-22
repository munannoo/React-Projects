import useWindowResize from "./useWindowResize";

export default function TestUseWindowResize() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>useWindowResize Hook</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}
