import Instructor from '../../assets/Instructors.png';
import CI1 from '../../assets/CI1.png';
import CI2 from '../../assets/CI2.png';
import Buttons from '../../components/ui/Buttons/Buttons';

const Instructors = () => {
  const teachers = [
    {
      img: CI1,
      name: 'Kaylynn Ekstrom Bothman',
      role: 'The Principal',
      phone: '+880 123456789',
      email: 'thechairmanmupi@gmai.com',
    },
    {
      img: CI2,
      name: 'Maren Rosser',
      role: 'The CI',
      phone: '+880 123456789',
      email: 'thechairmanmupi@gmai.com',
    },
  ];

  const allInstructors = [
    'Chief Instructor',
    'Instructor',
    'Jr. Instructor',
    'Non-Tech Instructor',
    'Lab Assistant',
  ];

  return (
    <section className="wrapper px-4 sm:px-6 md:px-10">
      {/* Banner */}
      <div
        className="relative w-full h-60 sm:h-72 md:h-96 flex justify-center items-center bg-cover bg-center rounded-2xl overflow-hidden hover:scale-105 duration-400 mt-5"
        style={{ backgroundImage: `url(${Instructor})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h2 className="text-xl sm:text-3xl md:text-6xl text-gray-100 font-semibold text-center px-2">
          Here is our prestigious Instructors
        </h2>
      </div>

      {/* Featured Teachers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {teachers.map((teacher, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-5 bg-white shadow-lg rounded-lg p-5 hover:scale-105 duration-300">
            <img src={teacher.img} alt={teacher.name} className="w-full sm:w-48 h-auto object-cover rounded-lg" />
            <div className="flex flex-col justify-between">
              <h3 className="text-2xl sm:text-3xl font-semibold">{teacher.name}</h3>
              <div className="my-4">
                <Buttons text={teacher.role} />
              </div>
              <div className="text-gray-700 text-sm sm:text-base flex flex-col gap-1">
                <span>Call: {teacher.phone}</span>
                <span>Mail: {teacher.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* All Instructors */}
      <h2 className="text-primary text-2xl font-semibold py-8">All Instructors</h2>
      <ul className="space-y-4">
        {allInstructors.map((inst, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 duration-300"
          >
            <p className="text-gray-900 text-lg">
              21-12-25 | {inst}
            </p>
            <Buttons text="Show Details" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Instructors;
