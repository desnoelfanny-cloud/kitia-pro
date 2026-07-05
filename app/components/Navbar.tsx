import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="logo">
        KitIA Pro
      </Link>

      <nav className="navLinks">
        <Link href="/">Accueil</Link>
        <Link href="/recrutia">RecrutIA</Link>
        <Link href="/tarifs">Tarifs</Link>
        <Link href="/connexion" className="navButton">
          Connexion
        </Link>
      </nav>
    </header>
  );
}
