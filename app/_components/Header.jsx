import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  // محاكاة حالة المستخدم
  const isUserLoggedIn = false; 

  const Menu = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Find Doctor", path: "/search/General" }, 
    { id: 3, title: "About Us", path: "/about" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  return (
    <div className="h-[70px] flex items-center shadow-sm bg-white sticky top-0 z-50">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex gap-10 items-center">
          {/* اللوغو مع الاسم */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <h1 className="font-bold text-2xl text-slate-800 tracking-wide">
                Medi<span className="text-primary">Doctor</span>
            </h1>
          </Link>
          
          <ul className="hidden md:flex gap-8">
            {Menu.map((item) => {
              return (
                <Link href={item.path} key={item.id}>
                  <li className="hover:text-primary font-medium hover:scale-105 transition-all text-sm cursor-pointer">
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {isUserLoggedIn ? (
            <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 p-2 rounded-full transition-all">
               <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  JD
               </div>
               <span className="text-sm font-medium text-gray-700 hidden sm:block">John Doe</span>
            </div>
          ) : (
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;