
# 🧩 My Design System Project

This is a **personal design system** project built using modern tools including **Nx**, **Style Dictionary v5**, **Express.js**, **Node.js**, and **AWS**. The goal is to generate and serve **design tokens** for multiple platforms like **Web**, **Android**, and **iOS** in a structured, scalable way.

---

## 🔧 Tools & Technologies

- **[Nx](https://nx.dev/)** – Monorepo build system to manage packages and tooling
- **[Style Dictionary v5](https://amzn.github.io/style-dictionary/#/)** – Token generator for multiple platforms
- **[Express.js](https://expressjs.com/)** – Lightweight Node.js framework for building APIs
- **[Node.js](https://nodejs.org/)** – JavaScript runtime used to run backend services
- **[AWS](https://aws.amazon.com/)** – Hosting and deployment for the Express server and tokens

---

## 🎨 What It Does

- Centralizes your design decisions using design tokens
- Uses Style Dictionary to build design tokens in multiple formats:
  - **Web**: `.css`, `.scss`, `.js`, `.json`
  - **Android**: `.xml`
  - **iOS**: `.plist`, `.json`
- Serves tokens through a custom **Express API**
- Prepares for deployment on **AWS** to distribute tokens across platforms

---

## 📦 Install

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## ⚙️ Run the Project

1. **Build design tokens**
   ```bash
   nx run tokens:build
   ```

   This generates the tokens under the `dist/` directory for each platform.

2. **Start the Express API server**
   ```bash
   nx serve api
   ```

   You can now access token endpoints locally (e.g., `http://localhost:3000/tokens/web/css`).

---

## ☁️ Deploy to AWS

To deploy the API server and generated tokens, you can use AWS services such as:

- **Elastic Beanstalk** – Quick setup for Node.js apps
- **Lambda + API Gateway** – For serverless deployment
- **EC2** – Manual setup for full control
- **S3 + CloudFront** – For static hosting of tokens

### Example: Deploy with Elastic Beanstalk

1. **Initialize your EB app**
   ```bash
   eb init
   ```

2. **Create environment and deploy**
   ```bash
   eb create my-env
   eb deploy
   ```

> Make sure the `dist/` folder is included in your deployment and the API server uses it to serve tokens.

---

## 🗂 Project Structure

```
my-project/
├── packages/
│   ├── tokens/                 # Design token project
│   │   ├── properties/         # Token source files
│   │   ├── build.js            # Style Dictionary build script
│   │   └── dist/               # Generated tokens (css, scss, json, etc.)
│   └── api/                    # Express.js server
│       ├── src/
│       └── main.ts             # Express entry point
├── nx.json                     # Nx config
├── package.json                # Root dependencies
└── README.md
```

---

## 📖 Notes

- Use **Style Dictionary configuration** to define custom transforms and formats.
- You can extend the Express API to serve specific formats or token categories.
- Token updates will require a rebuild before re-deploying.

---

## 📬 Feedback or Contributions

This is a personal project, but if you have suggestions or improvements, feel free to open an issue or contribute via pull requests.

---

## 📄 License

MIT License – Use freely for personal or commercial projects.
