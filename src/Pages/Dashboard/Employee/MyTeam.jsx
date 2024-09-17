import { useLoaderData } from "react-router-dom";
import { FaEnvelope, FaBuilding, FaGift, FaUserTie } from "react-icons/fa";

const MyTeam = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="container mx-auto py-24">
      <h3 className="text-3xl font-bold text-center mb-6">My Team Mates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div key={index} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-200 p-4">
              <img
                src={user.companyLogo}
                alt={`${user.company} Logo`}
                className="w-16 h-16 rounded-full mx-auto"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-center">{user.name}</h2>
              <p className="text-center text-gray-600 mb-4">
                <FaUserTie className="inline-block mr-1 text-green-500" /> {user.role}
              </p>

              <div className="flex items-center justify-start mb-2 gap-1">
                <FaBuilding className="text-gray-500" />
                <p className="text-gray-800">{user.company}</p>
              </div>

              <div className="flex items-center justify-start gap-1 mb-2">
                <FaEnvelope className="text-gray-500" />
                <p className="text-gray-800">{user.email}</p>
              </div>

              <div className="flex items-center justify-start gap-1 mb-2">
                <span className="text-gray-500">DOB:</span>
                <p className="text-gray-800">{new Date(user.dob).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
