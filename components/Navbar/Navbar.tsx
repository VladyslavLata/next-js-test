import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navbar.module.scss";


const nav = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "Posts", path: "/posts" },
  { id: "3", title: "Contacts", path: "/contacts" },
];


export const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navigation}>
      <div>Logo</div>
      <ul className={styles.nav_list}>
        {nav.map(({ id, title, path }) => {
          return (
            <li key={id}>
              <Link href={path} className={pathname === path ? `${styles.link} ${styles.active}` : styles.link  } >
                {title}
              </Link>
            </li>
          );
        })}
      </ul> 
    </nav>
  );
};
