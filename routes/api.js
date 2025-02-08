const express = require('express');
const api = express.Router();

// Middleware that logs the current time for each request
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
};
api.use(timeLog);

// Define the home page API
api.get('/', (req, res) => {
  res.send('Welcome to the Extended Fake API');
});

// Authentication API
api.post('/auth/login', (req, res) => {
  res.json({ token: "fake-jwt-token", user: { id: 1, username: "testuser" } });
});
api.post('/auth/register', (req, res) => {
  res.json({ message: "User registered successfully" });
});

// User Management
api.get('/users', (req, res) => {
  res.json({ users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ] });
});
api.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: "Sample User", email: "user@example.com" });
});

// Products API
api.get('/products', (req, res) => {
  res.json({ products: [
    { id: 101, name: "Wireless Mouse", category: "Electronics", price: 29.99 },
    { id: 102, name: "Mechanical Keyboard", category: "Electronics", price: 79.99 }
  ] });
});

// E-Commerce Orders
api.get('/orders', (req, res) => {
  res.json({ orders: [
    { order_id: "ORD123", customer: "Alice", total: 100.5, status: "Shipped" },
    { order_id: "ORD124", customer: "Bob", total: 250.75, status: "Pending" }
  ] });
});

// Payment Transactions
api.get('/payments', (req, res) => {
  res.json({ transactions: [
    { id: "TXN001", amount: 50.75, status: "Completed" },
    { id: "TXN002", amount: 120.00, status: "Pending" }
  ] });
});

// Weather API
api.get('/weather', (req, res) => {
  res.json({ cities: [
    { city: "New York", temperature: "10°C", humidity: "65%", condition: "Cloudy" },
    { city: "Los Angeles", temperature: "20°C", humidity: "50%", condition: "Sunny" }
  ] });
});

// Stock Market API
api.get('/stocks', (req, res) => {
  res.json({ stocks: [
    { symbol: "AAPL", price: 150.25, change: "-1.25" },
    { symbol: "GOOGL", price: 2800.75, change: "+2.30" }
  ] });
});

// Cryptocurrency API
api.get('/crypto', (req, res) => {
  res.json({ cryptos: [
    { symbol: "BTC", price: 42000.75, change: "+3.5%" },
    { symbol: "ETH", price: 3000.25, change: "-1.2%" }
  ] });
});

// Movie Database API
api.get('/movies', (req, res) => {
  res.json({ movies: [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 }
  ] });
});

// Sports Scores API
api.get('/sports/scores', (req, res) => {
  res.json({ scores: [
    { match: "Team A vs Team B", score: "2-1" },
    { match: "Team C vs Team D", score: "3-2" }
  ] });
});

// Travel API
api.get('/flights', (req, res) => {
  res.json({ flights: [
    { flight_no: "AI202", destination: "New York", status: "On-Time" },
    { flight_no: "BA303", destination: "London", status: "Delayed" }
  ] });
});

// Social Media Posts API
api.get('/social-media/posts', (req, res) => {
  res.json({ posts: [
    { id: 1, user: "JohnDoe", content: "Hello world!", likes: 150, comments: 12 },
    { id: 2, user: "JaneSmith", content: "Learning Node.js is fun!", likes: 230, comments: 34 }
  ] });
});

// Chat Messages API
api.get('/chat/messages', (req, res) => {
  res.json({ messages: [
    { sender: "Alice", receiver: "Bob", message: "Hey, how are you?", timestamp: "2025-02-08 10:00:00" },
    { sender: "Bob", receiver: "Alice", message: "I'm good, thanks! How about you?", timestamp: "2025-02-08 10:02:00" }
  ] });
});

// Banking Transactions API
api.get('/transactions', (req, res) => {
  res.json({ transactions: [
    { id: "TXN1001", user: "Alice", amount: 500, type: "Credit", status: "Completed" },
    { id: "TXN1002", user: "Bob", amount: 200, type: "Debit", status: "Pending" }
  ] });
});

// Cryptocurrency Prices API
api.get('/cryptocurrency/prices', (req, res) => {
  res.json({ prices: [
    { currency: "Bitcoin", price: "45000 USD", change: "+3.5%" },
    { currency: "Ethereum", price: "3200 USD", change: "-1.2%" }
  ] });
});

