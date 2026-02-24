const apiUrl = "https://api.pokerbot.dk";

/**
 * Loads tables
 * @param key Api key
 * @returns {unknown} TODO Find out what this is
 */

export const getTables = async (key: string) => {
  const resp = await fetch(apiUrl + "/files", {
    method: "GET",
    headers: {
      "X-API-KEY": key,
    },
  });

  if (resp.status != 200) {
    throw new Error(await resp.text());
  }

  return await resp.json();
};
