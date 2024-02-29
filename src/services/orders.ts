export default async function getOrder() {
	try {
	  const response = await fetch(import.meta.env.VITE_API_URL,  {
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
		},})
	  if (!response.ok) {
		throw new Error('La solicitud no fue exitosa');
	  }
	  const data = await response.json();
	  return data.orders;
	} catch (error) {
	  console.error('Error al realizar la solicitud:', error);
	  throw error;
	}
  }
