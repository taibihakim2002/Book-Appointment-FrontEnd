const Loading = () => {
  return (
    <>
      <div className=" rounded-md w-36 h-28 hidden lg:block bg-gray-200 animate-pulse"></div>
      <div className=" rounded-md w-36 h-28 hidden lg:block bg-gray-200 animate-pulse"></div>
      <div className=" rounded-md w-36 h-28 hidden md:block bg-gray-200 animate-pulse"></div>
      <div className=" rounded-md w-36 h-28 hidden sm:block bg-gray-200 animate-pulse"></div>
      <div className=" rounded-md w-36 h-28 bg-gray-200 animate-pulse"></div>
      <div className=" rounded-md w-36 h-28 bg-gray-200 animate-pulse"></div>
    </>
  );
};

export default Loading;
