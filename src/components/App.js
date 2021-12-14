import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function App() {

  // const projectCards = user.map((userObj)=> {
  //   return <ProjectList key={userObj.id} name={userObj.name} about={userObj.about} technologies={userObj.technologies} />;
  // })

  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
      <ProjectItem /> 
    </div>
  );
}

export default App;
