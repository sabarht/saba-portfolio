import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
export default function Skills() {
  return (
    <section>
      <div>
        <h3>Front-End Skills</h3>
        <p>
          I am proficient in front-end technologies. I love creating
          user-friendly websites with interactive elements and stylish designs.
        </p>
        <ul className="mt-4 flex flex-row flex-wrap space-x-2 justify-between max-w-2xl">
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoHtml5 className="text-[54px] text-center" />
            <p>Html</p>
          </li>
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoCss3 className="text-[54px] text-center" />
            <p>CSS</p>
          </li>
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoJavascript className="text-[54px] text-center" />
            <p>Javascript </p>
          </li>
        </ul>
        <ul className="my-4 flex flex-row flex-wrap space-x-2 justify-between max-w-2xl">
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoTypescript className="text-[54px] text-center" />
            <p>Typescript</p>
          </li>
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoReact className="text-[54px] text-center" />
            <p>React</p>
          </li>
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoTailwindCss className="text-[54px] text-center" />
            <p>Tailwind</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Back-End Skills</h3>
        <ul className="my-4 flex flex-row flex-wrap space-x-2 justify-between max-w-2xl">
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoNodejs className="text-[54px] text-center" />
            <p>Nodejs</p>
          </li>
          <li className="border h-28 w-28 rounded flex flex-col  justify-center items-center">
            <BiLogoMongodb className="text-[54px] text-center" />
            <p>Mongodb</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
