"use client"
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

export default function Team() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const fetchedUsers: User[] = data.slice(0, 7).map((userData: iUser) => ({
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
    return <div id="hero" className="hero flex md:flex-row justify-center items-center flex-col">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col bg-slate-900 py-[3rem]">
      <div className="text-center text-blue-400 font-bold text-[2rem] pb-[2rem] pt-[3rem]">Programmer And Artist</div>
      <div className="flex text-center flex-wrap border-t-8 border-t-blue-800 bg-blue-900 w-[90%] border-b-8 border-b-blue-950 mb-[3rem]">
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
  );
}
