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
                    href={`/blog/${post.id}`}
                    // href={`/blog/testid`}
                    className={styles.container} >
                    <div className={styles.imageContainer}>
                        <Image
                            src='https://images.pexels.com/photos/17131205/pexels-photo-17131205/free-photo-of-food-wood-restaurant-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{post.title} </h1>
                        <p className={styles.desc}>{post.body} </p>
                    </div>
                </Link>
            ))}



        </div>
    );
};

export default Blog

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return notFound()

    }

    return res.json()
}