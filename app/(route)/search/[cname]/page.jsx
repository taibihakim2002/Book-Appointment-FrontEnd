"use client";
import DoctorCard from "@/app/_components/Doctor/DoctorCard";
import React from "react";

const Page = ({ params }) => {
  // 1. الحصول على اسم القسم من الرابط وفك تشفيره (لإزالة %20 واستبدالها بمسافة)
  const categoryName = decodeURIComponent(params.cname);

  // 2. قائمة البيانات الوهمية الشاملة (Master List)
  const allDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      category: "Dentist",
      year_of_experience: "10 Years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Dr. Mark Lee",
      category: "Cardiologist",
      year_of_experience: "8 Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      category: "Neurologist",
      year_of_experience: "15 Years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      category: "Orthopedic",
      year_of_experience: "12 Years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Dr. Linda Martinez",
      category: "Otology",
      year_of_experience: "6 Years",
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Dr. Robert Fox",
      category: "General",
      year_of_experience: "20 Years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    },
    // يمكنك تكرار البيانات أو إضافة المزيد لتجربة الفلترة بشكل أفضل
    {
        id: 7,
        name: "Dr. Alice Brown",
        category: "Dentist", // طبيب أسنان آخر لتجربة الفلترة
        year_of_experience: "4 Years",
        image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=800&auto=format&fit=crop",
      },
  ];

  // 3. تصفية الأطباء بناءً على القسم المختار
  const filteredDoctors = allDoctors.filter(
    (doctor) => doctor.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-5">
      <div className="ms-2 mb-5">
        <h1 className="font-bold text-2xl text-primary capitalize">
           {categoryName} <span className="text-gray-500 text-lg font-normal">Specialists</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => {
            return <DoctorCard key={doctor.id} doctor={doctor} />;
          })
        ) : (
          // رسالة في حال لم يوجد أطباء في هذا القسم
          <div className="col-span-full text-center py-20 text-gray-400">
            <h2 className="text-xl">No doctors found for {categoryName}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;