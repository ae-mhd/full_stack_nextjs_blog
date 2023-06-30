import styles from "./page.module.css";
import Button from '@/components/Button/button';
import Image from 'next/image';
import React from 'react'

const Category = ({ params }) => {
    // const data = getData(params.category);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi accusamus eos aut, numquam facilis aliquam? Odit necessitatibus aspernatur ipsum, praesentium ducimus vero natus unde eum expedita voluptates iure explicabo! </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src='https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi accusamus eos aut, numquam facilis aliquam? Odit necessitatibus aspernatur ipsum, praesentium ducimus vero natus unde eum expedita voluptates iure explicabo! </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src='https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi accusamus eos aut, numquam facilis aliquam? Odit necessitatibus aspernatur ipsum, praesentium ducimus vero natus unde eum expedita voluptates iure explicabo! </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src='https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi accusamus eos aut, numquam facilis aliquam? Odit necessitatibus aspernatur ipsum, praesentium ducimus vero natus unde eum expedita voluptates iure explicabo! </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src='https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=""
                    />
                </div>
            </div>

        </div>
    );

}

export default Category