import computer from '../../assets/computer.png';
import Electrical from '../../assets/Electrical.png';
import Mechanical from '../../assets/Mechanical.png';
import Civil1 from '../../assets/Civil1.png';
import Electronics from '../../assets/Electronics.png';
import RAC from '../../assets/RAC.png';
import ElectroMedical from '../../assets/Electro-Medical.png';
import banner from '../../assets/banner.png';
import { useNavigate } from 'react-router-dom';
import LargeBtn from '../../components/ui/Buttons/LargeBtn';

const AcademicPage = () => {
  const navigate = useNavigate();
  const departments = [
    { img: computer, name: 'Computer Science and Technology', link: '/cst' },
    { img: Electrical, name: 'Electrical Technology', link: null },
    { img: Mechanical, name: 'Mechanical Technology', link: null },
    { img: Civil1, name: 'Civil Technology', link: null },
    { img: Electronics, name: 'Electronics Technology', link: null },
    { img: RAC, name: 'Refrigeration & Air Conditioning Technology', link: null },
    { img: ElectroMedical, name: 'Electro-medical Technology', link: null },
  ];

  return (
    <section className="wrapper px-4 sm:px-6 md:px-10">
      {/* Banner */}
      <div
        className="relative w-full h-60 sm:h-72 md:h-96 flex justify-center items-center bg-cover bg-center rounded-2xl hover:scale-105 duration-400 mt-5"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-6xl text-gray-200 font-semibold text-center px-2">
          Here is our All Departments
        </h2>
      </div>

      <h2 className="text-primary text-2xl font-semibold my-8 sm:my-10 text-center sm:text-left">
        Our Departments !
      </h2>

      {/* Department Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-300 shadow-2xl p-4 rounded-lg flex flex-col justify-between"
          >
            <img src={dept.img} alt={dept.name} className="mx-auto w-28 h-28 object-contain" />
            <h3 className="py-4 font-semibold text-center text-lg">{dept.name}</h3>
            <div className="w-full flex justify-center">
              <LargeBtn
                text="View Details"
                onClick={() => dept.link && navigate(dept.link)}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicPage;
