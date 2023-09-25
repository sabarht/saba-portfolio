import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <p>Each project is a unique piece of development</p>
      <div className="flex flex-row">
        {/* <Image
          src={myImage}
          alt="My Image"
          width={500} // Set the desired width
          height={300} // Set the desired height
        />{" "} */}
        <ul>
          <li>Project Name</li>
          <li>description</li>
          <li>React Tailwind</li>
          <li>
            <button>Github</button>
            <button>Live demo</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
