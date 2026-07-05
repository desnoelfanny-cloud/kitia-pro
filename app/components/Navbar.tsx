import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <div className="logoIcon">

  <div className="piece p1"></div>
  <div className="piece p2"></div>
  <div className="piece p3"></div>
  <div className="piece p4"></div>

</div>
        <span>KitIA Pro</span>
      </div>

      <nav className="menu">
        <Link href="/">Accueil</Link>
        <Link href="/fonctionnalites">Fonctionnalités</Link>
        <Link href="/assistants">Assistants IA</Link>
        <Link href="/tarifs">Tarifs</Link>
        <Link href="/ressources">Ressources</Link>
      </nav>

      <div className="actions">
        <Link href="/connexion" className="btnSecondary">
          Se connecter
        </Link>

        <Link href="/dashboard" className="btnPrimary">
          Essayer gratuitement
        </Link>
      </div>
    </header>
  );
}
