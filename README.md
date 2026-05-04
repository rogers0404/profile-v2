# Rogers Ramirez Professional Portfolio

This repository contains the personal portfolio site for Rogers Ramirez, a Software Developer, QA Engineer, and Instrumentation Engineer based in Davenport, Florida.

The site highlights software quality, automation, AWS certification, full-stack development, and an Oil & Gas reliability engineering background.

## Site Information

The homepage is organized around the information most useful to recruiters, collaborators, and project partners:

- Professional summary focused on QA engineering, software development, instrumentation, cloud certification, and reliability engineering.
- Expertise in quality strategy, automation, AWS cloud readiness, and full-stack development fundamentals.
- Career path including QA Engineer work with Capco, freelance full-stack development, and control and reliability engineering experience with PDVSA Petrocedeno.
- Selected work areas covering QA delivery, repeatable test coverage, and the TechRisk Framework project.
- Contact section with direct email, phone, LinkedIn, and GitHub links.

## Contact

Use any of these channels to reach out:

- Email: [rogers.ramirez2008@gmail.com](mailto:rogers.ramirez2008@gmail.com)
- LinkedIn: [linkedin.com/in/rogers-ramirez](https://www.linkedin.com/in/rogers-ramirez)
- GitHub: [github.com/rogers0404](https://github.com/rogers0404)

## Featured Project

- TechRisk Framework: [rogers0404.github.io/tech-risk-informational](https://rogers0404.github.io/tech-risk-informational/)

## Repository

- GitHub repository: [github.com/rogers0404/profile-v2](https://github.com/rogers0404/profile-v2)
- Live site: [rogers0404.github.io/profile-v2](https://rogers0404.github.io/profile-v2/)

## Project Structure

```text
.
├── index.html
├── css/
│   └── professional.css
├── js/
│   └── professional.js
├── images/
│   ├── author-1.jpg
│   ├── work-1.jpg
│   ├── work-2.jpg
│   └── work-3.jpg
├── old-files/
└── README.md
```

`old-files/` contains legacy template files and assets that are no longer used by the current homepage.

## Local Preview

Because this is a static site, it can be opened directly in a browser from `index.html`.

To serve it locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Validation

The current site has been checked with:

```bash
git diff --check
node --check js/professional.js
```
