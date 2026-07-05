import Link from "next/link";

export default function Navbar() {
  return (
    <header
  className="navbar"
  style={{
    background: "red",
    padding: "50px"
  }}
>
      <div className="logo">
        <div className="logoIcon">K</div>
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
