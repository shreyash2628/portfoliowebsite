import React from "react";
import ProjectCards from "./ProjectCards";
import { ProjectData } from "../utils/ProjectData";
import cineflixgptss from '../Assests/cineflixgptss.png';


function Projects() {
  return (
    <div className="project-section min-h-screen bg-gray-900">
      {/* <Particle /> */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          My Recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-white text-center mb-8">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-48 gap-4">
         {
          ProjectData.map(proj=>(
            <ProjectCards
            imgPath={proj.imagepath}
            isBlog={false}
            title={proj.name}
            description={proj.description}
            ghLink={proj.githubLink}
            liveLink={proj.liveLink}
            isHosted={proj.isHostedOnline}
          />
          ))
         }
         
          

          {/* <ProjectCard
            // imgPath={bitsOfCode}
            isBlog={false}
            title="FITGIT"
            description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
            ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            demoLink="https://blogs.soumya-jit.tech/"
          />

          <ProjectCard
            // imgPath={editor}
            isBlog={false}
            title="Portfolio Website"
            description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
            ghLink="https://github.com/soumyajit4419/Editor.io"
            demoLink="https://editor.soumya-jit.tech/"
          />

           <ProjectCard
            // imgPath={leaf}
            isBlog={false}
            title="Rail-Insights"
            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
            ghLink="https://github.com/soumyajit4419/Plant_AI"
            demoLink="https://plant49-ai.herokuapp.com/"
          /> */}

          {/* <ProjectCard
            // imgPath={suicide}
            isBlog={false}
            title="Ai For Social Good"
            description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
            ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
          />

          <ProjectCard
            // imgPath={emotion}
            isBlog={false}
            title="Face Recognition and Emotion Detection"
            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
            Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
          />  */}

        </div>
      </div>
    </div>
  );
}

export default Projects;
