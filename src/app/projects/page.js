import Image from "next/image";
import Tile from "../../components/Tile";
import { FaChessBishop, FaChessKnight, FaChessPawn, FaCompactDisc, FaFolderOpen, FaHeadset, FaMapMarked, FaMapPin, FaSitemap, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Satelite Ground Station",
      link:"https://github.com/UWOrbital/OBC-firmware/tree/main/gs",
      image: "/orbital.png",
      bg: "black",
      size: 200,
    },
    {
      name: "AI Interview Prep",
      link:"https://interviewly.netlify.app/",
      image: "/Interviewly.png",
      bg: "white",
      opt: "p-6",
      size: 250
    },
    {
      name: "C++ Chess Engine",
      link:"https://github.com/pacman-ty/chess-engine",
      icon: (<FaChessKnight size="60px"/>)
    },
    {
      name: "Real-Time Lip Reading",
      link:"https://github.com/JasonH53/VoiceLens",
      icon: (<FaHeadset size="60px"/>)
    },
    {
      name: "Undergraduate Course Map",
      link:"https://github.com/z4ab/course-map",
      icon: (<FaSitemap size="60px"/>)
    },
    {
      name: "GHG Emissions Map",
      link:"https://github.com/z4ab/odyssey-hackathon",
      icon: (<FaMapMarked size="60px"/>)
    }
  ];
  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-2">
      {projects.map((p, i, _) => (
        <Link key={i} href={p.link} target="_blank">
          <Tile className="w-96 items-center justify-center flex" backgroundColor={p.bg && "bg-"+p.bg} label={p.name} icon={p.icon}>
            {p.image && (<Image className={p.opt} src={p.image} alt="Resume preview" width={p.size} height={90}></Image>)}
          </Tile>
        </Link>
      ))}
    </div>
  )
}