import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function DoctorCard({ doctor }) {
  return (
    <div className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all group bg-white">
      <Image
        src={doctor.image} // هنا التغيير: نستخدم المسار المباشر للصورة
        alt={doctor.name}
        width={500}
        height={200}
        className="h-[200px] w-full object-cover rounded-lg group-hover:scale-105 transition-all"
      />
      
      <div className="mt-3 items-baseline flex flex-col gap-2">
        <span className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary font-bold">
          {doctor.category}
        </span>
        
        <h2 className="font-bold text-lg">{doctor.name}</h2>
        
        <h2 className="text-primary text-sm font-medium">
          {doctor.year_of_experience} Experience
        </h2>
        
        <h2 className="text-gray-500 text-sm flex items-center gap-1">
            {/* يمكنك إضافة أيقونة موقع هنا */}
           📍 New York, USA
        </h2>

        <Link href={`/details/${doctor.id}`} className="w-full">
           <Button className="w-full rounded-full mt-2" variant="outline">Book Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;