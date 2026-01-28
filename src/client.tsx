import { hydrateRoot } from "react-dom/client"
import { App } from "./components/App.11ty"
import { Contact } from "./components/Contact.11ty"
import { Prices } from "./components/Prices.11ty"
import { Process } from "./components/Process.11ty"

const registry = { App, Contact, Prices, Process }

const root = document.getElementById("root")
if (root) {
  const compName = (root.dataset.component as keyof typeof registry) ?? "App"
  const Component = registry[compName] ?? App
  hydrateRoot(root, <Component />)
}
