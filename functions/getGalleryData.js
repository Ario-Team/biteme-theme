export default async function getSlideShows() {
  const sliderShowsJson = await fetch(
    "http://rubikfastfood.com/GetSlideShows",
    {
      method: "GET",
    }
  );
}
