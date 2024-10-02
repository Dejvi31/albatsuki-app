"use client";
import { titra } from "@/data/content";
import AnimeDetails from "@/components/Anime/AnimeDetails";
import { usePathname } from "next/navigation";
import { useBreadCrumbs } from "@/hooks/useBreadCrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";

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

  const currentPath = usePathname(); // Get the current path
  const breadCrumbs = useBreadCrumbs(currentPath); // Generate breadcrumbs

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <AnimeDetails animeData={animeData} />;
    </>
  );
};

export default TitraDetails;
