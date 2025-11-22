import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react"; 

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
  ];

  const links = [
    { title: "About Us", href: "/about" },
    { title: "Find a Doctor", href: "/search/General" },
    { title: "Apps", href: "#" }, // رابط وهمي للتطبيقات
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* الشعار */}
          <div className="flex justify-center text-primary mb-6">
             <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <h1 className="font-bold text-2xl text-slate-800 tracking-wide">
                Medi<span className="text-primary">Doctor</span>
            </h1>
          </Link>
          </div>

          {/* الوصف */}
          <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500 mb-8">
            MediDoctor is your trusted health partner. We connect patients with top-rated specialists for seamless appointment booking and better healthcare management anytime, anywhere.
          </p>

          {/* الروابط */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-8">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-gray-700 transition hover:text-primary font-medium text-sm"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* أيقونات التواصل الاجتماعي (استخدمت Lucide React للأناقة) */}
          <ul className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:text-primary hover:scale-110"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* حقوق النشر */}
        <div className="border-t pt-8 text-center">
            <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} MediDoctor. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;