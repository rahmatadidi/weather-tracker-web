export const handleSearch =
  (fetchWeather: (location: string, fromUser?: boolean) => Promise<void>) =>
  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get("query")?.toString() || "";
    await fetchWeather(query, true);
  };
