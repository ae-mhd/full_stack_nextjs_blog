import Image from 'next/image'
import styles from './page.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>&copy;2023 AbdoBlog. All rights reserved.</div>
            <div className={styles.social}>
                <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
                <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
                <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
                <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
            </div>
        </div>
    )
}

export default Footer