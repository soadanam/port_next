"use client";
import ProgressBar from "./ProgressBar";

const ProfessionalSkills = ({ percentage }) => {
  return (
    <div className="container mx-auto flex gap-10 justify-center items-center pt-24">
      <div className="w-1/2">
        <div className="mt-24">
          <h1 className="text-3xl font-semibold">Professional Skills</h1>
        </div>
        <div className="mt-24 space-y-5">
          <ProgressBar name="UI / UX Design" percentage={75}/>
          <ProgressBar name="Direction, Video Production & Editing" percentage={70}/>
          <ProgressBar name="Animation & Motion Graphic" percentage={75}/>
          <ProgressBar name="Graphic Design" percentage={90}/>
        </div>
      </div>
      <div className="w-1/2 bg-gray-500">
        <h1>ABOUT US IMAGE</h1>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
