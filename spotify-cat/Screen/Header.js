import { useData } from "../External/Data";

export default function Header() {
  const [{ user }] = useData();
  return (
    <header className="flex justify-between w-full pl-10 pt-5 pr-10">
      <div className="w-full">
        <input
          className=" w-10/12 bg-white"
          type="text"
          placeholder="Search for Songs, Artists or Podcasts"
        />
      </div>
      <div>
        <img src={user?.images[0]?.url} alt={user?.display_name} />
        <h3 className="">{user?.display_name}</h3>
      </div>
    </header>
  );
}
