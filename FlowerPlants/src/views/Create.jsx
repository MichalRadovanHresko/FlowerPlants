import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [userPlants, setUserPlants] = useState(() => {
    const savedPlants = localStorage.getItem("userPlants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  });
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [description, setDescription] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userPlants", JSON.stringify(userPlants));
  }, [userPlants]);

  function createHandler(event) {
    event.preventDefault();
    const highestId =
      userPlants.length > 0
        ? Math.max(...userPlants.map((plant) => plant.id))
        : 0;
    const newPlant = {
      id: highestId + 1,
      name: name,
      scientificName: scientificName,
      description: description,
      light: light,
      watering: watering,
      soil: soil,
      level: level,
      image: "/default-plant.jpg",
    };
    setUserPlants([...userPlants, newPlant]);

    setName("");
    setScientificName("");
    setDescription("");
    setLight("");
    setWatering("");
    setSoil("");
    setLevel("");

    navigate("/myplants");
  }
  return (
    <>
      <form onSubmit={createHandler}>
        <h2>Create new Plant</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(plant) => setName(plant.target.value)}
          />
        </div>
        <div>
          <label htmlFor="scientificName">Scientific Name:</label>
          <input
            type="text"
            id="scientificName"
            name="scientificName"
            value={scientificName}
            required
            onChange={(plant) => setScientificName(plant.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            required
            onChange={(plant) => setDescription(plant.target.value)}
            rows="4"
          />
        </div>
        <div>
          <label htmlFor="light">Light:</label>
          <input
            type="text"
            id="light"
            name="light"
            value={light}
            required
            onChange={(plant) => setLight(plant.target.value)}
          />
        </div>
        <div>
          <label htmlFor="watering">Watering:</label>
          <input
            type="text"
            id="watering"
            name="watering"
            value={watering}
            required
            onChange={(plant) => setWatering(plant.target.value)}
          />
        </div>
        <div>
          <label htmlFor="soil">Soil:</label>
          <input
            type="text"
            id="soil"
            name="soil"
            value={soil}
            required
            onChange={(plant) => setSoil(plant.target.value)}
          />
        </div>
        <div>
          <label htmlFor="level">Level:</label>
          <select
            id="level"
            name="level"
            value={level}
            required
            onChange={(plant) => setLevel(plant.target.value)}
          >
            <option value="">Select level...</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
