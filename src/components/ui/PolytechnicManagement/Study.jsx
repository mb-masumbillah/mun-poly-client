import learningHands from '../../../assets/learningHands.png';
import Instructor from '../../../assets/Instructor.png';
import curriculum from '../../../assets/curriculum.png';
import growth from '../../../assets/growth.png';
import upCurve from '../../../assets/upCurve.png';
import downCurve from '../../../assets/downCurve.png';
import Button from '../Buttons/Button';

const Study = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="wrapper">
        <h2 className="text-primary text-2xl font-semibold ml-4 sm:ml-12 mt-10">
          Why Study with us?
        </h2>

        {/* studies card start */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={learningHands} alt="" className="w-10 h-10" />
              <img src={upCurve} alt="" className="w-6 h-6" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Hands-On learning</h3>
            <p className="text-center sm:text-left">Real skills through practical, lab-based education.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={Instructor} alt="" className="w-10 h-10" />
              <img src={downCurve} alt="" className="w-6 h-6" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Expert Instructor</h3>
            <p className="text-center sm:text-left">Learn from experienced, supportive professionals.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={curriculum} alt="" className="w-10 h-10" />
              <img src={upCurve} alt="" className="w-6 h-6" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Industry-Ready Curriculum</h3>
            <p className="text-center sm:text-left">Programs aligned with today’s job market.</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={growth} alt="" className="w-10 h-10" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Career-Focused Growth</h3>
            <p className="text-center sm:text-left">We prepare you for jobs, higher studies, and success.</p>
          </div>
        </div>
        {/* studies card end */}

        <div className="flex justify-center mt-8 sm:ml-12">
          <Button text="Admission Now" />
        </div>
      </div>
    </section>
  );
};

export default Study;
