import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { userId } = auth();

  const Menu = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Explore", path: "/explore" },
    { id: 3, title: "About Us", path: "/about" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  return (
    <div className="h-[70px] flex items-center shadow-sm">
      <div className="container mx-auto px-5 flex justify-between">
        <div className="flex gap-20 items-center">
          <Image src="/logo.svg" alt="Logo" width={180} height={80} />
          <ul className="hidden md:flex gap-8">
            {Menu.map((item) => {
              return (
                <Link href={item.path}>
                  <li className="hover:text-primary font-light hover:scale-105 transition-all text-sm">
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        {userId ? <UserButton /> : <Button>Get Started</Button>}
      </div>
    </div>
  );
};

export default Header;
