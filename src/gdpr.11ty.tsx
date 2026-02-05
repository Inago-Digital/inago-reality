import { GDPR } from "./components/GDPR"
import { GTMScript } from "./components/GTMScript.11ty"

export const data = {
  title: "Inago Reality - GDPR",
  description:
    "Ochrana vašich osobních údajů je pro nás prioritou. Seznamte se s našimi zásadami ochrany osobních údajů a jak je zpracováváme v souladu s GDPR.",
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
        <GTMScript />
      </head>
      <body>
        <div id="root" data-component="GDPR">
          <GDPR />
        </div>

        <script src="/assets/client.min.js"></script>
      </body>
    </html>
  )
}
