import { seedStocks } from "../utils/db/seed/seedStocks.js";

(async () => {
  await seedStocks();
  console.log("App Setup complete.");
  process.exit(0);
})();
