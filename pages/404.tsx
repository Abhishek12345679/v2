import Navbar from "../components/Navbar";

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute h-[calc(100%_-_60px)] w-full bg-[url('/src/assets/images/404.jpg')] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default PageNotFound;
