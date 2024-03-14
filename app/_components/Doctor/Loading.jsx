const Loading = () => {
  return (
    <>
      <div className="h-[300px] hidden lg:block bg-gray-200 animate-pulse rounded-md"></div>
      <div className="h-[300px] hidden md:block bg-gray-200 animate-pulse rounded-md"></div>
      <div className="h-[300px] hidden sm:block bg-gray-200 animate-pulse rounded-md"></div>
      <div className="h-[300px] bg-gray-200 animate-pulse rounded-md"></div>
    </>
  );
};

export default Loading;
