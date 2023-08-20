import Image from 'next/image';
import styles from './page.module.css'
import Link from 'next/link';
import { notFound } from 'next/navigation'

const Blog = async () => {
    const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {data.map(post => (
                <Link
                    key={post.id}
                    href={`/blog/${post._id}`}
                    // href={`/blog/testid`}
                    className={styles.container} >
                    <div className={styles.imageContainer}>
                        <Image
                            src={post.img}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{post.title} </h1>
                        <p className={styles.desc}>{post.content} </p>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default Blog

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}