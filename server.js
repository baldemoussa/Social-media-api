// Require essential packages
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
// Create an Express application instance
const app = express();
// Define port (defaults to 3001 if PORT is not set in .env)
const PORT = process.env.PORT || 3001;
// Database Connection URI from environment variables
const uri = process.env.MONGO_URI;
// Initialize MongoClient
const client = new MongoClient(uri);
// Single GET route at '/'
app.get('/', async (req, res) => {
  try {
    // Attempt to connect to the MongoDB database
    await client.connect();    
    res.status(200).json({ 
      message: "Successfully connected to the database!" 
    });
  } catch (error) {
    console.error("Database connection error:", error);    
    res.status(500).json({ 
      message: "Failed to connect to the database." 
    });
  } finally {
    // Close the connection after processing the request
    await client.close();
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});