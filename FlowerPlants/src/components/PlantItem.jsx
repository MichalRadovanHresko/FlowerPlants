import { Link } from "react-router-dom";
import "./PlantItem.css";

export default function PlantItem({ plant, onDelete, showActions }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-header">
        <h3 className="plant-name">{plant.name}</h3>
        <span className={`plant-level level-${plant.level.toLowerCase()}`}>
          {plant.level}
        </span>
      </div>
      <p className="plant-scientific">{plant.scientificName}</p>
      <p className="plant-description">{plant.description}</p>
      <div className="plant-details">
        <div className="detail-item">
          <span className="detail-label">Light: </span>
          <span className="detail-value">{plant.light}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Water: </span>
          <span className="detail-value">{plant.watering}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Soil: </span>
          <span className="detail-value">{plant.soil}</span>
        </div>
      </div>
      {showActions && (
        <div className="plant-actions">
          <Link
            to={`/update/${plant.id}`}
            className="action-button edit-button"
          >
            Edit
          </Link>
          <button
            className="action-button delete-button"
            onClick={() => onDelete(plant.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
