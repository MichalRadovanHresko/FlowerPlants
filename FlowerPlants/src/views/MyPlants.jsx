import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlantList from "../components/PlantList";
import Searchfield from "../components/Searchfield";
import "../App.css";

export default function MyPlants() {
  const [userPlants, setUserPlants] = useState(() => {
    const saved = localStorage.getItem("userPlants");
    return saved ? JSON.parse(saved) : [];
  });

  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("userPlants");
      setUserPlants(saved ? JSON.parse(saved) : []);
    };

    window.addEventListener("storage", handleStorageChange);

    window.addEventListener("focus", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleStorageChange);
    };
  }, []);

  const handleDelete = (id) => {
    const updatedPlants = userPlants.filter((plant) => plant.id !== id);
    setUserPlants(updatedPlants);
    localStorage.setItem("userPlants", JSON.stringify(updatedPlants));
  };

  const filteredPlants = userPlants.filter((plant) =>
    plant.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div>
      <p className="welcome-description">
        <h1 className="introduction">My Plants Collection</h1>
        Here you can manage your personal plant collection. Add new plants, edit
        existing ones, or remove plants you no longer have.
      </p>

      <div className="add-plant-container">
        <Link to="/create" className="add-plant-button">
          + Add New Plant
        </Link>
      </div>
      <Searchfield handleInput={handleInputChange} filter={filterText} />
      {userPlants.length === 0 ? (
        <div className="empty-state">
          <p>You haven't added any plants yet.</p>
          <p>Click the button above to add your first plant!</p>
        </div>
      ) : filteredPlants.length === 0 ? (
        <div className="empty-state">
          <p>No plants found matching your search.</p>
        </div>
      ) : (
        <PlantList
          plants={filteredPlants}
          onDelete={handleDelete}
          showActions={true}
        />
      )}
    </div>
  );
}
