import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Продукт',
};

export async function generateStaticParams() {
	return firstLevelMenu.map(m => ({type: m.route}));
}

export default async function Page({params}: PageProps<'/[type]'>) {
	const Params = await params.then(p => p);
	const firstCategoryItem = firstLevelMenu.find(m => m.route == Params.type);
  
  if (!firstCategoryItem) {
    notFound();
  }

	return (
		<div >
			Type: {firstCategoryItem.name}
		</div>
	);
}
