import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-row justify-between">
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
