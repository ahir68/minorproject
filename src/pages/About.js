import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <aside class="profile-card">
        <header>
          <a href="/">
            <img
              src="https://image.winudf.com/v2/image/Y29tLm5hbWFuMTQuYWxnb3Zpc3VhbGl6ZXJfaWNvbl8wXzc1YTM4YzA/icon.png?w=&fakeurl=1"
              alt=""
            />
          </a>

          <h1>Vijay Yadav</h1>

          <h2>Web Developer</h2>
        </header>

        <div class="profile-bio">
          <p>A react project</p>
        </div>
      </aside>
    </div>
  );
}
export default About;
