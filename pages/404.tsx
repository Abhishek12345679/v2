import Navbar from "../components/Navbar";

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute h-[calc(100%_-_120px)] w-full bg-[url('/images/404.jpg')] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default PageNotFound;
