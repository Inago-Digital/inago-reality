import { App } from "./components/App.11ty"

export const data = {
  title: "Inago Reality",
}

export default function Page({ title }: { title: string }) {
  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link href="style/global.css" rel="stylesheet" />
      </head>
      <body>
        <div id="app">
          <App />
        </div>

        <script src="assets/client.min.js"></script>
      </body>
    </html>
  )
}
