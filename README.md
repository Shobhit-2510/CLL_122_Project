# 🌐 Web-Based Adiabatic and Non-Adiabatic CSTR Calculator

A responsive web application to simulate and analyze the performance of Continuous Stirred-Tank Reactors (CSTRs) under both **adiabatic** and **non-adiabatic** conditions. Designed as an educational and engineering analysis tool.

## 📌 Features

- 🔁 **Adiabatic & Non-Adiabatic Modes**  
  Simulates energy balance and conversion under different reactor conditions.

- 🧮 **Numerical Solver**  
  Implements the **Newton-Raphson method** using an npm package to solve nonlinear energy balance equations.

- 📊 **Interactive Visualizations**  
  - **Chart.js** for frontend plotting  
  - **Matplotlib** for Streamlit-based non-adiabatic visualization

- 💻 **Responsive UI**  
  Built with **React** and **Tailwind CSS** ensuring mobile and desktop compatibility.

- ⚙️ **Streamlit Integration**  
  A separate module using **Streamlit** provides deeper interactive control for non-adiabatic scenarios.

- 🚀 **Deployed via Vercel**  
  CI/CD powered deployment with version control using Git.

---

## 🛠️ Tech Stack

| Layer         | Tools & Libraries                               |
|---------------|--------------------------------------------------|
| Frontend      | Next.js (React), Tailwind CSS, Chart.js          |
| Backend Logic | JavaScript, Newton-Raphson Solver via npm        |
| Visualization | Chart.js, Matplotlib (Python)                    |
| Platform      | Vercel (Next.js deployment), Streamlit (Python)  |
| Others        | Git, GitHub, npm, Streamlit                      |

---

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### 📦 For the Web App (Next.js)

```bash
# Clone the repo
git clone https://github.com/your-username/cstr-calculator.git

# Go to the project directory
cd cstr-calculator

# Install dependencies
npm install

# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 to view it in the browser.
