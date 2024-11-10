// components/Layout.js
import Image from 'next/image';
import Header from './component/Header';

export default function Layout() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white to-black">
     <Header />
    </div>
  );
}
