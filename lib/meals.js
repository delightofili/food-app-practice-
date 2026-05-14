import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

/* export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
} */

export function getMeal(slug) {
  console.log("Searching for:", slug);

  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);

  console.log("Found:", meal);

  return meal;
}
