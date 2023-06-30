"use client"

import styles from "./page.module.css";
import { useThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
    //   const { toggle,mode } = useContext(ThemeContext);
    const { toggle, mode } = useThemeContext()
    return (
        <div className={styles.container}
            onClick={toggle}
        >
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    );
};

export default DarkModeToggle;