const About = () => {
  return (
    <div className="about-container">
      <h1>About CodeInsight.</h1>

      <section className="warning">
        <h2>API Usage Notice</h2>
        <p>
          This app runs on <strong>Gemini 2.5 Flash</strong> (free tier) — which
          means rate limits apply. RPM, RPD, and TPM quotas are enforced by
          Google. If a request fail, it means that the rate limit has been exceeded. So, please use it
          responsibly.
        </p>
      </section>

      <section>
        <h2>What is CodeInsight?</h2>
        <p>
          CodeInsight is a tri-mode AI developer tool built for programmers who
          want to move faster. Write code from a prompt, understand unfamiliar
          logic instantly, or catch bugs before they catch you — all powered by
          Gemini 2.5 Flash through a secure Django REST backend.
        </p>
        <p>
          Built for students, self-taught developers, and anyone who'd rather
          ship than spend an hour reverse-engineering someone else's code.
        </p>
      </section>

      <section>
        <h2>Three Modes. One Tool.</h2>
        <ul>
          <li>
            <strong>Write</strong> — describe what you need, get working code
            generated instantly.
          </li>
          <li>
            <strong>Explain</strong> — paste any code, get a clear line-by-line
            breakdown of what it does and why.
          </li>
          <li>
            <strong>Debug</strong> — paste broken code, get the bug identified
            and a fix surfaced in seconds.
          </li>
        </ul>
      </section>

      <section>
        <h2>How It Works</h2>

        <h3>Frontend</h3>
        <p>
          Built with React — a live code editor, mode-switched output panel, and
          zero page reloads. Input goes in, structured AI output comes back,
          clean and readable.
        </p>

        <h3>Backend</h3>
        <p>
          Django REST Framework acts as a secure bridge between the UI and
          Gemini's API. It receives the input, constructs a mode-specific
          prompt, fires the request, and streams the response back to the
          frontend.
        </p>
      </section>

      <section>
        <h2>Built By</h2>
        <p>
          Praveen Kumar S — Full Stack Developer, Chennai. Built with React,
          Django, and Gemini 2.5 Flash. This is one of the two AI projects I've
          shipped — the other one is a fully offline local LLM assistant.
        </p>
        <p>
          If you're a recruiter or developer — my GitHub and portfolio are
          linked in the nav.
        </p>
      </section>

      <br></br>
      <h1>Thank You !</h1>
    </div>
  );
};

export default About;
