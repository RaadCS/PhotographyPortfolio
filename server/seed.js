import { pool } from './db.js';

const portfolioData = [
  {
    image_url: "https://images.unsplash.com/photo-1777924961767-654036d5e195?q=80&w=2060&auto=format&fit=crop",
    alt_text: "Desert landscape with a town nestled in the valley",
    caption: "Desert landscape with a town nestled in the valley - Al Ula",
    category: "Landscape"
  },
  {
    image_url: "https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?q=80&w=2070&auto=format&fit=crop",
    alt_text: "Traditional mud brick architecture",
    caption: "Traditional mud brick architecture - Ushaiqir",
    category: "Architecture"
  },
  {
    image_url: "https://images.unsplash.com/photo-1687372984995-1b567ae295c7?q=80&w=2127&auto=format&fit=crop",
    alt_text: "A pyramid in the desert with a sky background",
    caption: "A pyramid in the desert with a sky background - Al Ula",
    category: "Architecture"
  },
  {
    image_url: "https://plus.unsplash.com/premium_photo-1697729749013-d5263b662999?q=80&w=1964&auto=format&fit=crop",
    alt_text: "MODERN COASTAL SKYLINE — JEDDAH",
    caption: "MODERN COASTAL SKYLINE — JEDDAH",
    category: "Landscape"
  }
];

async function seedDatabase() {
  try {
    console.log("Starting database setup...");

    // 1. Create the Users Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Users table created.");

    await pool.query(`DROP TABLE IF EXISTS photos;`);
    await pool.query(`
      CREATE TABLE photos (
        id SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL,
        alt_text TEXT NOT NULL,
        caption TEXT NOT NULL,
        category VARCHAR(50) NOT NULL
      );
    `);
    console.log("Photos table created.");

    for (const photo of portfolioData) {
      await pool.query(
        `INSERT INTO photos (image_url, alt_text, caption, category) VALUES ($1, $2, $3, $4)`,
        [photo.image_url, photo.alt_text, photo.caption, photo.category]
      );
    }
    console.log("Portfolio data seeded successfully!");

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    pool.end();
  }
}

seedDatabase();