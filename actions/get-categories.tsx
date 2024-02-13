import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Ошибка загрузки категорий: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error('Произошла ошибка при загрузке категорий:', error);
    throw error;
  }
};

export default getCategories;
