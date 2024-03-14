const Loading1 = () => {
  return (
    <div className="border-[1px] rounded-xl p-3 col-span-6 lg:col-span-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-lg w-full h-[300px] bg-gray-200 animate-pulse"></div>
        <div className="flex flex-col gap-3 p-3">
          <h2 className="h-6 w-[250px] bg-gray-200 rounded-lg animate-pulse"></h2>
          <p className="h-6 w-[300px] bg-gray-200 rounded-lg animate-pulse"></p>
          <p className="h-6 w-[300px] bg-gray-200 rounded-lg animate-pulse"></p>
          <p className="h-6 w-[120px] bg-gray-200 rounded-lg animate-pulse"></p>
        </div>
      </div>
      <div className="border-[1px] rounded-xl p-5 col-span-4 mt-3">
        <h2 className="text-xl font-bold mb-5">About</h2>
        <p className="h-6 w-lg bg-gray-200 animate-pulse rounded-lg"></p>
      </div>
    </div>
  );
};

export default Loading1;
