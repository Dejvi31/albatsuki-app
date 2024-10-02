import { dublim } from "@/data/content";
import AnimeDetails from "@/components/Anime/AnimeDetails";

interface Params {
  params: {
    animename: string;
  };
}

const DublimDetails = ({ params }: Params) => {
  const { animename } = params;

  const animeData = dublim.find((item) => item.urlTitle === animename);

  if (!animeData) {
    return (
      <p className="text-white text-center">Nuk u gjend ky film ose serial.</p>
    );
  }

  return <AnimeDetails animeData={animeData} />;
};

export default DublimDetails;
