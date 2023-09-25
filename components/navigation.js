import Link from "next/link";
export default function Navigation() {
  return (
    <nav className=" py-4 bg-red-400 w-full max-w-4xl ">
      <ul className=" flex justify-between max-w-4xl">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#skills"> Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
