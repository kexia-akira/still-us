STILL, US — PLAIN HTML EDITION
==============================
OPEN THE WEBSITE
1. Extract this ZIP file.
2. Open the still-us-html folder.
3. Double-click index.html. It opens in your browser.
No Node.js, npm, React, or server is required.

FILES
- index.html: page structure
- style.css: design, layout, typography, mobile styling
- script.js: interactions and rendering
- chapters.js: editable chapters, keepsakes, and letters
- images/: put your photos here

EDIT YOUR JOURNAL
1. Open chapters.js in Notepad or VS Code.
2. Find the chapter/item you want to change.
3. Edit the text inside quotation marks. Keep commas and quotation marks intact.
4. Save (Ctrl+S), then refresh the browser (Ctrl+R).

ADD A PHOTO
1. Put your photo inside images, for example images/first-date.jpg.
2. In chapters.js, set a chapter photo field to: photo: "images/first-date.jpg"
   For a keepsake, set its image field to: image: "images/first-date.jpg"
3. Save and refresh. The path and filename must match exactly.

NOTE
chapters.js is an editable content file, not a database. The Google Fonts import needs internet; fallback fonts will be used offline. To share the site online, you can later publish it on a free static host such as GitHub Pages.
