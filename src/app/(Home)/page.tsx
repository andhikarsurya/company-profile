"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

interface iUser {
  id: string;
  name: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const fetchedUsers: User[] = data.slice(0, 3).map((userData: iUser) => ({
          name: {
            first: userData.name.split(" ")[0],
            last: userData.name.split(" ")[1] || '',
          },
          picture: {
            large: `https://i.pravatar.cc/300?u=${userData.id}`,
          },
        }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  if (!users) {
    return (
      <div id="hero" className="hero flex md:flex-row justify-center items-center flex-col">
        <div className="w-1/2 flex justify-center items-center h-full">
          <div className="text-center text-white max-w-[37rem]">
            <Image src="/logo.png" alt="Logo" width={500} height={500} />
            <p>Create, Build, Explore</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center h-full flex-col">
          <div className="flex justify-center items-center md:flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2 cursor-pointer opacity-95">
            <Image src="game1.jpg" alt="Game" width={180} height={180} />
            <div className="text-center text-white">Minecraft Java & Bedrock</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div id="hero" className="hero flex md:flex-row justify-center items-center flex-col">
        <div className="w-1/2 flex justify-center items-center h-full">
          <div className="text-center text-white max-w-[37rem]">
            <Image src="/logo.png" alt="Logo" width={500} height={500} />
            <p>Create, Build, Explore</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center h-full flex-col">
          <div className="flex justify-center items-center md:flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2 cursor-pointer opacity-95">
            <Image src="game1.jpg" alt="Game" width={180} height={180} />
            <div className="text-center text-white">Minecraft Java & Bedrock</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border-t-8 border-slate-600 pt-[3rem] pr-[1rem]" id="product">
        <div className="flex flex-wrap">
          <div className="w-full text-yellow-200 p-[1rem] text-center">
            <h1 className="text-[2rem] font-bold">Discover our games</h1>
          </div>
          {["Minecraft", "Minecraft Dungeons", "Minecraft Legends", "Minecraft Education"].map((game, idx) => (
            <div key={idx} className="md:w-1/4 p-[1rem] text-center w-1/2">
              <div className="flex justify-center items-center flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2">
                <Image
                  src={`https://www.minecraft.net/content/dam/minecraftnet/games/${game.toLowerCase().replace(' ', '-')}/key-art/Homepage_Discover-our-games_${game.replace(' ', '-')}-KeyArt_864x864.jpg`}
                  alt={game}
                  width={180}
                  height={180}
                />
                <div className="text-center text-white">{game}</div>
                <Link href="/product">
                  <button className="bg-green-600 border-t-4 border-t-green-400 border-b-4 border-b-green-800 px-[1rem] active:bg-green-800 active:border-t-green-800 active:border-b-green-950">Detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="overview" className="flex flex-col justify-center items-center">
        <div className="text-center text-yellow-400 font-bold text-[2rem] pb-[2rem]">History</div>
        <div className="bg-yellow-400 border-t-8 border-t-yellow-200 mb-[3rem] flex p-[1rem] mr-[10%] ml-[10%] text-center border-b-8 border-b-yellow-600">
          <p>Minecraft is a 2011 sandbox game developed and published by Swedish video game developer Mojang Studios...</p>
        </div>
        <div className="text-center text-teal-400 font-bold text-[2rem] pb-[2rem]">Culture</div>
        <div className="bg-teal-400 border-t-8 border-t-teal-200 flex p-[1rem] mr-[10%] ml-[10%] text-center border-b-8 border-b-teal-600">
          <p>We fundamentally believe that we need a culture founded in a growth mindset...</p>
        </div>
        <div className="text-center text-blue-400 font-bold text-[2rem] pb-[2rem] pt-[3rem]">Our Team</div>
        <div className="flex text-center flex-wrap border-t-8 border-t-blue-800 bg-blue-900 w-[90%] border-b-8 border-b-blue-950 mb-[3rem]">
          {users.map((user, index) => (
            <div key={index} className="flex justify-center items-center flex-col p-[1rem] gap-[1rem] basis-1/3 max-w-[33%]">
              <Image src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} width={120} height={120} />
              <div className="text-center text-white">{user.name.first} {user.name.last}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
