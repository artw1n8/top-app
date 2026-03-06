import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/products';
import { TopPageComponent } from '@/components/TopPageComponent/TopPageComponent';
import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Продукт',
};

export async function generateStaticParams() {
	let paths: { type: string, alias: string }[] = [];
  
  for (const m of firstLevelMenu) {
    const menu = await getMenu(m.id);
    
    const menuPaths = menu.flatMap(s => s.pages.map(p => ({
      type: m.route,
      alias: p.alias
    })));
    paths = paths.concat(menuPaths);
  }
  return paths;
}

export default async function TopPage({params}: PageProps<'/[type]/[alias]'>) {
	const Params = await params.then(p => p);
	const page = await getPage(Params.alias);
	if(!page) {
		notFound();
	}
	const firstCategoryItem = firstLevelMenu.find(m => m.route == Params.type);
	if(!firstCategoryItem) {
		notFound();
	}
	const products = await getProducts(page.category);

	return (
		<TopPageComponent 
		firstCategory={firstCategoryItem.id} 
		page={page} 
		products={products} 
		/>
	);
}
