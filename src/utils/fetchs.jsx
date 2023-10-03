export const logements = async function fetchLogements() {
  try {
    const response = await fetch("/json/logements.json", {
      headers: {
        Accept: "Application/json",
      },
    });
    if (response.ok) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
