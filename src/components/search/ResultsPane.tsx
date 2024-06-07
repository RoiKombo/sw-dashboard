import React from "react";

interface PaneProps {
  results: Record<"name", string>[];
}
export function ResultsPane({ results }: PaneProps) {
  return (
    <>
      {results.length > 0 &&
        results.map((v, index) => <p key={`${v.name}+${index}`}>{v.name}</p>)}
    </>
  );
}
