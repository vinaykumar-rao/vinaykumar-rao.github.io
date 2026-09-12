# Vinay Kumar Portfolio

A personal portfolio showcasing my data analytics projects, skills, experience, and certifications. Built with HTML, CSS, and JavaScript, with a dark violet theme and an interactive illustrated avatar.

## 🌐 Live website

[Visit Vinay Kumar Portfolio](https://vinaykumar.site/)

## 👋 About me

I'm Vinay Kumar, a BCA graduate interested in data analytics, Python, Power BI, and artificial intelligence. I enjoy turning data into useful insights and exploring machine learning, Generative AI, Agentic AI, and LLMs.

## 📖 Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Folder structure](#-folder-structure)
- [Run locally](#-run-locally)
- [Contact form](#-contact-form)
- [Publish with GitHub Pages](#-publish-with-github-pages)
- [Customize](#-customize)
- [Feedback](#-feedback)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

## ✨ Features

- Responsive layouts for phones, tablets, and desktop screens.
- Cap-free, 3D-style illustrated avatar with pointer-following eyes and perspective movement.
- Touch-friendly avatar movement on devices without hover.
- Scroll-triggered section reveals, sequential About cards, and animated accent lines.
- Scrolling skills strip and interactive tool categories with locally stored icons.
- Project filters and project-detail dialogs.
- Education, internship experience, certificate links, and downloadable résumé.
- Dark/light theme switch and mobile navigation.
- Contact form with an in-page confirmation dialog and submission error handling.
- Reduced-motion support for visitors who prefer fewer animations.

The avatar is a rendered image enhanced with HTML/CSS/JavaScript interaction, not a rigged 3D model. The website does not use React or Three.js.

## 🛠 Technologies

Built with:

<p>
  <img src="assets/icons/html5.svg" width="48" height="48" alt="HTML5" title="HTML5" />&nbsp;&nbsp;
  <img src="assets/icons/css3.svg" width="48" height="48" alt="CSS3" title="CSS3" />&nbsp;&nbsp;
  <img src="assets/icons/javascript.svg" width="48" height="48" alt="JavaScript" title="JavaScript" />&nbsp;&nbsp;
  <img src="assets/icons/git.svg" width="48" height="48" alt="Git" title="Git" />&nbsp;&nbsp;
  <img src="assets/icons/github.svg" width="48" height="48" alt="GitHub" title="GitHub" />&nbsp;&nbsp;
  <img src="assets/icons/vscode.svg" width="48" height="48" alt="VS Code" title="VS Code" />
</p>

**HTML5 · CSS3 · JavaScript · Git · GitHub · VS Code**

Data tools featured in my portfolio:

<p>
  <img src="assets/icons/python.svg" width="48" height="48" alt="Python" title="Python" />&nbsp;&nbsp;
  <img src="assets/icons/pandas.svg" width="48" height="48" alt="Pandas" title="Pandas" />&nbsp;&nbsp;
  <img src="assets/icons/numpy.svg" width="48" height="48" alt="NumPy" title="NumPy" />&nbsp;&nbsp;
  <img src="assets/icons/matplotlib.svg" width="48" height="48" alt="Matplotlib" title="Matplotlib" />&nbsp;&nbsp;
  <img src="assets/icons/jupyter.svg" width="48" height="48" alt="Jupyter" title="Jupyter" />&nbsp;&nbsp;
  <img src="assets/icons/googlecloud.svg" width="48" height="48" alt="Google Cloud" title="Google Cloud" />
</p>

**Python · Pandas · NumPy · Matplotlib · Jupyter · Google Cloud**

Additional skills and interests: **Power BI · SQL · Excel · Machine Learning · Generative AI · Agentic AI · LLMs**.

| Technology | Purpose |
| --- | --- |
| HTML5 | Page content and structure |
| CSS3 | Layout, themes, responsive styling, and animations |
| JavaScript | Navigation, filters, interactive eyes, and form handling |
| Intersection Observer | Reveal sections as they enter the viewport |
| FormSubmit | Process contact-form submissions |
| GitHub Pages | Static website hosting |
| Devicon | Locally stored technology icons |

Python, Pandas, NumPy, Matplotlib, Power BI, and the AI topics shown in the toolkit describe my portfolio skills and interests; they are not dependencies required to run this website.

## 📂 Folder structure

```text
assets/
  icons/                     # Technology logos and their license
  vinay-avatar.png           # Current illustrated avatar
  vinay-kumar-resume.pdf      # Résumé
  *.pdf                      # Certificates
  *.woff2                    # Local fonts
  favicon.svg
.nojekyll                    # Static publishing configuration
CNAME                       # Custom domain: vinaykumar.site
index.html                  # Main website
styles.css                  # Base styling
updates.css                 # Additional styling and form dialog
motion.css                  # Responsive and animation styling
script.js                   # Core interactions and contact form
motion.js                   # Motion and touch interactions
preview.html                # Optional device-width preview
README.md                   # Project documentation
START-HERE.txt              # Optional quick-start notes
CONTACT-SETUP.txt           # Optional contact-service notes
```

## ▶ Run locally

1. Download the repository ZIP and extract the entire folder.
2. Open `index.html` in Chrome, Edge, or another modern browser.
3. Keep `assets/` beside `index.html`; preserve the `assets/icons/` subfolder.
4. Optionally open `preview.html` to compare desktop, tablet, and phone widths. This previews layout widths; actual touch behavior should also be checked on a phone or tablet.

No Node.js, npm installation, build command, or `.env` file is required. You can also open the folder in VS Code and use a local web server such as Live Server.

Local images, fonts, and PDFs are included. Sending a message and opening external credential links require internet access. If an embedded preview cannot display a PDF, use its download link or open the website in a full browser.

## ✉ Contact form

The form uses FormSubmit's AJAX endpoint and is configured for `raoovinayyy@gmail.com`. It submits without redirecting away from the portfolio.

After a successful response, a themed dialog says that the form was submitted successfully and Vinay will contact the visitor soon. Failed or unconfirmed submissions display an error instead of a success message.

The recipient must complete any verification requested by FormSubmit. If adapting this project for yourself, update the recipient in **both** the form action in `index.html` and the request URL in `script.js`, then activate your own address. Email delivery depends on the external service.

## 🚀 Publish with GitHub Pages

This portfolio uses the repository `vinaykumar-rao.github.io` and the custom domain `vinaykumar.site`.

1. Upload the website files to the repository root, with `index.html` at the top level.
2. Upload the complete `assets/` folder, preserving filenames and the nested `icons/` folder.
3. In **Settings → Pages**, select **Deploy from a branch**, then **main** and **/ (root)**. Save.
4. For this portfolio, keep `CNAME` set to `vinaykumar.site` and ensure the domain's DNS is configured for GitHub Pages.
5. Wait for the latest Pages deployment in **Actions** to finish successfully.
6. Open the website and verify the avatar, certificates, résumé, and contact form.

When reusing the project for a different domain, replace or remove `CNAME` as appropriate. GitHub Pages filenames are case-sensitive. `assets/icons/python.svg` and `assets/Icons/Python.svg` are different paths.

`preview.html`, `START-HERE.txt`, and `CONTACT-SETUP.txt` are optional on the public site. Keep all HTML/CSS/JavaScript dependencies, `.nojekyll`, and the required assets.

Official setup reference: [GitHub Pages documentation](https://docs.github.com/en/pages).

## 🎨 Customize

| File | What to change |
| --- | --- |
| `index.html` | Name, page title, social metadata, biography, education, links, and projects |
| `script.js` | Tool categories, project details, and form recipient |
| `motion.css` | Motion styling, contact icons, and responsive refinements |
| `motion.js` | Avatar interaction, section reveals, and touch behavior |
| `assets/` | Avatar, résumé, certificates, and fonts |

Update matching asset paths when renaming files. Keep private documents out of the public repository; files served by the website are publicly accessible.

## 💬 Feedback

Suggestions and bug reports are welcome. [Open an issue](https://github.com/vinaykumar-rao/vinaykumar-rao.github.io/issues) with a description, the affected page or section, and your browser/device details.

## 🙏 Acknowledgements

- [Devicon](https://github.com/devicons/devicon) for technology icons. The bundled icon license is in `assets/icons/LICENSE.txt`.
- [FormSubmit](https://formsubmit.co/) for contact-form processing.
- GitHub Pages for hosting.
- OpenAI tools for assistance with development and avatar generation.

## 📬 Contact

- Portfolio: [vinaykumar.site](https://vinaykumar.site/)
- Email: [raoovinayyy@gmail.com](mailto:raoovinayyy@gmail.com)
- LinkedIn: [Vinay Kumar](https://www.linkedin.com/in/vinaykumar-raoo/)
- GitHub: [vinaykumar-rao](https://github.com/vinaykumar-rao)

## License

This README does not grant an open-source license for the portfolio. Third-party assets remain subject to their respective licenses. Personal photographs, résumé, and certificates are not offered as reusable template assets.
