import Image from 'next/image';
import styles from './page.module.css'
import Link from 'next/link';

const Blog = () => {
    // const data = await getData();
    return (
        <div className={styles.mainContainer}>

            <Link
                // href={`/blog/${item._id}`}
                href={`/blog/testid`}
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
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur em eligendi totam corporis velit laborum, libero repellendus culpa nihil corrupti officiis magnam accusamus modi tempore earum maxime consequatur. </p>
                </div>
            </Link>
            <Link
                // href={`/blog/${item._id}`}
                href={`/blog/testid`}
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
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur em eligendi totam corporis velit laborum, libero repellendus culpa nihil corrupti officiis magnam accusamus modi tempore earum maxime consequatur. </p>
                </div>
            </Link>
            <Link
                // href={`/blog/${item._id}`}
                href={`/blog/testid`}
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
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur em eligendi totam corporis velit laborum, libero repellendus culpa nihil corrupti officiis magnam accusamus modi tempore earum maxime consequatur. </p>
                </div>
            </Link>
            <Link
                // href={`/blog/${item._id}`}
                href={`/blog/testid`}
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
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur em eligendi totam corporis velit laborum, libero repellendus culpa nihil corrupti officiis magnam accusamus modi tempore earum maxime consequatur. </p>
                </div>
            </Link>

        </div>
    );
};

export default Blog