import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Продукт',
};

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));
}

export default async function PageProduct({params}: PageProps<'/products/[alias]'>) {
	const Params = await params.then(p => p.alias);
	const page = await getPage(Params);
	if(!page) {
		notFound();
	}

	return (
		<div >
			Страница с alias {page.title}
		</div>
	);
}
