import React, { useState } from "react";
import "./App.css";

const attractions = [
  {
    name: "Aquarium of the Bay",
    location: "PIER 39, The Embarcadero & Beach St, San Francisco, CA 94133",
    overview: "Discover the beauty and diversity of Northern California aquatic life.",
    hours: "10:00 am - 5:00pm, Monday - Sunday",
    price: 30,
    popularity: 5700,
    url: "https://www.aquariumofthebay.org/",
    image: "/imgs/aquariumOfTheBay.jpg",
  },
  {
    name: "California Academy of Sciences",
    location: "136 Irving St, Cambridge, MA 02138",
    overview: "A research institute and natural history museum among the world's largest.",
    hours: "9:30 am - 5pm (Mon-Sat), 11 am - 5pm (Sun)",
    price: 45,
    popularity: 5400,
    url: "https://www.calacademy.org/",
    image: "/imgs/academyOfSciences.jpg",
  },
  {
    name: "San Francisco Zoo",
    location: "Sloat Blvd & Upper Great Hwy, San Francisco, CA 94132",
    overview: "Home to 2,000+ exotic, endangered, and rescued animals in 100 acres of gardens.",
    hours: "9:30 am - 4:30 pm (Mon - Sun)",
    price: 29,
    popularity: 13000,
    url: "https://www.sfzoo.org/",
    image: "/imgs/zoo.jpg",
  },
  {
    name: "San Francisco Museum of Modern Art",
    location: "151 3rd St, San Francisco, CA 94103",
    overview: "A premier modern art museum with extensive exhibits.",
    hours: "Mon-Tue, Fri-Sun 10 AM–5 PM; Thu 12–8 PM; Closed Wed",
    price: 31,
    popularity: 15000,
    url: "https://www.sfmoma.org/",
    image: "/imgs/MOMA.jpg",
  },
  {
    name: "Golden Gate Park",
    location: "501 Stanyan St, San Francisco, CA 94117",
    overview: "1,017 acres of lakes, meadows, and vibrant activity destinations.",
    hours: "Public Access",
    price: 0,
    popularity: 43000,
    url: "https://sfrecpark.org/770/Golden-Gate-Park",
    image: "/imgs/park.jpg",
  },
  {
    name: "Japanese Tea Garden",
    location: "75 Hagiwara Tea Garden Dr, San Francisco, CA 94118",
    overview: "Graceful Japanese maples, pines, azaleas, and cherry trees.",
    hours: "9 am - 5:30 pm",
    price: 18,
    popularity: 15000,
    url: "https://www.japaneseteagardensf.com/",
    image: "/imgs/botanicalTeaGarden.jpg",
  },
  {
    name: "Alcatraz",
    location: "San Francisco, CA 94133",
    overview: "A former federal prison turned tourist attraction on Alcatraz Island.",
    hours: "Varies by tour",
    price: 100,
    popularity: 41000,
    url: "https://www.nps.gov/alca/index.htm",
    image: "/imgs/alcatraz.jpg",
  },
  {
    name: "Golden Gate Bridge",
    location: "Golden Gate Bridge, San Francisco, CA",
    overview: "An iconic suspension bridge connecting San Francisco to Marin County.",
    hours: "Public Access",
    price: 0,
    popularity: 80000,
    url: "https://www.goldengate.org/",
    image: "/imgs/bridge.jpg",
  },
  {
    name: "Exploratorium",
    location: "Pier 15, San Francisco, CA 94111",
    overview: "A science and art museum with interactive exhibits.",
    hours: "12 pm - 5 pm (Sun), 10 am - 5 pm (Tues - Sat)",
    price: 40,
    popularity: 8000,
    url: "https://www.exploratorium.edu/",
    image: "/imgs/exploratorium.jpg",
  },
  {
    name: "Walt Disney Museum",
    location: "104 Montgomery St, San Francisco, CA 94129",
    overview: "A museum showcasing the life and legacy of Walt Disney.",
    hours: "10 am - 5:30 pm (Thurs - Sun)",
    price: 25,
    popularity: 3700,
    url: "https://www.waltdisney.org/",
    image: "/imgs/WaltDisney.jpg",
  },
];

const AttractionsList = () => {
  const [sortOption, setSortOption] = useState("none");

  const sortedAttractions = [...attractions].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    if (sortOption === "most-popular") return b.popularity - a.popularity;
    return 0;
  });

  return (
    <div className="container">
      <h1>San Francisco Attractions</h1>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="none">Sort By</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="most-popular">Most Popular</option>
      </select>
      <div className="grid">
        {attractions.map((attraction, index) => (
          <div key={index} className="card">
            <img src={attraction.image} alt={attraction.name} className="attraction-image" />
            <h3><a href={attraction.url} target="_blank" rel="noopener noreferrer">{attraction.name}</a></h3>
            <p>{attraction.overview}</p>
            <p><strong>Location:</strong> {attraction.location}</p>
            <p><strong>Hours:</strong> {attraction.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionsList;
