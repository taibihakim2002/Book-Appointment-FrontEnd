import CategoryList from "./_compenents/categoryList";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-5 grid grid-cols-4 gap-3">
      <div className="hidden sm:block sm:col-span-2 md:col-span-1">
        <CategoryList />
      </div>
      <div className="col-span-4 sm:col-span-2 md:col-span-3 ">{children}</div>
    </div>
  );
};

export default Layout;
