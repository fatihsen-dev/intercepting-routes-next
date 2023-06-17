import photos from "@/photos.json";
import Image from "next/image";
import Link from "next/link";

export default function page() {
   return (
      <div className="h-full w-full flex justify-center p-5 overflow-hidden">
         <div className="grid grid-cols-4 gap-4 content-start max-w-7xl pb-5 h-full w-full ">
            {photos.map((photo) => (
               <Link className="relative" key={photo.id} href={`/photo/${photo.id}`}>
                  <Image
                     className="aspect-square object-cover rounded-sm"
                     src={photo.src}
                     alt={photo.user}
                     width={600}
                     height={600}
                  />
                  <div className="absolute bottom-0 p-2 w-full">
                     <div className="bg-black/50 px-3 py-2 text-white rounded-sm">{photo.user}</div>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
}
