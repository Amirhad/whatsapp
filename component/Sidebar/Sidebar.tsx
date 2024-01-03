"use client"
import * as React from 'react';
import styles from '../../styles/Sidebar.module.scss'
import { SidebarMenu } from './SidebarMenu';

export const Sidebar: React.FC = () => {
    return (
        <div className={styles.container}>
            <SidebarMenu />
        </div>
    );
}