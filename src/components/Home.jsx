import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Bruno Coimbra
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-end Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm responsible for creating the visible and interactive parts of
          websites and web applications. I use my knowledge of HTML, CSS, and
          JavaScript to design and build user interfaces that are both visually
          appealing and functional.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
