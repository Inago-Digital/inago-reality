import { Prices } from "./components/Prices.11ty"

export const data = {
  title: "Inago Reality - Ceny",
  description:
    "Objevte naše cenové plány pro efektivní propagaci vašich nemovitostí. Nabízíme flexibilní balíčky šité na míru vašim potřebám, od základních služeb až po komplexní marketingové kampaně. Vyberte si ten pravý plán a začněte prodávat rychleji a efektivněji s Inago Reality.",
}

export default function Page({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="/style/global.css" rel="stylesheet" />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Inago Reality" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="root" data-component="Prices">
          <Prices />
        </div>

        <script src="/assets/client.min.js"></script>
      </body>
    </html>
  )
}
