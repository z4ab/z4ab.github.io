import Image from "next/image";
import Tile from "../../components/Tile";
import { FaCompactDisc, FaEnvelope, FaFolderOpen, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone, FaUser } from "react-icons/fa";
import Link from "next/link";


export default function AboutPage() {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <Link href={"https://www.linkedin.com/in/zabdulam/"} target="_blank">
          <Tile className="h-65 w-96 items-center justify-center flex" label="LinkedIn" icon={<FaLinkedin size="150px"/>}>
          </Tile>
        </Link>
        <Tile className="w-96 items-center justify-center flex" label={"zabdulam@uwaterloo.ca"} icon={<FaEnvelope/>}>
        </Tile>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="https://github.com/z4ab" target="_blank">
          <Tile className="h-65 w-96 items-center justify-center flex" label={"GitHub"} icon={<FaGithub size="150px"/>}>
          </Tile>
        </Link>
        <Tile className="w-96 items-center justify-center flex" label={"4164741933"} icon={<FaPhone/>}>
        </Tile>
      </div>
    </div>
  );
}