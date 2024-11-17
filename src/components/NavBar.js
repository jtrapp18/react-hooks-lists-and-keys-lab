import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkTag = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)
  return (
  <nav>
    {linkTag};
  </nav>);
}

export default NavBar;
