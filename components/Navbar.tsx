import Link from 'next/link';
import Container from './ui/conteiner';
import MainNav from './MainNav';
import getCategories from '@/actions/get-categories';
import NavbarActions from './NavbarActions';

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className='border-b fixed t-0 l-0 w-full z-50 shadow-sm bg-transparent backdrop-blur-md'>
      <Container>
        <div className='px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2 font-bold text-xl'>
            STORE
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
