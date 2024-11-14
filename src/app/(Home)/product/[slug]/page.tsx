import { IGame } from "@/types/game";
import { getGamesSlug } from "../../libs/game";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
export default async function ProductDetail({params}:{params:{slug:string}}){
const data : IGame = await getGamesSlug(params.slug)
const options : Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <p className="my-paragraph pt-[1rem]">{children}</p>,
      [BLOCKS.HEADING_1]: (_node, children) => <h1 className="my-heading">{children}</h1>,
      [BLOCKS.HEADING_2]: (_node, children) => <h2 className="my-heading">{children}</h2>,
      [BLOCKS.HEADING_3]: (_node, children) => <h3 className="my-heading">{children}</h3>,
    },
  };
  return(
    <div>
        <div id="product" className="w-screen h-full flex justify-center items-center flex-col " 
            style={{ 
            backgroundImage: `url(https://www.minecraft.net/content/dam/games/minecraft/key-art/Legends-PMP_Hero-Art_FullBleedA_Desktop_2880x1320.jpg`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: "relative"}}>
              <div className="w-[90%] p-[1rem] flex flex-col justify-center items-center bg-slate-900 text-white text-justify opacity-90">
              <div className="text-white py-[3rem] mt-[3rem]">{data.fields.title}</div>
                <div>
                <Image
                src={`https://${data.fields.thumbnail.fields.file.url}`}
                alt={""} 
                width={600}
                height={600}
                className="w-[20rem]"  
              />
                </div>
                <div>
                {documentToReactComponents(data.fields.description,options)}
                </div>
                <div>
                <button className="bg-green-600 border-t-4 border-t-green-400 border-b-4 border-b-green-800 px-[1rem] active:bg-green-800 active:border-t-green-800 active:border-b-green-950">{data.fields.price}</button>
                </div>
              </div>
              
        </div>
    </div>
  )
}