import * as React from "react";
import { createRoot } from "react-dom/client";
import { animated } from "@react-spring/web";

const domNode = document.getElementById("root");

if (!domNode) {
  throw new Error("root element not found");
}

const root = createRoot(domNode);

function App() {
  return <animated.div>hello</animated.div>;
}

root.render(<App />);
