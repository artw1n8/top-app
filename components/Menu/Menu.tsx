import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interfaces/page.interface';
import MenuElement from '../MenuItem/MenuElement';

export default async function Menu() {
	const firstCategory = TopLevelCategory.Courses;
	const menu = await getMenu(firstCategory);
	if(!menu) return <>Menu not found</>;

	return (
		<MenuElement MENU={menu} firstCategory={firstCategory} />
	);
}