import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
export default function Header() {
  return (
    <section className="my-4 flex flex-col justify-start max-w-4xl w-full px-6 space-y-5">
      <h2 className="text-3xl font-bold"> Saba Rahrotaban</h2>
      <p>I'm a passionate Front-end developer based in Berlin.</p>

      <ul className="flex space-x-2">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li className="flex flex-row space-x-1">
          <HiDownload /> <span>Resume</span>
          {/* <FaDownload /> */}
        </li>
      </ul>
    </section>
  );
}
