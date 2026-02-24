const apiUrl = "https://api.pokerbot.dk";

export const healthCheck = async () => {
  const res = await fetch(apiUrl + "/");
  return res.status;
};

export const getTable = async (table: number) => {
  try {
    const res = await fetch(apiUrl + "/data/" + table.toString());
    return await res.json();
  } catch (error) {
    throw error as Error;
  }
};

/**
 * Loads tables
 * @param key Api key
 * @returns {unknown} TODO Find out what this is
 */

export const getTables = async (key: string) => {
  const resp = await fetch(apiUrl + "/files", {
    headers: {
      "X-API-KEY": key,
    },
  });

  if (resp.status != 200) {
    throw new Error(await resp.text());
  }

  return await resp.json();
};
