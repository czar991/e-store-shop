import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Ошибка загрузки баннеров: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error('Произошла ошибка при загрузке баннеров:', error);
    throw error;
  }
};

export default getBillboard;
