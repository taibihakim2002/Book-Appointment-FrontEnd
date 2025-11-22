import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/toaster";

// إعداد الخط بأوزان مختلفة للنصوص العادية والعريضة
const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// بيانات الموقع الحقيقية لتحسين محركات البحث (SEO)
export const metadata = {
  title: "MediDoctor | Find & Book Appointments",
  description: "The easiest way to book appointments with the best doctors, dentists, and specialists near you. Trusted by thousands of patients.",
  keywords: ["Doctor", "Booking", "Appointment", "Health", "Clinic", "Dentist"],
  openGraph: {
    title: "MediDoctor - Your Health Partner",
    description: "Book your doctor appointment online instantly.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {/* محتوى الصفحات المتغير */}
        <main className="min-h-screen bg-white">
          {children}
        </main>

        
        {/* مكون الإشعارات ليظهر فوق أي صفحة */}
        <Toaster />
      </body>
    </html>
  );
}


