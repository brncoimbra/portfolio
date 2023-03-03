import { Pokedex, Rating } from "../assets";

function Work() {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS Pokedex
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://react-pokedex-gamma-one.vercel.app'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/brncoimbra/react-pokedex'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Rating})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS Rating-Project
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://rating-project-kappa.vercel.app'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/brncoimbra/rating-project'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS Pokedex
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://react-pokedex-gamma-one.vercel.app'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/brncoimbra/react-pokedex'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Rating})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS Rating-Project
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://rating-project-kappa.vercel.app'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/brncoimbra/rating-project'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS Pokedex
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://react-pokedex-gamma-one.vercel.app'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/brncoimbra/react-pokedex'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Rating})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS Rating-Project
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://rating-project-kappa.vercel.app'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/brncoimbra/rating-project'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
