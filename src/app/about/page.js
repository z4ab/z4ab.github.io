"use client";
import Image from "next/image";
import Tile from "../../components/Tile";
import { FaCompactDisc, FaFolderOpen, FaUser } from "react-icons/fa";
import { useState } from "react";

export default function AboutPage() {
  const descriptions = {
    OICR: (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Backend Developer at OICR</h1>
        <br />
        <p className="text-md">Designed and implemented a mentor–mentee matching algorithm for the Bioinformatics.ca learning platform, improving pairing accuracy and user satisfaction.</p>
        <br />
        <p className="text-md">Developed and documented REST API endpoints in Express and TypeScript, collaborating with front-end engineers to ensure best practices, maintainability, and seamless integration</p>
      </div>
    ),
    FN: (
      <div className="p-6">
        <h1 className="text-2xl font-bold">QA Analyst at First National</h1>
        <br />
        <p className="text-md">Tested the transmission system of mortgage applications between brokers and mortgage underwriters, servicing 1000+ professionals of major Canadian mortgage lenders such as TD, BMO and Manulife </p>
        <br />
        <p className="text-md">Identified, documented, and tracked defects using Azure Devops, collaborating with developers and business analysts to resolve issues promptly.</p>
      </div>
    ),
    TD: (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Technical Director at UWaterloo Esports</h1>
        <br />
        <p className="text-md">Directed live esports broadcasts with professional-grade equipment including audio mixers, cameras, and
microphones, consistently delivering high-quality streams to audiences of 100+ concurrent viewers.</p>
        <br />
        <p className="text-md">Automated scene changes using Node.js scripts, to ensure seamless transitions and high quality broadcasting.</p>
      </div>

    ),
    default: (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Hi, I&apos;m Zaid</h1>
        <br />
        <p className="text-md">I&apos;m a Software Developer based in Toronto and a Computer Science Student at the University of Waterloo</p>
        <br />
        <p className="text-md">I&apos;m mainly interested in backend development with Express and FastAPI and game development with C++</p>
        <br />
        <p className="text-md">Click on tiles to learn more about my experience</p>
      </div>
    )
  }
  const [selectedDescription, setSelectedDescription] = useState("default");
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <Tile onClick={() => setSelectedDescription("OICR")} backgroundColor="bg-white" width="w-73" label="Backend Developer">
          <Image className="absolute top-0 left-23" src="/OICR.png" alt="OICR logo" width={110} height={1}></Image>
        </Tile>
        <Tile onClick={() => setSelectedDescription("FN")} backgroundColor="bg-white" width="w-73" label="QA Analyst">
          <Image className="absolute top-5 left-14" src="/FNFLP.png" alt="First National logo" width={180} height={1}></Image>
        </Tile>
        <Tile onClick={() => setSelectedDescription("TD")} backgroundColor="bg-white" width="w-48" label="Technical Director">
          <Image className="absolute top-0 left-27/100" src="/UWaterlooEsports.png" alt="University of Waterloo Esports logo" width={90} height={1}></Image>
        </Tile>
      </div>
      <div className="flex flex-row gap-2">
        <Tile
          backgroundColor="bg-(--xbox-gray)"
          height="h-66"
          width="w-148"
          scale="hover:scale-105"
          className="text-white font-convection"
          onClick={() => setSelectedDescription("default")}
        >
          {descriptions[selectedDescription]}
        </Tile>
        <div className="flex flex-col gap-2">
          <Tile backgroundColor="bg-white" label="Math Instructor">
            <Image className="absolute top-0 left-4" src="/Mathnasium.png" alt="Mathnasium Logo" width={160} height={1}></Image>
          </Tile>
          <Tile className="flex justify-center items-center" backgroundColor="bg-white" width="w-48" label="Pharmacy Assistant">
            <Image className="absolute top-[-35] left-10/100" src="/ShoppersDrugMart.png" alt="Shoppers Drug Mart logo" width={160} height={1}></Image>
          </Tile>
        </div>
      </div>
    </div>
  );
}