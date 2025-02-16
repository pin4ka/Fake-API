![Fake API Logo](https://github.com/rax-2/Fake-API/blob/main/public/assets/Fake_API_logo.png?raw=true)

# Fake API 🚀  

**Fake API** is a free, open-source dummy API designed to simplify API handling in frontend projects, helping developers test and integrate APIs smoothly. It provides structured test data across various endpoints, making it perfect for learning, practicing, and building applications.  

## 🌟 Features  

- **🚀 Instant API Access** – Just hit the URL with an endpoint, no setup required.  
- **🛠️ Perfect for Learning** – Practice **API requests, Node.js, and Express.js**.  
- **📡 Hosted & Ready** – Deployed on **Render**, available anytime.  
- **🔓 No Authentication Required** – Open-access for everyone.  
- **📂 Structured JSON Data** – Well-organized and easy-to-use responses.  
- **🤝 Open for Contributions** – Help improve and expand Fake API.

  
## ⚠️ Important Notice: Cold Start Delay

Due to deployment on a free plan, the API may become inactive when not in use. When a new request is made after inactivity, there could be a delay of 30-60 seconds while the service "wakes up." We are aware of this limitation and are exploring solutions, but please plan accordingly when integrating into your projects.

## 📌 API Documentation  

Fake API serves various endpoints. The complete list, along with descriptions, is available in the JSON file:  

📄 **[View API Endpoints](https://github.com/rax-2/Fake-API/blob/main/apis.json)**  

To use Fake API, simply send an HTTP request to:  

```bash
https://fake-api-4waa.onrender.com/api/{endpoint}
```

Example (fetching users data):  

```bash
https://fake-api-4waa.onrender.com/api/appointments
```

## 🚀 Quick Start  

Use Fake API in your frontend projects with **fetch()**, **Axios**, or any HTTP client.  

### Using Fetch:  

```js
fetch("https://your-fake-api-url.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

### Using Axios:  

```js
import axios from "axios";

axios.get("https://your-fake-api-url.com/users")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));
```

## 🛠️ Technologies Used  

- **Node.js**  
- **Express.js**  
- **Render (Deployment)**  

## 🤝 Contributing  

Contributions are welcome! If you have ideas for new endpoints or improvements, feel free to fork the repo and submit a PR.  

## 📜 License  

This project is open-source. Feel free to use and modify it as needed.  


---
🔥 **Start using Fake API today and make your frontend development smooth and hassle-free!**  
---
