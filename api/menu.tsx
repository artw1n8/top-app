import { API } from '@/app/api';
import { MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

export async function getMenu(firstCategory: TopLevelCategory): Promise<MenuItem[]> {
  try {
    const res = await fetch(API.topPage.find, {
      method: 'POST',
      body: JSON.stringify({ firstCategory }),
      headers: new Headers({'content-type': 'application/json'}),
      next: {revalidate: 10},
    });
    
    if (!res.ok) {
      console.warn('API returned non-ok status');
      throw new Error('API returned non-ok status'); // Возвращаем null при плохом ответе
    }

    return res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
  
}