# Everlife

A browser-based 2D life simulator. Create a person, progress through days and
years, manage health and hunger, learn, work, travel, shop, build a family tree,
collect milestones, and archive major events.

Character creation includes 197 countries grouped by continent, flags, and a
searchable database of 134,000+ cities. Geographic names and ISO metadata are
derived from the open `country-state-city` dataset; the game bundles the
processed data so creation does not require an internet connection.

## Run locally

```bash
npm start
```

The launcher binds to `0.0.0.0` on port `3000`, or the port supplied through
the `PORT` environment variable. The game has no build step or third-party
runtime dependencies. Saves are stored in the browser.

The included GitHub Pages workflow publishes the browser version after changes
reach `main`. GitHub Pages must be enabled with **GitHub Actions** as its source
in the repository settings before the first deployment.

## Connect Google Sheets

1. Create or open the Google Sheet that should hold every character.
2. Open **Extensions → Apps Script**.
3. Paste in [`google-apps-script.js`](google-apps-script.js).
4. Choose **Deploy → New deployment → Web app**, execute as yourself, and set
   access to the audience you want to play the game.
5. Copy the deployment URL ending in `/exec`.
6. In Everlife, open **Google Sheets archive**, enter the one Gmail address that
   owns the archive, paste the deployment URL, and choose **Connect archive**.

Major achievements, travel, education, and career milestones are posted to the
`Life Events` tab. The connection is retained when a new character is created.
The timeline can also be downloaded as CSV from the same screen.

