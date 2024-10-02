interface Breadcrumb {
  name: string;
  url: string;
}

export const useBreadCrumbs = (currentPath: string): Breadcrumb[] => {
  const homeBreadcrumb: Breadcrumb = { name: "Home", url: "/" };

  // Define your breadcrumb logic based on the paths you provided
  if (currentPath === "/anime") {
    return [homeBreadcrumb, { name: "Anime", url: "/anime" }];
  } else if (currentPath === "/anime/dublim") {
    return [
      homeBreadcrumb,
      { name: "Anime", url: "/anime" },
      { name: "Dublim", url: "/anime/dublim" },
    ];
  } else if (currentPath === "/anime/titra") {
    return [
      homeBreadcrumb,
      { name: "Anime", url: "/anime" },
      { name: "Titra", url: "/anime/titra" },
    ];
  } else if (currentPath.startsWith("/anime/dublim/")) {
    const animeName = currentPath.split("/").pop(); // Get the anime name from the URL
    return [
      homeBreadcrumb,
      { name: "Anime", url: "/anime" },
      { name: "Dublim", url: "/anime/dublim" },
      { name: animeName || "", url: currentPath }, // Ensure animeName is not undefined
    ];
  } else if (currentPath.startsWith("/anime/titra/")) {
    const animeName = currentPath.split("/").pop(); // Get the anime name from the URL
    return [
      homeBreadcrumb,
      { name: "Anime", url: "/anime" },
      { name: "Titra", url: "/anime/titra" },
      { name: animeName || "", url: currentPath }, // Ensure animeName is not undefined
    ];
  } else if (currentPath === "/fakte") {
    return [homeBreadcrumb, { name: "Fakte", url: "/fakte" }];
  } else if (currentPath === "/amv") {
    return [homeBreadcrumb, { name: "AMV", url: "/amv" }];
  } else if (currentPath === "/kuic") {
    return [homeBreadcrumb, { name: "Kuic", url: "/kuic" }];
  }

  return [homeBreadcrumb];
};
