import { faker } from "@faker-js/faker";

const profiles = [...Array(30)].map((_, i) => ({
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  id: i,
}));
// console.log(profiles);
function Stories() {
  return (
    <div className="flex space-x-2 overflow-x-scroll p-2 scrollbar-thin scrollbar-thumb-gray-800 scroll-w bg-white scrollbar-track-white">
      {profiles.map((arr) => {
        return (
          <div className="flex flex-col max-w-14" key={arr.id}>
            <img
              src={arr?.avatar}
              className="h-14 max-w-14 rounded-full object-fit  p-[1.25px] border-orange-700 border-2  transition-all hover:scale-110 hover:border-dashed ease-in-out-out delay-75"
            />
            <span className="text-center truncate text-xs">{arr.username}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
