"use client";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  // بيانات وهمية للأطباء (تم تبسيط الهيكل ليكون مباشراً بدون attributes)
  const doctorList = [
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
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12 p-5">
        <h2 className="text-4xl font-bold mb-4">
          Popular <span className="text-primary">Doctors</span>
        </h2>
        <p className="font-light text-gray-500">
          Popular Doctors In Our Website
        </p>
      </div>
      
      <div className="container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {doctorList.length > 0 ? (
          doctorList.map((doctor) => {
            return <DoctorCard key={doctor.id} doctor={doctor} />;
          })
        ) : (
          // هذا الجزء لن يظهر لأن البيانات موجودة دائماً، لكن يمكن تركه كاحتياط
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;