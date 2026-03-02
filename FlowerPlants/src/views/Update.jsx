import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const userPlants = JSON.parse(localStorage.getItem("userPlants")) || [];
    const plant = userPlants.find((p) => p.id === Number(id));
    return (
      plant || {
        name: "",
        scientificName: "",
        description: "",
        light: "",
        watering: "",
        soil: "",
        level: "",
      }
    );
  });

  function updateHandler(e) {
    e.preventDefault();
    const userPlants = JSON.parse(localStorage.getItem("userPlants")) || [];
    const updated = userPlants.map((p) =>
      p.id === Number(id) ? { ...p, ...formData } : p,
    );
    localStorage.setItem("userPlants", JSON.stringify(updated));
    navigate("/myplants");
  }

  function deleteHandler() {
    if (window.confirm("Are you sure you want to delete this plant?")) {
      const userPlants = JSON.parse(localStorage.getItem("userPlants")) || [];
      const updated = userPlants.filter((p) => p.id !== Number(id));
      localStorage.setItem("userPlants", JSON.stringify(updated));
      navigate("/myplants");
    }
  }

  return (
    <>
      <form onSubmit={updateHandler}>
        <h2>Update Plant</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="scientificName">Scientific Name:</label>
          <input
            type="text"
            id="scientificName"
            value={formData.scientificName}
            required
            onChange={(e) =>
              setFormData({ ...formData, scientificName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={formData.description}
            required
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
          />
        </div>
        <div>
          <label htmlFor="light">Light:</label>
          <input
            type="text"
            id="light"
            value={formData.light}
            required
            onChange={(e) =>
              setFormData({ ...formData, light: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="watering">Watering:</label>
          <input
            type="text"
            id="watering"
            value={formData.watering}
            required
            onChange={(e) =>
              setFormData({ ...formData, watering: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="soil">Soil:</label>
          <input
            type="text"
            id="soil"
            value={formData.soil}
            required
            onChange={(e) => setFormData({ ...formData, soil: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="level">Level:</label>
          <select
            id="level"
            value={formData.level}
            required
            onChange={(e) =>
              setFormData({ ...formData, level: e.target.value })
            }
          >
            <option value="">Select level...</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="submit">Update</button>
          <button type="button" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
