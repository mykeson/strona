import Link from "next/link";

export default function Nawigacja() {
  const navLinks = [
    {
      text: "Kontakt",
      href: "/kontakt",
    },
    {
      text: "Realizacje",
      href: "/realizacje",
    },
    {
      text: "O mnie",
      href: "/o-mnie",
    },
  ];

  return (
    <div className="fixed w-full">
      <nav className="flex justify-between items-center px-10 border-b bg-whity">
        <img
          src="mykeson_logo_black.svg"
          alt="mykeson_logo"
          width="190px"
        ></img>
        <ul className="flex flex-row-reverse gap-20 text-blacky font-normal text-lg">
          {navLinks.map((link, i) => (
            <NavElement key={i} text={link.text} href={link.href} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function NavElement(props) {
  return (
    <li>
      <Link href={props.href}>{props.text}</Link>
    </li>
  );
}
