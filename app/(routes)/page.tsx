import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/ProductList';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/conteiner';

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('a8e4819d-a0e3-48e0-b512-63e6c4314681');

  return (
    <Container>
      <div className='space-y-10 pb-10 pt-20'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
