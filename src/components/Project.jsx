import React from "react";
import ProjectCard from "./ProjectCard";
import portfolioImage from "../assets/portfolio.png";
import searchEngineImage from "../assets/search-engine.png";
import memoryGameImage from "../assets/planet-game.png";
import projManageImage from "../assets/project-management.png";

const des1 =
  "Responsive Web Portfolio. Supports Dark Mode and Form Submission!";
const des2 = "Planet images matching memory game using Modern React Hooks. ";
const des3 =
  "Fast full-text search using Mock Database & Indexes. Query response time under 300ms.";
const des4 =
  "Supports user authentication using Firebase. Data updated realtime using Firestore.";

const tools1 = ["React", "Tailwind", "getform.io"];
const tools2 = ["Javascript", "React"];
const tools3 = ["Python", "Flask", "HTML"];
const tools4 = ["React", "Firebase"];

export default function Project() {
  return (
    <div
      name="projects"
      className="container max-w-[1000px] flex flex-col justify-center w-full h-full "
    >
      <div className="text-center pb-8">
        <p className="headerText">Projects</p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8 rounded-xl content-div ">
        <ProjectCard
          name="This Portfolio!"
          tools={tools1}
          description={des1}
          src={portfolioImage}
          git=""
          website=""
        />
        <ProjectCard
          name="Memory Game"
          tools={tools2}
          description={des2}
          src={memoryGameImage}
          git=""
          website=""
        />
        <ProjectCard
          name="Search Engine"
          tools={tools3}
          description={des3}
          src={searchEngineImage}
          git=""
          website=""
        />
        <ProjectCard
          name="Project Management"
          tools={tools4}
          description={des4}
          src={projManageImage}
          git=""
          website=""
        />
      </div>
    </div>
  );
}
