import Link from "next/link";

interface AnimeItemProps {
  title: string;
  imgSrc: string;
  urlTitle: string;
  basePath: string;
}

const AnimeItem: React.FC<AnimeItemProps> = ({
  title,
  imgSrc,
  urlTitle,
  basePath,
}) => {
  return (
    <Link href={`${basePath}/${urlTitle}`}>
      <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex justify-center items-center py-2">
          <h3 className="text-white text-lg font-bold text-center">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default AnimeItem;
