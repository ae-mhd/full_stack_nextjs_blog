'use client'
import styles from './page.module.css'
import useSWR from 'swr'

const Logs = () => {
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    console.log(data)
    return (
        <div className={styles.container}>Logs</div>
    )
}

export default Logs
const fetcher = (...args) => fetch(...args).then(res => res.json())