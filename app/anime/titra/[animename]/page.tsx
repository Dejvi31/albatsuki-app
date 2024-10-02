import { titra } from "@/data/content";
import AnimeDetails from "@/components/Anime/AnimeDetails";

interface Params {
  params: {
    animename: string;
  };
}

const TitraDetails = ({ params }: Params) => {
  const { animename } = params;

  const animeData = titra.find((item) => item.urlTitle === animename);

  if (!animeData) {
    return (
      <p className="text-white text-center">Nuk u gjend ky film ose serial.</p>
    );
  }

  return <AnimeDetails animeData={animeData} />;
};

export default TitraDetails;
