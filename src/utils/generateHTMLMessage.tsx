export function generateHTMLMessage(data: { name: string; phone: string }) {
  return `
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Nová zpráva z kontaktního formuláře</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Archivo', Arial, sans-serif;
      background-color: #EEE5E5;
      margin: 0;
      padding: 32px 16px;
      -webkit-font-smoothing: antialiased;
    }

    .wrapper {
      max-width: 560px;
      margin: 0 auto;
    }

    /* Header bar */
    .header {
      background-color: #132429;
      border-radius: 8px 8px 0 0;
      padding: 20px 28px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-accent {
      width: 4px;
      height: 32px;
      background-color: #FF4157;
      border-radius: 2px;
      display: inline-block;
      flex-shrink: 0;
    }

    .header-text {
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }

    .header-brand {
      color: #FFFFFF;
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    .header-brand span {
      color: #FF4157;
    }

    /* Body card */
    .card {
      background-color: #FFFFFF;
      padding: 32px 28px;
    }

    .card-title {
      font-size: 22px;
      font-weight: 700;
      color: #132429;
      letter-spacing: -0.02em;
      margin-bottom: 6px;
    }

    .card-subtitle {
      font-size: 13px;
      color: #888;
      margin-bottom: 28px;
    }

    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(to right, #FF4157 0%, #EEE5E5 100%);
      margin-bottom: 28px;
    }

    /* Field rows */
    .field {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 14px 0;
      border-bottom: 1px solid #F0EAEA;
    }

    .field:last-of-type {
      border-bottom: none;
    }

    .field-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background-color: #FFF0F2;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .field-icon svg {
      width: 16px;
      height: 16px;
      stroke: #FF4157;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .field-content {
      flex: 1;
    }

    .field-label {
      font-size: 11px;
      font-weight: 600;
      color: #999;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    .field-value {
      font-size: 15px;
      font-weight: 500;
      color: #132429;
    }

    /* Footer */
    .footer {
      background-color: #1F3339;
      border-radius: 0 0 8px 8px;
      padding: 16px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .footer-note {
      font-size: 12px;
      color: rgba(255,255,255,0.4);
    }

    .footer-badge {
      font-size: 11px;
      font-weight: 600;
      color: #39D187;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      background-color: rgba(57,209,135,0.12);
      padding: 4px 10px;
      border-radius: 20px;
    }
  </style>
</head>
<body>
  <div class="wrapper">

    <!-- Header -->
    <div class="header">
      <span class="header-accent"></span>
      <div>
        <div class="header-text">Kontaktní formulář</div>
        <div class="header-brand">reality<span>.</span>inago<span>.cz</span></div>
      </div>
    </div>

    <!-- Card -->
    <div class="card">
      <div class="card-title">Nová zpráva</div>
      <div class="card-subtitle">Přišla nová poptávka přes kontaktní formulář.</div>
      <div class="divider"></div>

      <!-- Name field -->
      <div class="field">
        <div class="field-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div class="field-content">
          <div class="field-label">Jméno</div>
          <div class="field-value">${data.name}</div>
        </div>
      </div>

      <!-- Phone field -->
      <div class="field">
        <div class="field-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.55 2 2 0 0 1 3.59 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
          </svg>
        </div>
        <div class="field-content">
          <div class="field-label">Telefon</div>
          <div class="field-value">${data.phone}</div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="footer">
      <span class="footer-note">Automatická notifikace &mdash; neodpovídejte na tento e-mail</span>
      <span class="footer-badge">Nová poptávka</span>
    </div>

  </div>
</body>
</html>
	`
}
