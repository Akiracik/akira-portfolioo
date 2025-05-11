import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-lg bg-gradient flex items-center justify-center text-white font-bold text-xl">A</div>
      <span className="text-xl font-bold">Akira</span>
    </Link>
  );
};

export default Logo;