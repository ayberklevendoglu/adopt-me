const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const response = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!response.ok) {
    throw new Error(`HTTP fetch pets error! status: ${response.status}`);
  }
  return response.json();
};

export default fetchPet;
