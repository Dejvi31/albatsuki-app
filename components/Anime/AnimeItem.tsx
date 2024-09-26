interface AnimeItemProps {
  title: string;
  imgSrc: string;
}

const AnimeItem: React.FC<AnimeItemProps> = ({ title, imgSrc }) => {
  return (
    <div className="relative bg-gray-200 rounded-lg overflow-hidden">
      {/* Poster Image */}
      <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />

      {/* Overlaying title on the bottom center of the image */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex justify-center items-center py-2">
        <h3 className="text-white text-lg font-bold text-center">{title}</h3>
      </div>
    </div>
  );
};

export default AnimeItem;
