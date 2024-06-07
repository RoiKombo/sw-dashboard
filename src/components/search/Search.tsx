import React, { useState } from "react";
// import { toLowerCase } from "./utils";
import { Input } from "../Input";
import { ResultsPane } from "./ResultsPane";

interface SearchProps {
  func?: (value: string | number) => void;
  src: Record<"name", string>[];
}

export function Search({ src }: SearchProps) {
  const [result, resultSet] = useState<Record<"name", string>[]>([]);
  const handleInput = (value: string | number) => {
    const found = src.filter((v) => v.name.includes(value));
    console.log("found", found);
    if (found.length > 0) {
      resultSet(found);
    }
    return;
  };

  return (
    <div className="flex flex-col items-center">
      <Input
        label={"search"}
        func={handleInput}``
        placeholder={"type name..."}
        type={"search"}
      />

      <ResultsPane results={result} />
    </div>
  );
}
