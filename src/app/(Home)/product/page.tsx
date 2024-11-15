"use client"
import { IGame } from "@/types/game";
import Image from "next/image";
import { getGames } from "../libs/game";
import Link from "next/link";

export default async function Product() {
  const data: IGame[] = await getGames();
  return (
    <div>
      <div
        id="games-section"
        className="w-screen min-h-[100vh] p-8 bg-blue-950 flex flex-col justify-center items-center">
        <div className="games-header w-full text-yellow-200 p-4 text-center mt-[3rem]">
          <h1 className="games-title text-2xl font-bold">Games</h1>
        </div>
        {data.map((item, idx) => {
          const imageUrl = `https://${item.fields.thumbnail.fields.file.url}`;
          return (
            <div key={idx} data-cy="blog-item">
              <div className="game-container p-4 text-center w-full flex flex-col gap-[1rem]">
                <div className="game-card flex flex-col md:flex-row justify-start items-start bg-blue-900 p-4 gap-4 border-2 w-full max-w-md mx-auto md:max-w-[200rem]">
                  <div className="game-image w-full md:w-auto flex-shrink-0 flex justify-center">
                    {imageUrl && (
                      <Image
                        src={`https:${item.fields.thumbnail.fields.file.url}`}
                        alt={item.fields.title}
                        width={200}
                        height={200}
                        className="max-w-[20rem] max-h-[14rem] items-center justify-center"/>
                    )}
                  </div>
                  <div className="game-description text-start text-white flex flex-col w-full">
                    <div className="game-title text-lg font-semibold">
                      {item.fields.title}
                    </div>
                    <div className="game-text text-sm mt-2">
                      {item.fields.description0}
                    </div>
                    <div>
                      <Link href={`/product/${item.fields.slug}`}>
                        <button className="md:mt-[1rem] game-price-button bg-green-600 border-t-4 border-t-green-400 border-b-4 border-b-green-800 px-4 py-2 mt-4 active:bg-green-800 active:border-t-green-800 active:border-b-green-950">
                          Detail
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
