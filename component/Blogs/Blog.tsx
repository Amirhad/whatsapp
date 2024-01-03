import Link from '@/node_modules/next/link';
import React from 'react';
import styles from '../../styles/blogs.module.scss'
interface BlogProps {
    item: {
        id: number
        title: string
        blogs_text: string
    }
}

export const Blog: React.FC<BlogProps> = ({ item }) => {
    return (
        <div className={styles.blog}>
            <Link href={`/${item.id}`}>
            <h2>{item.title}</h2>

            </Link>

            <p>{item.blogs_text}</p>
        </div>
    );
}