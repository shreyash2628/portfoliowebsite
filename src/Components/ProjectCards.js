import React from "react";
function ProjectCards(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-1/2" src={props.imgPath} alt="Project" />

      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{props.title}</h2>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="mt-4">
          <a
            href={props.ghLink}
            target="_blank"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Github
          </a>
          {
            props.isHosted ?
              <a
                href={props.liveLink}
                target="_blank"
                className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Demo
              </a>
              : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
