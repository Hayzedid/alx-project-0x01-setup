import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-white text-xl font-bold">{name.charAt(0)}</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">@{username}</p>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <span className="font-medium text-gray-700 w-16">Email:</span>
          <span className="text-gray-600">{email}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-700 w-16">Phone:</span>
          <span className="text-gray-600">{phone}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-700 w-16">Website:</span>
          <a href={`https://${website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-16">Address:</span>
          <div className="text-gray-600">
            <div>{address.street}, {address.suite}</div>
            <div>{address.city}, {address.zipcode}</div>
          </div>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-16">Company:</span>
          <div className="text-gray-600">
            <div className="font-medium">{company.name}</div>
            <div className="text-xs italic">"{company.catchPhrase}"</div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <span className="text-xs text-gray-500">User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
