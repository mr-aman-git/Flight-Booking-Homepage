const baseFlights = [
  { from: "Delhi", to: "Tokyo", airlines: ["IndiGo", "Air India"] },
  { from: "Delhi", to: "New York", airlines: ["IndiGo", "Air India"] },
  { from: "Delhi", to: "Paris", airlines: ["Vistara", "IndiGo"] },
  { from: "Delhi", to: "Dubai", airlines: ["Vistara", "IndiGo"] },
  { from: "Mumbai", to: "Paris", airlines: ["Vistara", "IndiGo"] },
  { from: "Mumbai", to: "Dubai", airlines: ["Vistara", "IndiGo"] },
  { from: "Mumbai", to: "New York", airlines: ["Vistara", "IndiGo"] },
  { from: "Mumbai", to: "Tokyo", airlines: ["Vistara", "IndiGo"] },
];

const generateFlights = (startId, startDateStr, days) => {
  const flights = [];
  let id = startId;
  const startDate = new Date(startDateStr);

  for (let day = 0; day < days; day++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + day);
    const dateStr = date.toISOString().split("T")[0];

    baseFlights.forEach((route) => {
      route.airlines.forEach((airline) => {
        const price = `₹${
          Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000
        }`;
        flights.push({
          id: id++,
          from: route.from,
          to: route.to,
          date: dateStr,
          price,
          airline,
        });
      });
    });
  }

  return flights;
};

const flights = [
  ...generateFlights(1, "2025-05-21", 25),
  ...generateFlights(100, "2025-06-15", 25),
];

export default flights;
