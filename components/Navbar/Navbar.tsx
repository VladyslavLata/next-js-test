import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "../../public/logo9.png";

const nav = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "Posts", path: "/posts" },
  { id: "3", title: "Contacts", path: "/contacts" },
];

export const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navigation}>
      <div>
        <Link href="/">
          <Image src={logo} width={40} height={40} alt="logo" />
        </Link>
      </div>
      <ul className={styles.nav_list}>
        {nav.map(({ id, title, path }) => {
          return (
            <li key={id} className={styles.item}>
              <Link
                href={path}
                className={
                  pathname === path || pathname.includes(title.toLowerCase())
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
