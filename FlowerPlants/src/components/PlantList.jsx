import PlantItem from "./PlantItem";

export default function PlantList({ plants, onDelete, showActions }) {
  return (
    <div className="plant-list-card">
      {plants.map((plant) => (
        <PlantItem
          key={plant.id}
          plant={plant}
          onDelete={onDelete}
          showActions={showActions}
        />
      ))}
    </div>
  );
}
