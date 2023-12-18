import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import fetchPet from "./fetchPet";
import { FaSpinner } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">
          <FaSpinner />
        </h2>
      </div>
    );
  }

  if (results.isError) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Error: {results.error.message}</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  console.log(pet);
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal}-${pet.breed}-${pet.city} ${pet.state}`}</h2>
        <h3>{pet.description}</h3>
        <button>Adopt {pet.name}</button>
      </div>
    </div>
  );
};

export default Details;
