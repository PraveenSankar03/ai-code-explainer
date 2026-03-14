import "./style.css";
import { useState } from "react";

const Home = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const explainCode = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:8000/api/explain/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();

    setExplanation(data.explanation);
    setLoading(false);
  };
  return (
    <div className="app">
      <h1 className="title">⚡ Code Explainer</h1>

      <div className="workspace">
        <div className="panel">
          <h2>Code</h2>

          <textarea
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button onClick={explainCode} disabled={loading}>
            {loading ? "Analyzing..." : "Explain Code"}
          </button>
        </div>

        <div className="panel">
          <h2>Explanation</h2>

          <div className="output">
            {loading
              ? "Generating explanation..."
              : explanation || "Explanation will appear here."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
