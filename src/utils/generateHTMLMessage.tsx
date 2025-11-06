export function generateHTMLMessage(data: { name: string; phone: string }) {
  return `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Nová zpráva z kontaktního formuláře</title>
			<style>
				body {
					font-family: Arial, sans-serif;
					background-color: #f4f4f4;
					margin: 0;
					padding: 20px;
				}
				.container {
					background-color: #ffffff;
					padding: 20px;
					border-radius: 5px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				}
				h1 {
					color: #333333;
				}
				p {
					color: #555555;
					line-height: 1.6;
				}
				.label {
					font-weight: bold;
					color: #333333;
				}
			</style>
		</head>
		<body>
			<div class="container">
				<h1>Nová zpráva z kontaktního formuláře</h1>
				<p><span class="label">Jméno:</span> ${data.name}</p>
				<p><span class="label">Telefon:</span> ${data.phone}</p>
			</div>
		</body>
		</html>
	`
}
