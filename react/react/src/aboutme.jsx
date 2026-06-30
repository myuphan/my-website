import "./index.css";

export default function Main() {
  return (
    <div id="wrapper">

      {/* NAV */}
      <nav id="nav">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li className="active"><a href="/articles">Articles</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* MAIN */}
      <div id="main">
        <section className="post">
          <header className="major">
            <h1>Get to Know Me</h1>

            <p
              style={{
                fontSize: "0.95em",
                color: "#777",
                marginTop: "-20px",
                lineHeight: "1.6em",
              }}
            >
              Motivated manager with a strong foundation in leadership and a keen
              interest in leveraging technology to drive business growth.
            </p>
          </header>

          <div className="about-container">
            
            {/* LEFT SIDE */}
            <div className="left">
              <h2>About Me</h2>
              <p>
                Hiiiiiiiii, I’m My—a data-driven problem solver passionate about turning
                information into meaningful insights.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="right">
              <h2>Timeline</h2>
              <p>Your timeline here...</p>
            </div>

          </div>
        </section>
      </div>

      {/* FOOTER */}
      <div id="copyright">
        <ul>
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>

    </div>
  );
}