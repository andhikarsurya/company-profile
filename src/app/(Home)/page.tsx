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
      } finally {
      }
    };

    fetchData();
  }, []);
  if (!users) {
    return <div id="hero" className="hero flex md:flex-row justify-center items-center flex-col">
    
    <div className="w-full flex justify-center items-center h-full flex-col">
    </div>
</div>;
  }

  return (
    <div >
          <div id="hero" className="hero flex md:flex-row justify-center items-center flex-col">
        <div className="w-1/2 flex justify-center items-center h-full">
            <div className="text-center text-white max-w-[37rem]">
                <div>
                <Image
                  src="/logo.webp" 
                  alt="Logo"
                  width={500}       
                  height={500}      
                />
                </div>
                <div><p>Create, Build, Explore</p></div>
            </div>
        </div>
        <div className="w-1/2 flex justify-center items-center h-full flex-col">
            <div className="flex justify-center items-center md:flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2 cursor-pointer opacity-95">
                <div><img src="game1.webp" alt="" className="w-[9rem] md:w-[15rem] opacity-100"/></div>
            <div className="text-center text-white ">Minecraft Java & Bedrock</div>
            </div>
        </div>
    </div>

    <div className="bg-slate-800 border-t-8 border-slate-600 pt-[3rem] pr-[1rem]" id="product">
        <div className="flex flex-wrap">
            <div className="w-full text-yellow-200 p-[1rem] text-center"><h1 className="text-[2rem] font-bold">Discover our games</h1></div>
            <div className="md:w-1/4  p-[1rem] text-center w-1/2">
                <div className="flex justify-center items-center flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2 ">
                <div><img src="game1.webp" alt="" className="w-[9rem] md:w-[15rem]"/></div>
                <div className="text-center text-white ">Minecraft</div>
                <Link href={"/product"}>
                <button className="bg-green-600 border-t-4 border-t-green-400 border-b-4 border-b-green-800 px-[1rem] active:bg-green-800 active:border-t-green-800 active:border-b-green-950">Detail</button>
                </Link></div>
            </div>
            <div className="md:w-1/4  p-[1rem] text-center w-1/2">
                <div className="flex justify-center items-center flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2 ">
                <div><img src="mc2.webp" alt="" className="w-[9rem] md:w-[15rem]"/></div>
                <div className="text-center text-white ">Minecraft Dungeons</div>
                <Link href={"/product"}>
                <button className="bg-green-600 border-t-4 border-t-green-400 border-b-4 border-b-green-800 px-[1rem] active:bg-green-800 active:border-t-green-800 active:border-b-green-950">Detail</button>
                </Link></div>
            </div>
            <div className="md:w-1/4  p-[1rem] text-center w-1/2">
                <div className="flex justify-center items-center flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2 ">
                <div><img src="mc3.webp" alt="" className="w-[9rem] md:w-[15rem]"/></div>
                <div className="text-center text-white ">Minecraft Legends</div>
                <Link href={"/product"}>
                <button className="bg-green-600 border-t-4 border-t-green-400 border-b-4 border-b-green-800 px-[1rem] active:bg-green-800 active:border-t-green-800 active:border-b-green-950">Detail</button>
                </Link></div>
            </div>
            <div className="md:w-1/4  p-[1rem] text-center w-1/2">
                <div className="flex justify-center items-center flex-col bg-slate-900 p-[1rem] gap-[1rem] border-2 ">
                <div><img src="mc1.webp" alt="" className="w-[9rem] md:w-[15rem]"/></div>
                <div className="text-center text-white ">Minecraft Education</div>
                <Link href={"/product"}>
                <button className="bg-green-600 border-t-4 border-t-green-400 border-b-4 border-b-green-800 px-[1rem] active:bg-green-800 active:border-t-green-800 active:border-b-green-950">Detail</button>
                </Link>
                </div>
            </div>
          </div>
    </div>


    <div id="overview" className="flex flex-col justify-center items-center">
    <div>
      <div className="text-center text-yellow-400 font-bold text-[2rem] pb-[2rem] flex justify-center items-center">History</div>
        <div className="bg-yellow-400 border-t-8 border-t-yellow-200 mb-[3rem] flex p-[1rem] mr-[10%] ml-[10%] text-center border-b-8 border-b-yellow-600">
          <div className="">Minecraft is a 2011 sandbox game developed and published by Swedish video game developer Mojang Studios. Originally created by Markus Notch Persson using the Java programming language, the first public build was released on 17 May 2009. The game would continue to be developed over the span of two years, until its full release on 18 November 2011. </div>
        </div>
      </div>

      
      <div>
      <div className="text-center text-teal-400 font-bold text-[2rem] pb-[2rem] flex justify-center items-center ">Culture</div>
        <div className="bg-teal-400 border-t-8 border-t-teal-200 flex p-[1rem] mr-[10%] ml-[10%] text-center border-b-8 border-b-teal-600">
          <div className="">
          We fundamentally believe that we need a culture founded in a growth mindset. It starts with a belief that everyone can grow and develop; that potential is nurtured, not pre-determined; and that anyone can change their mindset. </div>
        </div>
      </div>
      
      <div className="text-center text-blue-400 font-bold text-[2rem] pb-[2rem] pt-[3rem]">Our Team</div>
<div className="flex text-center flex-wrap border-t-8 border-t-blue-800 bg-blue-900 w-[90%] border-b-8 border-b-blue-950 mb-[3rem] ">
  {users.map((user, index) => (
      <div key={index} className="flex justify-center items-center flex-col p-[1rem] gap-[1rem] basis-1/3 max-w-[33%]">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <div className="text-center text-white text-nowrap">
        <h3>{user.name.first} {user.name.last}</h3>
      </div>
    </div>

  ))}
</div>

      

      
      

      
      
    </div>
    </div>




    
  );
}
