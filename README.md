# 💱 Currency Converter

A simple and responsive **Currency Converter** built using **HTML**, **CSS**, and **JavaScript**.  
This app fetches live exchange rates from the **[Exchange Rate API](https://open.er-api.com)** and allows users to convert between different currencies with automatic flag updates.

---

## 🚀 Features
- 🌍 **Live exchange rates** using the Exchange Rate API.
- 📌 **Default selection**: USD → INR.
- 🇺🇸🇮🇳 **Automatic flag updates** when changing currencies.
- 🔄 **Real-time conversion** with accurate calculations.
- 📱 **Responsive design** for mobile and desktop.
- ⚡ **Fast and lightweight** — no external frameworks needed.

---

## 🌐 Live Demo
[**Try it here** 🚀](https://currency-converter-biswa.netlify.app)  

---

## 📷 Demo Screenshot
*(Add your screenshot here after running the app)*

---

## 🛠️ Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **[Exchange Rate API](https://open.er-api.com)**
- **[Flags API](https://flagsapi.com)**

---

## 📂 Project Structure
```plaintext
.
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # Main JavaScript logic
├── codes.js         # Country and currency mapping
├── dollar.jpg       # Image used in the project
└── README.md        # Project documentation


---

## ⚙️ How It Works
1. **Populate Currency Dropdowns**  
   - The dropdowns are dynamically filled with currency codes from `countryList.js`.
   - Default values:  
     - **From Currency** → `USD`  
     - **To Currency** → `INR`
2. **Update Flags**  
   - When a currency changes, the corresponding country flag updates using `flagsapi.com`.
3. **Fetch Exchange Rate**  
   - On form submit or page load, the app fetches the latest rates from the Exchange Rate API.
4. **Display Result**  
   - Shows the converted value in the format:  
     ```
     1 USD = 83.20 INR
     ```

---

## 📦 Installation & Usage
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
2.Open in Browser

Simply open index.html in any browser.
