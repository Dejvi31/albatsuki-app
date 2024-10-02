import { dublim } from "@/data/content";

interface Params {
  params: {
    animename: string;
  };
}

const AnimeDetails = ({ params }: Params) => {
  const { animename } = params;

  const animeData = dublim.find((item) => item.urlTitle === animename);

  if (!animeData) {
    return (
      <p className="text-white text-center">Nuk u gjend ky film ose serial.</p>
    );
  }

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">{animeData.title}</h1>
      <img src={animeData.imgSrc} alt={animeData.title} className="mb-4" />
    </div>
  );
};

export default AnimeDetails;
