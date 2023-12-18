const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const response = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP fetch breeds error! status: ${response.status}`);
  }
  return response.json();
};

export default fetchBreedList;