// Hospital Listings API
api.get('/hospitals', (req, res) => {
  res.json({ hospitals: [
    { id: 1, name: "City General Hospital", location: "New York", rating: 4.5 },
    { id: 2, name: "Sunrise Medical Center", location: "San Francisco", rating: 4.7 }
  ] });
});

// Doctor Appointments API
api.get('/appointments', (req, res) => {
  res.json({ appointments: [
    { id: 1, doctor: "Dr. John Doe", specialization: "Cardiology", time: "10:30 AM" },
    { id: 2, doctor: "Dr. Jane Smith", specialization: "Dermatology", time: "02:00 PM" }
  ] });
});

// Courses API
api.get('/courses', (req, res) => {
  res.json({ courses: [
    { id: 101, title: "JavaScript Basics", instructor: "Alex Johnson", duration: "4 weeks" },
    { id: 102, title: "React for Beginners", instructor: "Sarah Lee", duration: "6 weeks" }
  ] });
});

// Train Schedules API
api.get('/train-schedules', (req, res) => {
  res.json({ schedules: [
    { train_no: "12345", route: "New York - Washington", departure: "08:00 AM", status: "On-Time" },
    { train_no: "67890", route: "San Francisco - Los Angeles", departure: "10:30 AM", status: "Delayed" }
  ] });
});

// Hotel Listings API
api.get('/hotels', (req, res) => {
  res.json({ hotels: [
    { id: 1, name: "The Grand Hotel", city: "Las Vegas", rating: 5 },
    { id: 2, name: "Ocean View Resort", city: "Miami", rating: 4.8 }
  ] });
});

// Movie Database API
api.get('/movies', (req, res) => {
  res.json({ movies: [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 }
  ] });
});

// Music Albums API
api.get('/music/albums', (req, res) => {
  res.json({ albums: [
    { id: 1, title: "Thriller", artist: "Michael Jackson", year: 1982 },
    { id: 2, title: "Back in Black", artist: "AC/DC", year: 1980 }
  ] });
});

// Jokes API
api.get('/jokes', (req, res) => {
  res.json({ jokes: [
    { id: 1, joke: "Why don't skeletons fight each other? Because they don’t have the guts!" },
    { id: 2, joke: "Parallel lines have so much in common. It’s a shame they’ll never meet." }
  ] });
});

// Daily Quotes API
api.get('/quotes', (req, res) => {
  res.json({ quotes: [
    { id: 1, text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { id: 2, text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
  ] });
});

// Horoscopes API
api.get('/horoscopes', (req, res) => {
  res.json({ horoscopes: [
    { sign: "Aries", prediction: "Today is a great day for making bold decisions!" },
    { sign: "Taurus", prediction: "You may find yourself drawn to creative pursuits today." }
  ] });
});

// Random Numbers API
api.get('/random-numbers', (req, res) => {
  res.json({ numbers: [
    { type: "Integer", value: Math.floor(Math.random() * 100) },
    { type: "Decimal", value: (Math.random() * 100).toFixed(2) }
  ] });
});

// Barcode Generator API
api.get('/barcodes', (req, res) => {
  res.json({ barcodes: [
    { id: 1, code: "123456789012" },
    { id: 2, code: "987654321098" }
  ] });
});

// QR Code Generator API
api.get('/qrcodes', (req, res) => {
  res.json({ qrcodes: [
    { id: 1, data: "https://example.com/qrcode1" },
    { id: 2, data: "https://example.com/qrcode2" }
  ] });
});

// Timezones API
api.get('/timezones', (req, res) => {
  res.json({ timezones: [
    { id: 1, location: "New York", timezone: "EST" },
    { id: 2, location: "London", timezone: "GMT" }
  ] });
});

// Holidays API
api.get('/holidays', (req, res) => {
  res.json({ holidays: [
    { date: "2025-01-01", name: "New Year's Day", country: "USA" },
    { date: "2025-07-04", name: "Independence Day", country: "USA" }
  ] });
});

// License Plates API
api.get('/license-plates', (req, res) => {
  res.json({ plates: [
    { id: 1, number: "ABC-1234", state: "California" },
    { id: 2, number: "XYZ-5678", state: "Texas" }
  ] });
});

module.exports = api;
