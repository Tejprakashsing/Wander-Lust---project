const rentalPlaces = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Relaxing getaway steps from the beach. Perfect for couples or small families.",
    image: {
      url: "https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000, // Random price greater than 10000
    location: "Santa Monica, California",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Modern City Apartment",
    description: "Spacious and stylish apartment in the heart of the city.",
    image: {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374460242.jpg?k=25b82239025564efdd5d9114b5262998accbe60ab02a9fdd83810a01dd03965e&o=&hp=1",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "New York City, New York",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Charming Ski Chalet",
    description: "Cozy and comfortable chalet perfect for a winter getaway.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/05/30/13/01/relax-2356858_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Lake Tahoe, Nevada",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Tranquil Treehouse Retreat",
    description: "Unique treehouse experience surrounded by nature.",
    image: {
      url: "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Asheville, North Carolina",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Luxury Vineyard Villa",
    description: "Stunning villa with vineyard views and private pool.",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Napa Valley, California",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Historic Townhouse",
    description: "Charming townhouse in a walkable historic district.",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/08/05/17/31/pool-410772_960_720.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Charleston, South Carolina",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Rustic Cabin Getaway",
    description: "Secluded cabin perfect for a relaxing escape.",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/08/13/17/19/dominican-republic-1591106_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Yellowstone National Park, Wyoming",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Modern Mountain Lodge",
    description: "Luxurious lodge with breathtaking mountain views.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Aspen, Colorado",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Beachfront Bungalow",
    description: "Relaxing bungalow with direct beach access.",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/12/27/14/50/christmas-581090_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Miami, Florida",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Cozy Farmhouse Retreat",
    description: "Peaceful farmhouse surrounded by rolling hills.",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Vermont",
    country: "USA",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Enchanting Castle Stay",
    description: "Experience royalty for a night in this historic castle.",
    image: {
      url: "https://media.istockphoto.com/id/501619270/photo/apartments.jpg?s=1024x1024&w=is&k=20&c=i2ogEYKh1yzj7djg_i8tzV7YsimP89V_T8dEphdYGMs=",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Bavaria, Germany",
    country: "Germany",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Tranquil Island Paradise",
    description: "Private beachfront villa on a secluded island getaway.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Maldives",
    country: "Maldives",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Vibrant City Loft",
    description: "Stylish loft apartment in the heart of a bustling city.",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "London, England",
    country: "United Kingdom",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Rustic Farmhouse Cottage",
    description: "Charming cottage with a working farm experience.",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Tuscany, Italy",
    country: "Italy",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Modern Lakeside Cabin",
    description: "Minimalist cabin with stunning lake views and private dock.",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Lake Como, Italy",
    country: "Italy",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Traditional Japanese Ryokan",
    description: "Immerse yourself in Japanese culture with a ryokan stay.",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/07/05/08/21/pool-384573_960_720.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Kyoto, Japan",
    country: "Japan",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Luxurious Overwater Bungalow",
    description: "Private bungalow perched over crystal-clear waters.",
    image: {
      url: "https://cdn.pixabay.com/photo/2021/10/03/04/41/buildings-6676920_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "French Polynesia",
    country: "French Polynesia",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Cozy Canal-side Apartment",
    description: "Charming apartment with a balcony overlooking a picturesque canal.",
    image: {
      url: "https://cdn.pixabay.com/photo/2018/01/15/15/13/snow-3084112_960_720.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Amsterdam, Netherlands",
    country: "Netherlands",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Historic Townhouse Flat",
    description: "Stylish flat in a historic townhouse with modern amenities.",
    image: {
      url: "https://cdn.pixabay.com/photo/2015/08/25/03/27/resort-906104_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Prague, Czech Republic",
    country: "Czech Republic",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "Rustic Mountain Chalet",
    description: "Cozy chalet with a fireplace, perfect for a ski trip.",
    image: {
      url: "https://cdn.pixabay.com/photo/2023/09/25/11/14/arra-luxury-8274729_960_720.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Swiss Alps, Switzerland",
    country: "Switzerland",
    owner: "6683006e7290b823345fbc43"
  },
  {
    title: "New Luxury Penthouse",
    description: "A luxurious penthouse with stunning city views and modern amenities.",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      name: "listing image"
    },
    price: Math.floor(Math.random() * 1000) + 10000,
    location: "Toronto, Canada",
    country: "Canada",
    owner: "6683006e7290b823345fbc43"
  }
];

module.exports = { data: rentalPlaces };
