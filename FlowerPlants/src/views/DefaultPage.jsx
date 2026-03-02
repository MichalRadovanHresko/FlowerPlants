import "../App.css";
import { useEffect, useState } from "react";
import PlantList from "../components/PlantList";
import HeadingImg from "../assets/header-img.jpg";
import Searchfield from "../components/Searchfield.jsx";

export default function DefaultPage() {
  const plants = [
    {
      id: 1,
      name: "Rose",
      image: "rose.jpg",
      scientificName: "Rosa spp.",
      description:
        "The rose is a classic flower known for its beauty and fragrance. These elegant blooms come in many colors and are perfect for gardens, bouquets, and special occasions.",
      light: "6+ hours of direct sunlight",
      watering: "1-2 times per week",
      soil: "Well-draining, loamy soil",
      level: "Intermediate",
    },
    {
      id: 2,
      name: "Tulip",
      image: "tulip.jpg",
      description:
        "Tulips are spring-flowering bulbs with vibrant, cup-shaped blooms. They are popular worldwide and symbolize elegance. Great for spring gardens and cut flower arrangements.",
      scientificName: "Tulipa spp.",
      light: "Full sun to partial shade",
      watering: "Moderate, let soil dry between waterings",
      soil: "Well-draining sandy loam",
      level: "Beginner",
    },
    {
      id: 3,
      description:
        "Sunflowers are tall, bright yellow flowers that follow the sun throughout the day. They are symbols of loyalty and longevity, perfect for adding cheerfulness to any garden.",
      name: "Sunflower",
      image: "sunflower.jpg",
      scientificName: "Helianthus annuus",
      light: "Full sun (6-8 hours)",
      watering: "Regular, keep soil moist",
      soil: "Well-draining, slightly alkaline soil",
      level: "Beginner",
    },
    {
      id: 4,
      description:
        "Daisies are cheerful, simple flowers with white petals and yellow centers. They are hardy perennials that bloom throughout the season and are popular in meadows and borders.",
      name: "Daisy",
      image: "daisy.jpg",
      scientificName: "Bellis perennis",
      light: "Full sun to partial shade",
      watering: "Moderate, consistent moisture",
      soil: "Well-draining garden soil",
      level: "Beginner",
    },
    {
      description:
        "Lavender is a fragrant herb with purple flowers that attract pollinators. Known for its calming scent, it's perfect for gardens, crafts, and aromatherapy.",
      id: 5,
      name: "Lavender",
      image: "lavender.jpg",
      scientificName: "Lavandula spp.",
      light: "Full sun (6-8 hours minimum)",
      watering: "Low water needs, drought tolerant",
      soil: "Well-draining, sandy soil",
      level: "Beginner",
    },
    {
      id: 6,
      name: "Pansy",
      image: "pansy.jpg",
      scientificName: "Viola tricolor",
      description:
        "Pansies are charming flowers with distinctive face-like markings in vibrant colors. They bloom in cool weather and are perfect for borders and containers.",
      light: "Full sun to partial shade",
      watering: "Keep soil evenly moist",
      soil: "Rich, well-draining soil",
      level: "Beginner",
    },
    {
      id: 7,
      name: "Orchid",
      image: "orchid.jpg",
      scientificName: "Orchidaceae spp.",
      description:
        "Orchids are exotic, elegant flowers known for their unique shapes and colors. They require specialized care but reward growers with stunning, long-lasting blooms.",
      light: "Bright, indirect light",
      watering: "Weekly, special orchid substrate",
      soil: "Specialized orchid bark mix",
      level: "Expert",
    },
    {
      id: 8,
      name: "Peony",
      image: "peony.jpg",
      scientificName: "Paeonia spp.",
      description:
        "Peonies are luxurious flowers with large, fragrant blooms that come in shades of pink, white, and red. They are long-lived perennials that get better with age.",
      light: "Full sun to partial shade",
      watering: "Moderate, established plants drought tolerant",
      soil: "Well-draining, fertile soil",
      level: "Intermediate",
    },
    {
      id: 9,
      name: "Hibiscus",
      image: "hibiscus.jpg",
      scientificName: "Hibiscus spp.",
      description:
        "Hibiscus flowers are tropical beauties with large, showy blooms. They add a vibrant, exotic touch to gardens and are popular in warm climates.",
      light: "Full sun (6+ hours)",
      watering: "Keep soil moist during growing season",
      soil: "Well-draining, slightly acidic soil",
      level: "Intermediate",
    },
    {
      id: 10,
      name: "Lily",
      image: "lily.jpg",
      scientificName: "Lilium spp.",
      description:
        "Lilies are elegant, fragrant flowers with prominent stamens. Available in many colors, they are popular for gardens, weddings, and floral arrangements.",
      light: "Full sun to partial shade",
      watering: "Regular, especially during blooming",
      soil: "Well-draining bulb soil",
      level: "Intermediate",
    },
    {
      id: 11,
      name: "Daffodil",
      image: "daffodil.jpg",
      scientificName: "Narcissus pseudonarcissus",
      description:
        "Daffodils are cheerful spring flowers with bright yellow trumpet centers. They naturalize well in gardens and are symbols of renewal and hope.",
      light: "Full sun to partial shade",
      watering: "Moderate, drought tolerant when established",
      soil: "Well-draining, sandy loam",
      level: "Beginner",
    },
    {
      id: 12,
      name: "Chrysanthemum",
      image: "chrysanthemum.jpg",
      scientificName: "Chrysanthemum spp.",
      description:
        "Chrysanthemums are fall-blooming flowers available in many shapes and colors. They are hardy, long-lasting, and popular for autumn arrangements and gardens.",
      light: "Full sun (6+ hours)",
      watering: "Keep soil consistently moist",
      soil: "Well-draining garden soil",
      level: "Beginner",
    },
    {
      id: 13,
      name: "Iris",
      image: "iris.jpg",
      scientificName: "Iris spp.",
      description:
        "Irises are elegant flowers with distinctive petals and rich colors. Named after the Greek goddess of the rainbow, they symbolize valor and wisdom.",
      light: "Full sun to light shade",
      watering: "Moderate, some varieties drought tolerant",
      soil: "Well-draining, prefers dry soil",
      level: "Beginner",
    },
    {
      id: 14,
      name: "Zinnia",
      image: "zinnia.jpg",
      scientificName: "Zinnia elegans",
      description:
        "Zinnias are vibrant, easy-to-grow flowers that bloom all summer long. They come in various colors and sizes, making them perfect for cutting and display.",
      light: "Full sun (6-8 hours)",
      watering: "Regular watering, avoid wet foliage",
      soil: "Well-draining, fertile soil",
      level: "Beginner",
    },
    {
      id: 15,
      name: "Marigold",
      image: "marigold.jpg",
      scientificName: "Tagetes spp.",
      description:
        "Marigolds are cheerful, golden flowers with a distinctive fragrance. Hardy and easy to grow, they're great for beginners and attract pollinators to the garden.",
      light: "Full sun (6+ hours)",
      watering: "Drought tolerant, water when soil dry",
      soil: "Well-draining, ordinary soil",
      level: "Beginner",
    },
    {
      id: 16,
      name: "Dahlia",
      image: "dahlia.jpg",
      scientificName: "Dahlia spp.",
      description:
        "Dahlias are spectacular flowers with intricate, geometric petals. They bloom in numerous colors and forms, making them stunning focal points in gardens.",
      light: "Full sun (6-8 hours)",
      watering: "Regular during growing season",
      soil: "Well-draining, fertile soil",
      level: "Intermediate",
    },
    {
      id: 17,
      name: "Gladiolus",
      image: "gladiolus.jpg",
      scientificName: "Gladiolus spp.",
      description:
        "Gladiolus flowers showcase tall spikes of blooms in vibrant colors. Often called 'Glads', they are excellent cut flowers and symbolize integrity and strength.",
      light: "Full sun (6+ hours)",
      watering: "Regular, consistent moisture",
      soil: "Well-draining loamy soil",
      level: "Beginner",
    },
    {
      id: 18,
      name: "Poppy",
      image: "poppy.jpg",
      scientificName: "Papaver spp.",
      description:
        "Poppies are delicate, colorful flowers with papery petals. They add a wild, romantic touch to gardens and symbolize imagination and dreams.",
      light: "Full sun to partial shade",
      watering: "Moderate, drought tolerant when established",
      soil: "Well-draining, sandy soil",
      level: "Beginner",
    },
    {
      id: 19,
      name: "Carnation",
      image: "carnation.jpg",
      scientificName: "Dianthus caryophyllus",
      description:
        "Carnations are classic flowers with ruffled petals available in many colors. They are long-lasting, fragrant, and popular for bouquets and occasions.",
      light: "Full sun",
      watering: "Moderate, avoid overwatering",
      soil: "Well-draining, neutral pH soil",
      level: "Intermediate",
    },
    {
      id: 20,
      name: "Geranium",
      image: "geranium.jpg",
      scientificName: "Pelargonium spp.",
      description:
        "Geraniums are reliable, colorful flowers perfect for containers and borders. Known for their aromatic foliage, they bloom continuously throughout the season.",
      light: "Full sun (5-6 hours minimum)",
      watering: "Let soil dry between waterings",
      soil: "Well-draining potting soil",
      level: "Beginner",
    },
  ];
  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem("filterText");
    return savedFilter ? savedFilter : "";
  });
  useEffect(() => {
    localStorage.setItem("filterText", filterText);
  }, [filterText]);
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(filterText.toLowerCase()),
  );
  const handleInputChange = (plant) => {
    setFilterText(plant.target.value);
  };
  return (
    <div>
      <div className="welcome-description">
        <h1 className="introduction">Welcome to Flower Plants!</h1>
        <img src={HeadingImg} alt="Plants-Image" className="heading-img" />
        <p>
          FlowerPlant is a community for plant enthusiasts, gardeners, and
          beginners looking to learn about plant care. Our platform provides a
          user-friendly website where you can explore comprehensive plant care
          guides and manage your personal plant collections. Whether you're just
          starting your gardening journey or you're an experienced plant parent,
          FlowerPlant is here to help you grow.
        </p>
      </div>
      <Searchfield handleInput={handleInputChange} filter={filterText} />
      <PlantList plants={filteredPlants} />
    </div>
  );
}
