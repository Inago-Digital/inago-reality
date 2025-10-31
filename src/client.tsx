import { hydrateRoot } from "react-dom/client"
import { App } from "./components/App.11ty"

const root = document.getElementById("app")
if (root) {
  hydrateRoot(root, <App />)
}
