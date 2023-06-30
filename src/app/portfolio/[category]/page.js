import styles from "./page.module.css";
import Button from '@/components/Button/button';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { items } from "./data";


const Category = ({ params }) => {
    const data = getData(params.category);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {data.map((item) => (
                <div key={item.id} className={styles.item}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.decs}</p>
                        <Button text="See More" url="#" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            fill={true}
                            src={item.image}
                            alt=""
                        />
                    </div>
                </div>
            ))}


        </div>
    );

}

export default Category
const getData = (cat) => {
    const data = items[cat]
    if (data) {
        return data
    }
    return notFound()
}