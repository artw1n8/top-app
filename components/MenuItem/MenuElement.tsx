'use client';
import styles from './MenuElement.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';


export default function MenuElement({MENU, firstCategory}: {MENU: MenuItem[], firstCategory: TopLevelCategory}) {
	const [menu, setMenu]= useState<MenuItem[]>(MENU);
	const path = usePathname();

	const openSecondLevel = (secondCategory: string) => {
		setMenu(menu.map(m => {
			if(m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(menu => (
					<div key={menu.route}>
						<Link href={`/${menu.route}`}>
						<div className={cn(styles.firstLevel,{
							[styles.firstLevelActive]: menu.id === firstCategory
						} )}>
							{menu.icon}
							<span>{menu.name}</span>
						</div>
						</Link>
						{menu.id == firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if(m.pages.map(p => p.alias).includes(path.split('/')[2])) {
						m.isOpened = true;
					}
					return <div key={m._id.secondCategory}>
						<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>;
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link href={`/${route}/${p.alias}`} key={p.title} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p.alias}` === path
				})}>
					{p.category}
				</Link>
			))
		);
	};

	return (
		<div className={styles.menu}>
				{buildFirstLevel()}
		</div>
	);
}