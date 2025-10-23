Project: Personal Portfolio - Files report

This README contains a short, per-page report describing each HTML file in the site. Each entry is 3-4 lines: what the page is for and how it is implemented.

Files report
------------

index.html
- Purpose: Home/landing page with hero, brief intro and clear CTAs linking to Projects and Contact.
- Implementation: Semantic HTML with a <header> and <main> hero section; responsive CSS grid for featured items; external stylesheet at css/styles.css and progressive enhancement via js/main.js.
- Accessibility: ARIA labels for the hero and focus-visible styles; links use descriptive text and open internal anchors.

about.html
- Purpose: Personal bio and profile information, with a small embedded map and contact link.
- Implementation: Uses <figure> for the portrait, semantic sections for bio and education, and an iframe for a map; styles come from css/styles.css.
- Accessibility: Alt text for images, proper heading hierarchy, and keyboard-focusable links.

projects.html
- Purpose: Showcase projects as accessible cards and provide links to external GitHub repos and demo media.
- Implementation: Card-based layout using semantic <article>/<section>, embedded <video> for demos (assets/Remote_desktop_demo.mp4), and external links using rel attributes and target="_blank".
- Accessibility: Logical reading order, visible focus styles and descriptive link text for screen-reader users.

blog.html
- Purpose: Blog listing page to publish posts and short articles.
- Implementation: A lightweight article list with date metadata and excerpt sections; structured using <article> and headings; styling from css/styles.css.
- Accessibility: Proper heading levels and clear read-more links for each post.

gallery.html
- Purpose: Photo gallery showcasing images with captions and lazy loading for performance.
- Implementation: Images wrapped in <figure> and <figcaption> (captions visually hidden via .sr-only but preserved for screen readers); grid layout enlarged for better presentation and loading="lazy" on images.
- Accessibility: Semantic figures, alt text on images, and keyboard-accessible links where used.

contact.html
- Purpose: Full-featured contact form satisfying assignment requirements (many input types and validation).
- Implementation: Uses <form> with fieldsets, labels, and inputs (text, email, tel, number, date, range, color, file, select, datalist, radio, checkbox); client-side JS validation in js/form-validation.js.
- Accessibility: Proper label associations, required attributes, and friendly error messages; focus management for keyboard users.

resume.html
- Purpose: Curriculum Vitae page with downloadable resume and detailed sections for skills, experience, and education.
- Implementation: User-provided resume HTML integrated into site header/footer; metadata and a download reference to assets/resume.pdf (placeholder).
- Accessibility: Semantic headings, lists for experience/skills, and clear download link.

