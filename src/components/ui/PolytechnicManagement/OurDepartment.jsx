import computer from '../../../assets/computer.png';
import Electrical from '../../../assets/Electrical.png';
import Mechanical from '../../../assets/Mechanical.png';
import Civil1 from '../../../assets/Civil1.png';
import Electronics from '../../../assets/Electronics.png';
import RAC from '../../../assets/RAC.png';
import ElectroMedical from '../../../assets/Electro-Medical.png';
import { useNavigate } from 'react-router-dom';
import LargeBtn from '../Buttons/LargeBtn';

const OurDepartment = () => {
  const navigate = useNavigate();
  return (
    <section className="wrapper">
      <h2 className="text-primary text-2xl font-semibold my-10 pl-3 sm:pl-0">
        Our Departments!
      </h2>

      {/* Department card start */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* CST */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={computer} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">
            Computer Science and Technology
          </h3>
          <div className="w-full flex justify-center">
            <LargeBtn
              onClick={() => navigate('/cst')}
              text="View Details"
              className="w-full"
            />
          </div>
        </div>

        {/* ET */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Electrical} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Electrical Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full" />
            
          </div>
        </div>

        {/* MT */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Mechanical} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Mechanical Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full" />
          </div>
        </div>

        {/* CIVIL */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Civil1} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Civil Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full" />
          </div>
        </div>

        {/* Electronics */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Electronics} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Electronics Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full" />
          </div>
        </div>

        {/* RAC */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={RAC} alt="" className="mx-auto" />
          <h3 className="py-3 font-semibold text-center">
            Refrigeration & Air Conditioning Technology
          </h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full" />
          </div>
        </div>

        {/* ElectroMedical */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={ElectroMedical} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Electro-medical Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full" />
          </div>
        </div>
      </div>
      {/* Department card end */}
    </section>
  );
};

export default OurDepartment;
