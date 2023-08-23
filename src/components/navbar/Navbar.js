'use client'
import Link from 'next/link';
import styles from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/page';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];
const Navbar = () => {
    const session = useSession()
    const [isActive, setIsActive] = useState(1)
    console.log(isActive)
    return (
        <div className={styles.container}>
            <Link href='/'
                className={styles.logo}
            >AbdoBlog</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link, i) => {
                    return <Link
                        style={{ color: isActive === i + 1 ? '#53c28b' : 'white' }}
                        onClick={() => setIsActive(link.id)}
                        key={link.id}
                        className={styles.link}
                        href={link.url}>{link.title}</Link>
                })}
                {
                    session.status === 'authenticated' &&
                    <button
                        className={styles.logout}
                        onClick={() => signOut()}
                    >Logout</button>}
            </div>
        </div>
    )
}

export default Navbar