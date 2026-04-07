import "./style.css";
import { useState } from "react";

const Home = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("Write");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    if (!code.trim()) {
      setExplanation("Please enter some input first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/explain/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, mode }),
      });

      const data = await response.json();
      setExplanation(data?.explanation || "No response received.");
    } catch (error) {
      setExplanation("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!explanation) return;

    try {
      await navigator.clipboard.writeText(explanation);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Failed to copy.");
    }
  };

  const handleClear = () => {
    setExplanation("");
  };

  return (
    <div className="app">
      <h1 className="title">AI powered coding assistant</h1>

      <div className="toggle-group">
        {["Write", "Explain", "Debug"].map((m) => (
          <button
            key={m}
            className={`toggle-btn ${mode === m ? "active" : ""}`}
            onClick={() => {
              setMode(m);
              setExplanation("");
            }}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      <div className="workspace">
        <div className="panel">
          <h2>Code / Prompt</h2>

          <textarea
            placeholder={
              mode === "Write"
                ? "Describe what you want to generate..."
                : "Paste your code here..."
            }
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button onClick={handleSubmit} disabled={loading}>
            {loading
              ? "Analyzing..."
              : mode === "Explain"
                ? "Explain Code"
                : mode === "Debug"
                  ? "Debug Code"
                  : "Generate Code"}
          </button>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>
              {mode === "Explain"
                ? "Explanation"
                : mode === "Debug"
                  ? "Debug Report"
                  : "Generated Code"}
            </h2>

            <div className="panel-actions">
              <button onClick={handleCopy} disabled={!explanation}>
                {copied ? "Copied!" : "Copy"}
              </button>
              <button onClick={handleClear} disabled={!explanation}>
                Clear
              </button>
            </div>
          </div>

          <div className="output">
            {loading
              ? "Analyzing..."
              : explanation ||
                `${
                  mode === "Explain"
                    ? "Explanation"
                    : mode === "Debug"
                      ? "Debug report"
                      : "Generated code"
                } will appear here.`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
