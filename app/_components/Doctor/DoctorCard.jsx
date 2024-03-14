import Image from "next/image";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
  return (
    <div
      className="border-[1px] p-4 rounded-lg hover:border-primary transition-all group"
      key={doctor.id}
    >
      <div className="h-[200px] overflow-hidden mb-2">
        <Image
          className="h-[200px] object-cover rounded-sm  group-hover:scale-105 transition-all"
          src={doctor.attributes.Image.data.attributes.url}
          width={600}
          height={200}
          alt="Doctor Image"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-[11px] bg-blue-50 p-2 px-3 w-fit rounded-full text-primary">
            {doctor.attributes.category.data.attributes.Name}
          </p>
          <h3 className="font-bold">{doctor.attributes.Name}</h3>
          <p className="text-primary">{doctor.attributes.Year_of_experience}</p>
          <p className="text-gray-400 font-light line-clamp-1 text-[15px]">
            {doctor.attributes.Address}
          </p>
        </div>
        <Link
          href={"/details/" + doctor.id}
          className="text-center p-1 border-primary border-[1px] rounded-full text-primary mt-3 hover:bg-primary hover:text-white transition-all"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
