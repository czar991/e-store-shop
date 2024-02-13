interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className='mx-auto max-w-7xl w-full'>{children}</div>;
};

export default Container;
