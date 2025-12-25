import mupiImg from '../../../assets/mupi.png';
import Button1 from '../Buttons/Button1';

const AboutUs = () => {
  return (
    <section className="wrapper flex flex-col lg:flex-row justify-center items-center gap-10 px-4 py-10 lg:py-30">
      {/* left text */}
      <div className="text-left w-full lg:w-1/2 py-5 lg:py-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">About Us</h2>
        <p className="py-4 text-gray-400 leading-7 sm:leading-8">
          Munshiganj Polytechnic Institute is a center of technical excellence, empowering students
          with practical skills, industry-relevant knowledge, and a future-ready mindset. We focus
          on hands-on learning, modern technology, and professional development to help students
          build strong careers and contribute confidently to the nation’s growth.
        </p>
        <Button1 text="Learn More" />
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2 flex justify-center py-5 lg:py-10 hover:scale-105 duration-400">
        <img
          src={mupiImg}
          alt="MUPI"
          className="rounded-lg shadow-2xl w-full sm:w-[90%] h-auto"
        />
      </div>
    </section>
  );
};

export default AboutUs;
