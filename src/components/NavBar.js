import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((link)=>{
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>
    {/* display an <a> tag for each link here */}
    {linksList}
    </nav>;
}

export default NavBar;
