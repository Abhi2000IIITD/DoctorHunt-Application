
const express = require("express");
const cors = require("cors");
const doctorRoutes = require("./Routes/DoctorRoutes");
const availabilityRoutes = require("./Routes/AvailabilityRoutes");
const patientRoutes = require("./Routes/PatientRoutes");
const searchResultsRoutes = require("./Routes/SearchResultsRoute");
const bookingRoutes = require("./Routes/BookingRoute");  // Import the booking route

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Register routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/doctors", availabilityRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/search", searchResultsRoutes);
app.use("/api/booking", bookingRoutes);  // Register the booking route

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
