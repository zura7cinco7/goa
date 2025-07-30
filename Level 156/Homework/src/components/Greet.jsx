import { memo } from "react";

const Greet = memo(({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
});

export default Greet;