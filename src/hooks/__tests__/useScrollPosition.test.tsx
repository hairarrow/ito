import React, { useRef } from "react";
import { renderToString } from "react-dom/server";
import { describe, it, expect } from "vitest";

import useScrollPosition from "../useScrollPosition";

function TestComponent() {
  const ref = useRef<HTMLElement>(null!);
  useScrollPosition(ref);
  return null;
}

describe("useScrollPosition", () => {
  it("does not throw when window is undefined", () => {
    expect(() => renderToString(<TestComponent />)).not.toThrow();
  });
});
