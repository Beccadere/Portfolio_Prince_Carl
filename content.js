/* Portfolio content (single source of truth). Structure adapted from Jericho Andren's portfolio. */
const PORTFOLIO = {
 "personal": {
  "name": "Prince Carl Albero",
  "initials": "PA",
  "role": "BSIT Student / Technical Support",
  "availability": "Open to internship / entry-level roles",
  "location": "Philippines",
  "github": "https://github.com/Beccadere",
  "linkedin": "https://www.linkedin.com/in/nefer-rimuru-13a752447/",
  "portfolioRepo": "https://github.com/Beccadere/Portfolio_Prince_Carl",
  "email": "neferrimuru@gmail.com",
  "phone": "",
  "showEmail": true,
  "showPhone": false,
  "photo": "profile.jpg",
  "photoAlt": "Portrait of Prince Carl Albero",
  "resume": {
   "available": true,
   "file": "resume.pdf",
   "label": "Prince-Carl-Albero-Resume.pdf"
  }
 },
 "about": {
  "paragraphs": [
   "I am a <strong>BSIT student at Datamex College of Saint Adeline</strong> specializing in technical support. I want to turn classroom learning into useful, well-documented solutions, and I am interested in how websites, databases, data, and support processes work together to solve everyday problems.",
   "My technical skills are still developing: I build responsive pages with HTML, CSS, and JavaScript, I analyze data with Excel and SQL, and I am practicing Git and troubleshooting. I value reliability, respectful communication, privacy, and honesty about what I can do.",
   "My goal is an entry-level role in technical support or web development, where I can grow with a team, test my work, and explain it clearly."
  ],
  "strengths": [
   "Methodical troubleshooting: test one cause at a time",
   "Clear, patient communication with non-technical users",
   "Careful documentation of what I did and what I found",
   "Honest about my skill level and open to feedback"
  ],
  "interests": [
   "Technical support and troubleshooting",
   "Data analysis and databases",
   "Web development"
  ]
 },
 "education": {
  "items": [
   {
    "title": "Bachelor of Science in Information Technology (BSIT)",
    "school": "Datamex College of Saint Adeline",
    "meta": "Undergraduate student · Specialization: Technical Support",
    "detail": "Building foundations across programming, web systems, databases, and troubleshooting."
   }
  ],
  "coursework": [
   "Information technology fundamentals",
   "Web development basics (HTML, CSS, JavaScript)",
   "Data analysis with Excel and SQL (Case 12)",
   "Technical support and troubleshooting"
  ]
 },
 "skills": {
  "note": "Levels describe real experience, not percentages. No evidence, no skill claim.",
  "categories": [
   {
    "name": "Programming",
    "level": "beginner",
    "icon": "▣",
    "items": [
     "JavaScript"
    ],
    "evidence": {
     "title": "Evidence: real code from this portfolio",
     "code": [
      {
       "file": "main.js",
       "label": "Contact form validation",
       "explain": "Reads each field from the form and trims extra spaces. Then it checks every rule: the name and subject must not be empty, the email must match a pattern (EMAIL_RE), and the message must be at least 10 characters. Each failed field is marked invalid, and ok becomes false so the form is not sent. The hidden honeypot field is read here too, to catch bots.",
       "lang": "js",
       "code": "const name = field(\"name\").value.trim();\nconst email = field(\"email\").value.trim();\nconst subject = field(\"subject\").value.trim();\nconst message = field(\"message\").value.trim();\nconst honeyNode = field(\"_honey\");\nconst honey = honeyNode ? honeyNode.value : \"\";\n\nlet ok = true;\nsetInvalid(\"name\", !name); if (!name) ok = false;\nconst emailOk = EMAIL_RE.test(email);\nsetInvalid(\"email\", !emailOk); if (!emailOk) ok = false;\nsetInvalid(\"subject\", !subject); if (!subject) ok = false;\nconst msgOk = message.length >= 10;\nsetInvalid(\"message\", !msgOk); if (!msgOk) ok = false;"
      },
      {
       "file": "main.js",
       "label": "Scroll reveal with IntersectionObserver",
       "explain": "Fades sections in as they scroll into view. It collects every element with the reveal class. If the visitor prefers reduced motion, or the browser has no IntersectionObserver, everything is shown right away. Otherwise an IntersectionObserver adds the visible class once an element is 10% on screen, then stops watching it.",
       "lang": "js",
       "code": "function initReveal() {\n  const nodes = $$(\".reveal\");\n  if (prefersReduced || !(\"IntersectionObserver\" in window)) {\n    nodes.forEach((n) => n.classList.add(\"visible\"));\n    return;\n  }\n  const obs = new IntersectionObserver(\n    (entries) =>\n      entries.forEach((e) => {\n        if (e.isIntersecting) {\n          e.target.classList.add(\"visible\");\n          obs.unobserve(e.target);\n        }\n      }),\n    { threshold: 0.1 }\n  );\n  nodes.forEach((n) => obs.observe(n));\n}"
      }
     ],
     "link": "#contact",
     "linkLabel": "Try the contact form"
    }
   },
   {
    "name": "Web Development",
    "level": "beginner",
    "icon": "◆",
    "items": [
     "HTML",
     "CSS"
    ],
    "evidence": {
     "title": "Evidence: real code from this portfolio",
     "code": [
      {
       "file": "index.html",
       "label": "Contact form fields (HTML)",
       "explain": "Each field is a div that wraps a label, an input and a hidden error message. The label's for attribute matches the input's id, so clicking the label focuses the field and screen readers announce it. The required, type=\"email\" and autocomplete attributes give built-in browser validation and autofill. The error line stays hidden until JavaScript marks the field invalid.",
       "lang": "html",
       "code": "<div class=\"field\" data-field=\"name\">\n  <label for=\"f-name\">Name</label>\n  <input id=\"f-name\" name=\"name\" type=\"text\" placeholder=\"Your full name\" autocomplete=\"name\" required />\n  <p class=\"error\">Please enter your name.</p>\n</div>\n\n<div class=\"field\" data-field=\"email\">\n  <label for=\"f-email\">Email</label>\n  <input id=\"f-email\" name=\"email\" type=\"email\" placeholder=\"you@company.com\" autocomplete=\"email\" required />\n  <p class=\"error\">Enter a valid email address.</p>\n</div>"
      },
      {
       "file": "styles.css",
       "label": "Card and grid layout (CSS)",
       "explain": "The .card class styles every box on the page. It uses CSS variables such as var(--surface) and var(--rule), so it follows the light and dark theme automatically, and it has a smooth hover transition. .grid-2, .grid-3 and .grid-4 are reusable CSS Grid layouts that split a row into 2, 3 or 4 equal columns using fr units.",
       "lang": "css",
       "code": ".card{\n  background:var(--surface);\n  border:1px solid var(--rule);\n  border-radius:var(--radius);\n  padding:1.7rem;\n  transition:border-color .18s,box-shadow .18s;\n}\n.card:hover{border-color:var(--rule-strong);box-shadow:var(--shadow-sm)}\n.card-title{\n  margin:0 0 .8rem;font-size:.78rem;font-weight:700;letter-spacing:.14em;\n  text-transform:uppercase;color:var(--ink);font-family:var(--font-mono);\n}\n.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:1.3rem}\n.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.3rem}\n.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem}"
      },
      {
       "file": "styles.css",
       "label": "Responsive breakpoint (CSS)",
       "explain": "This media query applies when the screen is 1020px wide or narrower (tablets and small laptops). The hero becomes one column, the 4-column and 3-column grids drop to 2, and the two-column layouts (resume, contact, presence) stack into one. The project card stacks too, the GitHub nav button is hidden, and the profile panel is reordered so the photo and name sit above the intro text.",
       "lang": "css",
       "code": "@media (max-width:1020px){\n  .hero-grid{grid-template-columns:1fr;gap:1.9rem}\n  .grid-4{grid-template-columns:repeat(2,1fr)}\n  .grid-3{grid-template-columns:1fr 1fr}\n  .pf-grid{grid-template-columns:1fr}\n  .pf-media{border-right:0;border-bottom:1px solid var(--rule);padding:1.7rem}\n  .resume-grid,.contact-grid,.presence-grid,.grid-2{grid-template-columns:1fr}\n  .nav-cta .btn-ghost{display:none}\n  /* One column: dissolve the side panel so its parts can sit around the copy —\n     photo and name above the pitch, \"Currently\" and the tags below it. */\n  .portrait{display:contents}\n  .portrait-frame{order:-2;width:132px;height:132px}\n  .portrait-caption{order:-1}\n  .now-card{order:1}\n  .portrait-tags{order:2}\n}"
      }
     ]
    }
   },
   {
    "name": "Version Control",
    "level": "beginner",
    "icon": "⑂",
    "items": [
     "Git / GitHub (learning)"
    ],
    "evidence": {
 "title": "Evidence: this portfolio's repository",
 "points": [
  "Source code is kept in a public GitHub repository",
  "Site is published with GitHub Pages from the main branch"
 ],
 "link": "https://github.com/Beccadere/Portfolio_Prince_Carl",
 "linkLabel": "View my GitHub repository"
}
   },
   {
    "name": "Data Analysis",
    "level": "beginner",
    "icon": "▤",
    "items": [
     "Excel / Google Sheets"
    ],
    "evidence": {
     "title": "Evidence: Case 12 — IT Service Request Analysis",
     "points": [
      "50 service records cleaned and analysed in Excel",
      "Software was the most common issue: 16 of 50 (32%)",
      "First-contact resolution: 29 of 50 (58%)",
      "Resolution time vs satisfaction: r = -0.591"
     ],
     "file": "projects/case-12-service-requests/Case_12_Data_Analysis_COMPLETED.xlsx",
     "fileLabel": "View workbook"
    }
   },
   {
    "name": "AI-Assisted Work",
    "level": "beginner",
    "icon": "✦",
    "items": [
     "AI tools with verification and an AI usage log"
    ]
   }
  ]
 },
 "certifications": {
  "note": "Certificates of participation from short online webinars (August 2026). They record attendance and are not professional licences.",
  "items": [
   {
    "title": "Code, Create, Deploy: A Hands-on Introduction to Building and Publishing Websites",
    "issuer": "Ethel Programming Computer Programming Services",
    "date": "August 4, 2026",
    "duration": "1 hour",
    "mode": "Online Webinar via Google Meet",
    "speaker": "Mr. Maeron Joseph Reyes",
    "screenshot": "code-create-deploy.jpg"
   },
   {
    "title": "Digital Office Mastery: Essential Skills for Computer & Administrative Staff",
    "issuer": "Ethel Programming Computer Programming Services",
    "date": "August 5, 2026",
    "duration": "1 hour",
    "mode": "Online Webinar via Google Meet",
    "speaker": "Mr. Ryan Jeffrey Ricafort",
    "screenshot": "digital-office.jpg"
   },
   {
    "title": "The Future of Network Security, AI, Automation and Zero Trust",
    "issuer": "Ethel Programming Computer Programming Services",
    "date": "August 5, 2026",
    "duration": "2 hours",
    "mode": "Online Webinar via Google Meet",
    "speaker": "",
    "screenshot": "network-security.jpg"
   },
   {
    "title": "Next Gen Arduino: Innovation Through Embedded Technology",
    "issuer": "Ethel Programming Computer Programming Services",
    "date": "August 6, 2026",
    "duration": "1 hour",
    "mode": "Online Webinar via Google Meet",
    "speaker": "Ms. Jasmine Kate Patiño",
    "screenshot": "arduino.jpg"
   },
   {
    "title": "Linux & System Administration: Master the Command Line",
    "issuer": "Ethel Programming Computer Programming Services",
    "date": "August 7, 2026",
    "duration": "2 hours",
    "mode": "Online Webinar via Google Meet",
    "speaker": "Mr. Jhon Bert Villarosa",
    "screenshot": "linux-sysadmin.jpg"
   }
  ]
 },
 "projects": [
  {
   "number": 1,
   "published": true,
   "title": "Group Project: Aria's Cafe Ordering and Reservation Website",
   "category": "Web Development",
   "type": "Group project",
   "role": "I worked with my group on the website's frontend: the page layouts and styling in HTML and CSS, and the JavaScript for the menu, cart, checkout, and reservation form.",
   "overview": "A multi-page website for a cafe. Customers can browse the menu, add drinks to a cart, check out, and book a table. It runs entirely in the browser, with no backend.",
   "problem": "A small cafe needs an easy way for customers to see the menu, order, and reserve a table online without calling or visiting first.",
   "solution": "A responsive site with Home, About, News, Menu, Contact, and Reservation pages. The menu, carts, orders, and reservations are saved in the browser's localStorage, so the full ordering flow can be demonstrated without a server.",
   "process": [
    "Plan the pages: Home, About (history, mission and vision), News, Menu, Contact, and Reservation",
    "Build the page layouts and styling with HTML and CSS, including a sticky navigation bar, dropdown menu, and featured-items section",
    "Write JavaScript to load the menu, with default items on the first visit, and to show it as cards",
    "Add a cart for each logged-in user, then a checkout form with Cash on Delivery, GCash, and Maya options",
    "Add the reservation form and save each booking with a Pending status"
   ],
   "challenges": [
    {
     "challenge": "There is no backend, but menu items, carts, orders, and reservations still had to be saved",
     "solution": "Stored them as JSON in the browser's localStorage, so the full flow works as a demo. The trade-off is that the data stays on one device and is not secure."
    },
    {
     "challenge": "Each customer needed a separate cart",
     "solution": "Saved the cart under a key built from the logged-in user's email, so different accounts do not share items."
    },
    {
     "challenge": "Online payment could not be real, but the order still needed a payment record",
     "solution": "Required an address, a phone number, and a reference number for GCash and Maya before the order can be placed. No real payment is processed."
    }
   ],
   "features": [
    "Menu loaded from stored data, with default items",
    "Cart per user with add, remove, and running total",
    "Checkout with COD, GCash, and Maya options and form validation",
    "Table reservation form",
    "Profile menu with login and logout links",
    "Responsive layout"
   ],
   "technologies": [
    "HTML",
    "CSS",
    "JavaScript",
    "localStorage"
   ],
   "repo": "",
   "demo": "aria-cafe.html",
   "docs": "",
   "demoNote": "Frontend prototype. Data is stored in the browser only, and payments are not processed.",
   "screenshot": "",
   "lessons": "A frontend-only prototype is good for showing how an ordering flow works, but real orders need a backend and a database for security, shared data, and real payments. Working in a group also taught me to keep file names and image paths consistent so the pages do not break."
  },
  {
   "number": 2,
   "published": true,
   "title": "Midterm Test: IT Service Request Analysis (Case 12)",
   "category": "Data Analysis",
   "type": "Midterm test",
   "role": "I cleaned the dataset, computed the statistics, and built the pivot-style summary and charts in Excel.",
   "overview": "My midterm test: analysis of 50 IT service requests (August 2026): response time, resolution time, priority, technician, and customer satisfaction.",
   "problem": "An IT support desk needs to know which problems are most common, how long they take to resolve, and whether slower resolutions lower satisfaction.",
   "solution": "Cleaned data, descriptive statistics, summary tables, a pivot-style summary, three charts, a correlation analysis, and recommendations.",
   "process": [
    "Inspect and clean the 50 service records",
    "Compute mean, median, min, and max for response time, resolution time, and satisfaction",
    "Summarize by issue type, priority, and technician",
    "Build a pivot-style summary and three charts",
    "Calculate the correlation between resolution time and satisfaction (r = -0.591)"
   ],
   "challenges": [
    {
     "challenge": "Keeping the answer sheet and the PivotTable sheet consistent",
     "solution": "I compared the same grouped averages in both. One value differed by rounding (Software response time: 31.12 in the answer sheet, 31.13 in the PivotTable sheet)."
    }
   ],
   "features": [
    "Descriptive statistics",
    "Summary tables and a pivot-style summary",
    "Three charts",
    "Correlation analysis"
   ],
   "technologies": [
    "Excel"
   ],
   "results": [
    {
     "label": "Records analysed",
     "value": "50"
    },
    {
     "label": "Most common issue",
     "value": "Software, 16 of 50 (32%)"
    },
    {
     "label": "First-contact resolution",
     "value": "29 of 50 (58%)"
    },
    {
     "label": "Avg response time",
     "value": "33.44 min"
    },
    {
     "label": "Avg resolution time",
     "value": "3.85 hr"
    },
    {
     "label": "Avg satisfaction",
     "value": "4.55 / 5"
    },
    {
     "label": "Resolution time vs satisfaction",
     "value": "r = -0.591"
    }
   ],
   "repo": "",
   "demo": "",
   "docs": "",
   "file": "projects/case-12-service-requests/Case_12_Data_Analysis_COMPLETED.xlsx",
   "fileLabel": "Download workbook",
   "workbook": "projects/case-12-service-requests/Case_12_Data_Analysis_COMPLETED.xlsx",
   "demoNote": "View the workbook sheets here, or download the Excel file to see the three charts.",
   "screenshot": "assets/projects/case-12-charts.png",
   "lessons": "Averages and charts are only trustworthy after the data is cleaned and cross-checked. A negative correlation shows association, not causation."
  },
  {
   "number": 3,
   "published": false,
   "title": "Project 3 — Specialization (to be added)",
   "category": "",
   "type": "",
   "role": "",
   "overview": "",
   "problem": "",
   "solution": "",
   "process": [],
   "challenges": [],
   "features": [],
   "technologies": [],
   "repo": "",
   "demo": "",
   "docs": "",
   "demoNote": "",
   "screenshot": "",
   "lessons": ""
  }
 ],
 "cases": [
  {
   "published": true,
   "title": "Sample case 1: Computer cannot connect to Wi-Fi",
   "symptoms": "Computer cannot connect to Wi-Fi",
   "investigation": "Test other devices; check airplane mode and adapter status; inspect IP configuration; run OS diagnostics",
   "rootCause": "Disabled adapter, driver problem, incorrect IP configuration, router problem, DNS problem",
   "solution": "Apply the fix the test indicates (enable adapter, update driver, renew IP, set DNS)",
   "tools": "OS diagnostics, browser, ping/ipconfig",
   "lesson": "Isolate device-specific vs network-wide faults first"
  },
  {
   "published": true,
   "title": "Sample case 2: Computer is running slowly",
   "symptoms": "Computer is running slowly",
   "investigation": "Check Task Manager, storage, startup items, update and security status",
   "rootCause": "Startup apps, low storage, high CPU/RAM, pending updates, malware",
   "solution": "Close or disable unneeded items with approval, free space safely, update, scan",
   "tools": "OS diagnostics, browser, ping/ipconfig",
   "lesson": "Measure first and back up user files before repairs"
  },
  {
   "published": true,
   "title": "Sample case 3: Website cannot be reached",
   "symptoms": "Website cannot be reached",
   "investigation": "Verify the URL; test other sites and devices; check DNS resolution and error messages",
   "rootCause": "No internet, DNS failure, wrong URL, cache, proxy/firewall, site outage",
   "solution": "Fix the URL or DNS/connection issue, or report an outage",
   "tools": "OS diagnostics, browser, ping/ipconfig",
   "lesson": "Separate browser, DNS, network, and server problems"
  },
  {
   "published": true,
   "title": "Sample case 4: Printer will not print",
   "symptoms": "Printer will not print",
   "investigation": "Check power and display, supplies, selected printer, and queue; print a test page",
   "rootCause": "Offline printer, no paper/ink, stuck queue, wrong printer, driver/network",
   "solution": "Resolve the error, clear the stuck job, reinstall the approved driver if needed",
   "tools": "OS diagnostics, browser, ping/ipconfig",
   "lesson": "Do simple physical checks first"
  },
  {
   "published": true,
   "title": "Sample case 5: Application login fails",
   "symptoms": "Application login fails",
   "investigation": "Record the exact error (never the password); check service status; try a private window",
   "rootCause": "Typo, expired password, locked account, outage, wrong system time",
   "solution": "Use the official reset process or escalate",
   "tools": "OS diagnostics, browser, ping/ipconfig",
   "lesson": "Protect credentials; never bypass access controls"
  }
 ],
 "security": {
  "disclaimer": "I am a BSIT student, not a security engineer. This section shows defensive awareness only.",
  "topics": [
   {
    "name": "SQL injection: what is it?",
    "body": "Untrusted input is mixed into SQL text and changes the intended query."
   },
   {
    "name": "How can it happen?",
    "body": "Queries built by string concatenation on login or search forms, without parameter binding or validation."
   },
   {
    "name": "What are the risks?",
    "body": "Data theft, modification or deletion, login bypass, and exposure of confidential information."
   },
   {
    "name": "How can developers prevent it?",
    "body": "Use parameterized queries or prepared statements, validate input, and give database accounts only the permissions they need."
   },
   {
    "name": "Which security practices help?",
    "body": "Hide detailed database errors, keep software updated, log suspicious activity, and test only in authorized labs."
   }
  ],
  "implementedTitle": "Controls in this portfolio's contact form",
  "implemented": [
   {
    "label": "Honeypot field",
    "body": "A hidden field that real visitors never fill in. Bots that do are dropped."
   },
   {
    "label": "Input validation",
    "body": "Name, email, and message length are checked before sending, and re-checked by the PHP route when it is used."
   },
   {
    "label": "No fake success",
    "body": "A success message appears only when the mail service confirms it accepted the message."
   }
  ]
 },
 "ai": {
  "stance": "AI is a tool I use to learn faster, not a replacement for my own judgement. I record how I use it and check what it gives me.",
  "principles": [
   {
    "label": "Assist",
    "body": "Use AI to draft, explain errors, and suggest structure."
   },
   {
    "label": "Verify",
    "body": "Read and test everything. Fix or reject what is wrong."
   },
   {
    "label": "Disclose",
    "body": "Record AI use in the log below."
   }
  ],
  "verificationRule": "If I cannot explain it and test it, I do not ship it.",
  "log": [
   {
    "tool": "AI assistant (Claude)",
    "purpose": "Drafted the portfolio layout and starter copy from the BSIT guidelines",
    "output": "Layout and section structure",
    "verification": "Opened it in the browser and checked each section against the PDF; entered my own details",
    "decision": "Keep / Edit"
   },
   {
    "tool": "AI assistant (Claude)",
    "purpose": "Compared my site with the guideline PDF",
    "output": "List of missing sections and wrong notes",
    "verification": "Rechecked each item in the PDF; kept TODO placeholders where I have no evidence",
    "decision": "Keep"
   }
  ]
 },
 "career": {
  "target": "Technical Support Specialist / Junior Web Developer",
  "steps": [
   {
    "when": "Now",
    "title": "Build honest proof",
    "current": true,
    "detail": "Finish and document Projects 1 and 3, practice Git weekly, and keep this portfolio updated."
   },
   {
    "when": "6 months",
    "title": "Complete 2 documented projects",
    "current": false,
    "detail": "Practice SQL and Git every week."
   },
   {
    "when": "1 year",
    "title": "Deploy a full-stack project",
    "current": false,
    "detail": "Apply for internships or entry-level roles."
   },
   {
    "when": "3 years",
    "title": "Dependable IT professional",
    "current": false,
    "detail": "A focused specialization and a strong track record."
   }
  ],
  "learning": [
   "SQL and database design",
   "Backend development",
   "Git and GitHub workflow",
   "Networking fundamentals",
   "Testing and deployment"
  ]
 },
 "reflection": [
  "Before BSIT I mostly knew how to use computers, apps, and the internet. I did not yet see how systems, data, and support work behind them.",
  "The most important thing I learned is that problems need a process: find the symptoms, list possible causes, test one at a time, and document the result. Clear documentation matters as much as the fix.",
  "So far the Case 12 data analysis and this portfolio have taught me the most, because they made me organize evidence and be honest about what I can prove. I still need to improve SQL, backend development, Git, networking, testing, and deployment.",
  "I want to become a dependable technical support and web professional who solves problems patiently, communicates clearly, and keeps learning. I am ready to start at entry level and grow."
 ],
 "contact": {
  "intro": "Best for internships, entry-level roles, and technical questions. You can also email neferrimuru@gmail.com.",
  "formNote": "Your message is delivered by email. A success message appears only when the mail service confirms it.",
  "relay": {
   "enabled": true,
   "provider": "web3forms",
   "endpoint": "https://api.web3forms.com/submit",
   "accessKey": ""
  }
 }
};
window.PORTFOLIO = PORTFOLIO;
