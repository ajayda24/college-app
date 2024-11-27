const DashboardPage = () => {
  return (
    <div className="mt-20 max-h-[20rem] px-4 w-full grid grid-cols-[1fr,1fr,1fr,1fr] md:grid-cols-[2fr,2fr,1fr,1fr] grid-rows-4 sm:grid-rows-3 md:grid-rows-2 gap-3">
      <div className=" col-span-full md:col-span-2 row-span-2 bg-blue-300 ">
        1
      </div>
      <div className=" md:col-start-3 col-span-2 sm:col-span-1  bg-green-300">
        2
      </div>
      <div className=" md:col-start-4 col-span-2 sm:col-span-1  bg-green-300">
        3
      </div>
      <div className=" md:col-start-3 col-span-2 sm:col-span-1  bg-green-300">
        4
      </div>
      <div className=" md:col-start-4 col-span-2 sm:col-span-1  bg-green-300">
        5
      </div>
    </div>
  );
};
export default DashboardPage;
