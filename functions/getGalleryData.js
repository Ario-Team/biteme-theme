export default async function getGalleryData() {
  return new Promise(async (resolve) => {
    const sliderShowsJson = await fetch(
      "http://rubikfastfood.com/GetSlideShows",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((json) => json);
    resolve(sliderShowsJson[0].galleryData);
  });
}
