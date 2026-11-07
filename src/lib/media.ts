/** `by` and `year` are the original creator and first publication or release year. */
export type MediaItem = { img: string; title: string; link: string; by: string; year: string };

export const shelves: { id: string; title: string; cta: string; items: MediaItem[] }[] = [
  {
    id: "books",
    title: "Books",
    cta: "on Goodreads",
    items: [
      { img: "/illustrations/murakami.webp", title: "Norwegian Wood", link: "https://www.goodreads.com/book/show/11297.Norwegian_Wood", by: "Haruki Murakami", year: "1987" },
      { img: "/illustrations/danger.webp", title: "The Dangers of Smoking in Bed", link: "https://www.goodreads.com/book/show/53215250-the-dangers-of-smoking-in-bed", by: "Mariana Enríquez", year: "2009" },
      { img: "/illustrations/harry.webp", title: "Harry Potter and the Order of the Phoenix", link: "https://www.goodreads.com/book/show/2.Harry_Potter_and_the_Order_of_the_Phoenix", by: "J.K. Rowling", year: "2003" },
      { img: "/illustrations/inferno.webp", title: "Inferno", link: "https://www.goodreads.com/book/show/17212231-inferno", by: "Dan Brown", year: "2013" },
      { img: "/illustrations/kafka.webp", title: "Letter to His Father", link: "https://www.goodreads.com/book/show/187569.Letter_to_His_Father", by: "Franz Kafka", year: "1919" },
    ],
  },
  {
    id: "movies",
    title: "Movies",
    cta: "on IMDb",
    items: [
      { img: "/illustrations/parasite.webp", title: "Parasite", link: "https://www.imdb.com/title/tt6751668/", by: "Bong Joon-ho", year: "2019" },
      { img: "/illustrations/dead-poet.webp", title: "Dead Poets Society", link: "https://www.imdb.com/title/tt0097165/", by: "Peter Weir", year: "1989" },
      { img: "/illustrations/lalala.webp", title: "La La Land", link: "https://www.imdb.com/title/tt3783958/", by: "Damien Chazelle", year: "2016" },
      { img: "/illustrations/lord-of-the-rings.webp", title: "The Lord of the Rings: The Fellowship of the Ring", link: "https://www.imdb.com/title/tt0120737/", by: "Peter Jackson", year: "2001" },
      { img: "/illustrations/interstellar.webp", title: "Interstellar", link: "https://www.imdb.com/title/tt0816692/", by: "Christopher Nolan", year: "2014" },
    ],
  },
  {
    id: "manga",
    title: "Manga",
    cta: "on MangaDex",
    items: [
      { img: "/illustrations/horimiya.webp", title: "Horimiya", link: "https://mangadex.org/title/a25e46ec-30f7-4db6-89df-cacbc1d9a900/horimiya", by: "HERO, Daisuke Hagiwara", year: "2011" },
      { img: "/illustrations/1000yen.webp", title: "I Sold My Life for 10,000 Yen per Year", link: "https://mangadex.org/title/9e03b2ca-5191-44a6-88b6-c0cd49d06b51/i-sold-my-life-for-10-000-yen-per-year", by: "Sugaru Miaki, Shouichi Taguchi", year: "2016" },
      { img: "/illustrations/this-witch-of-mine.webp", title: "This Witch of Mine", link: "https://mangadex.org/title/23a2a55e-aa51-4c4b-8f8e-dd91b4b654e8/this-witch-of-mine", by: "Haeyoon, Mas", year: "2015" },
      { img: "/illustrations/tokyo-ghoul.webp", title: "Tokyo Ghoul", link: "https://mangadex.org/title/6a1d1cb1-ecd5-40d9-89ff-9d88e40b136b/tokyo-ghoul", by: "Sui Ishida", year: "2011" },
      { img: "/illustrations/the-climber.webp", title: "Kokou no Hito", link: "https://mangadex.org/title/bb8310e4-6050-4a43-984e-f7bbdfce23b1/kokou-no-hito", by: "Shinichi Sakamoto", year: "2007" },
    ],
  },
];

export const mediaCount = shelves.reduce((n, s) => n + s.items.length, 0);
