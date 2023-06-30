import styles from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation'

const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title} </h1>
                    <p className={styles.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptatum eveniet porro quasi autem ullam aperiam nisi fuga, consequuntur asperiores illo dolores laborum qui omnis ad accusantium aut deserunt explicabo?
                    </p>
                    <div className={styles.author}>
                        <Image
                            src='https://images.pexels.com/photos/17359258/pexels-photo-17359258/free-photo-of-sea-dawn-sunset-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>Test</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src='https://images.pexels.com/photos/17359258/pexels-photo-17359258/free-photo-of-sea-dawn-sunset-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data.body}
                </p>
            </div>
        </div>
    );
};

export default BlogPost
async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return notFound()
    }

    return res.json()
}