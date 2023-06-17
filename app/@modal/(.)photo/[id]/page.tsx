import photos from "@/photos.json";
import Image from "next/image";

export default function page({ params: { id } }: { params: { id: number } }) {
   const photo = photos.find((p) => p.id == id);

   return (
      <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
         <div className="max-w-2xl rounded-sm overflow-hidden">
            <Image className="aspect-square object-cover" src={photo?.src || ""} alt="" width={600} height={600} />
            <div className="bg-black p-5 text-white">{photo?.user}</div>
         </div>
      </div>
   );
}
