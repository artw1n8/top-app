import { getMenu } from '@/api/menu';
import styles from './Menu.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import Link from 'next/link';
import build from 'next/dist/build';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
	{route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products},
];

export default async function Menu() {
	const firstCategory = TopLevelCategory.Courses;
	const menu = await getMenu(0);

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
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link href={`/${route}/${p.alias}`} key={p.title} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
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