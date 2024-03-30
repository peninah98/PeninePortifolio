import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Sliding() {
  return (
    <div className="w-full mx-auto relative overflow-x-hidden">
      <div className="grid grid-cols-2 items-center content-center mx-4 md:mx-8 lg:mx-16 my-4">
        <div className="flex justify-center items-center">
          <img
            src="./Monishare.png"
            key="3"
            alt="Young developers workspace"
            className="rounded-md w-3/4"
          />
        </div>

        <div className="flex flex-col justify-center space-y-8 border-2px-4 w-3/4 ">
          <h1 className="font-bold text-2xl pt-0">Young Developers</h1>
          <h2 className="text-lg text-justify">
            This project aims to provide young developers with a friendly
            introduction to programming, tailored to their age and abilities,
            making learning easy and enjoyable.
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1">
            Discover More
          </button>
        </div>
      </div>
    </div>
  )
}
