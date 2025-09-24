import Image from "next/image";
import Tile from "../components/Tile";
import { HiSaveAs } from "react-icons/hi";
import { FaCompactDisc, FaFolderOpen, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <Link href={'/ZaidAbdulameerResume.pdf'} target="_blank">
          <Tile className="bg-black" label="Open Resume">
            <div className="absolute top-0 left-12">
              <Image src="/resume-preview.png" alt="Resume preview" width={100} height={90}></Image>
            </div>
          </Tile>
        </Link>
        <Link href="/projects">
          <Tile label="My Projects" icon={<FaFolderOpen />} />
        </Link>
        <Link href="/about">
          <Tile label="About Me" icon={<FaUser />} />
        </Link>
      </div>
      <Tile
        backgroundColor="bg-(--xbox-gray)"
        className="w-148 h-100 hover:scale-105 text-white font-convection"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold">Hi, I'm Zaid</h1>
          <br />
          <p className="text-md">I'm a Software Developer based in Toronto and a Computer Science Student at the University of Waterloo</p>
        </div>
      </Tile>
    </div>
  )
}