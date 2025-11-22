"use client";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  GraduationCap,
  Instagram,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Book from "./Book";

const Details = ({ params }) => {
  // 1. بيانات وهمية شاملة (تتضمن الوصف والعنوان)
  const allDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      category: "Dentist",
      year_of_experience: "10 Years",
      address: "123 Dental St, New York",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      about: "Dr. Sarah is a highly skilled dentist with over 10 years of experience in cosmetic and restorative dentistry. She is dedicated to providing pain-free treatments and creating beautiful smiles for her patients."
    },
    {
      id: 2,
      name: "Dr. Mark Lee",
      category: "Cardiologist",
      year_of_experience: "8 Years",
      address: "45 Heart Ave, Chicago",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      about: "Dr. Mark specializes in cardiovascular health, focusing on preventative care and advanced cardiac procedures. He is known for his compassionate approach and thorough diagnostics."
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      category: "Neurologist",
      year_of_experience: "15 Years",
      address: "88 Brain Blvd, San Francisco",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
      about: "With 15 years of experience, Dr. Emily is an expert in treating neurological disorders. She is actively involved in research and uses the latest technology to treat her patients."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      category: "Orthopedic",
      year_of_experience: "12 Years",
      address: "56 Bone St, Miami",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      about: "Dr. James is a renowned orthopedic surgeon specializing in sports injuries and joint replacements. He works with professional athletes to help them recover and return to peak performance."
    },
    {
      id: 5,
      name: "Dr. Linda Martinez",
      category: "Otology",
      year_of_experience: "6 Years",
      address: "22 Ear Ln, Houston",
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=800&auto=format&fit=crop",
      about: "Dr. Linda focuses on ear disorders and hearing loss. She provides comprehensive hearing evaluations and treatments for patients of all ages."
    },
    {
      id: 6,
      name: "Dr. Robert Fox",
      category: "General",
      year_of_experience: "20 Years",
      address: "99 Health Way, Seattle",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
      about: "Dr. Robert is a dedicated general practitioner with two decades of experience. He believes in holistic care and building long-term relationships with his patients."
    },
    // عنصر إضافي لتجربة "Related Doctors"
    {
        id: 7,
        name: "Dr. Alice Brown",
        category: "Dentist", 
        year_of_experience: "4 Years",
        address: "101 Smile Rd, New York",
        image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=800&auto=format&fit=crop",
        about: "Dr. Alice is passionate about pediatric dentistry and making children feel comfortable during their visits."
      },
  ];

  // 2. البحث عن الطبيب الحالي بناءً على ID من الرابط
  // نستخدم == بدلاً من === لأن params.id قد يكون string و item.id رقم
  const doctor = allDoctors.find((item) => item.id == params.id);

  // 3. البحث عن الأطباء المرتبطين (نفس التخصص ولكن ليس نفس الطبيب الحالي)
  const relatedDoctors = doctor 
    ? allDoctors.filter((item) => item.category === doctor.category && item.id !== doctor.id)
    : [];

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 lg:grid-cols-6 gap-5">
      {doctor ? (
        <>
          {/* تفاصيل الطبيب - العمود الأيمن الكبير */}
          <div className="border-[1px] rounded-xl p-3 col-span-6 lg:col-span-4 flex flex-col gap-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Image
                className="rounded-lg w-full h-[300px] object-cover"
                src={doctor.image}
                width={400}
                height={250}
                alt={doctor.name}
              />
              <div className="flex flex-col gap-3 p-3">
                <h2 className="font-bold text-2xl">{doctor.name}</h2>
                
                <div className="font-light text-gray-500 flex gap-2 items-center">
                  <GraduationCap size={18} />
                  <span>{doctor.year_of_experience} Of Experience</span>
                </div>
                
                <div className="font-light text-gray-500 flex gap-2 items-center">
                  <MapPin size={18} />
                  <span>{doctor.address}</span>
                </div>
                
                <span className="text-[11px] bg-blue-50 p-2 px-3 w-fit rounded-full text-primary font-bold">
                  {doctor.category}
                </span>

                <div className="flex gap-3 mt-2">
                  <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:text-primary transition-all">
                     <Facebook size={20} />
                  </div>
                  <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:text-primary transition-all">
                    <Twitter size={20} />
                  </div>
                  <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:text-primary transition-all">
                    <Instagram size={20} />
                  </div>
                </div>

                {/* مكون الحجز */}
                <Book doctor={doctor} />
              </div>
            </div>

            {/* قسم "عن الطبيب" */}
            <div className="border-[1px] rounded-xl p-5 mt-3 bg-slate-50">
              <h2 className="text-xl font-bold mb-3">About Me</h2>
              <p className="text-gray-500 font-[300] leading-[1.8]">
                {doctor.about}
              </p>
            </div>
          </div>
        </>
      ) : (
        // في حال لم يتم العثور على الطبيب (ID خاطئ)
        <div className="col-span-6 text-center py-20">
            <h2 className="text-2xl text-gray-400">Doctor not found</h2>
        </div>
      )}

      {/* القائمة الجانبية - أطباء مقترحون */}
      <div className="col-span-6 lg:col-span-2 p-4 border-[1px] rounded-xl flex flex-col gap-4 bg-white h-fit">
        <h2 className="font-bold text-lg">Related Doctors</h2>
        {relatedDoctors.length > 0 ? (
            relatedDoctors.map((item) => {
            return (
              <Link
                href={"/details/" + item.id}
                className="group relative grid grid-cols-3 border-[1px] rounded-lg p-2 gap-3 w-full hover:border-primary hover:shadow-sm transition-all bg-white"
                key={item.id}
              >
                {/* الصورة */}
                <Image
                  className="col-span-1 h-[100px] w-full object-cover rounded-lg"
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                />
                
                {/* التفاصيل */}
                <div className="col-span-2 flex flex-col gap-1 justify-center">
                  <h2 className="font-bold text-sm group-hover:text-primary transition-colors">{item.name}</h2>
                  <p className="text-[10px] bg-blue-50 p-1 px-2 w-fit rounded-full text-primary font-medium">
                    {item.category}
                  </p>
                  <div className="font-light text-gray-500 flex gap-1 items-center text-[12px]">
                    <GraduationCap size={14} />
                    <span>{item.year_of_experience}</span>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
            <p className="text-gray-400 text-sm text-center py-5">No related doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default Details;