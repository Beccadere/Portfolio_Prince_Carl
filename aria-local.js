/* =====================================================================
   aria-local.js  -  frontend-only support layer for Aria's Cafe
   ---------------------------------------------------------------------
   The original project talked to a Node server at http://localhost:3000
   (/login and /register). On a static host (GitHub Pages) that server
   does not exist, so this file answers those two calls in the browser
   using localStorage. No other page logic was changed.
   Everything is stored in the visitor's own browser only.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- 1. seed demo accounts (first visit only) ---------- */
  var DEMO_ADMIN = { id: 1, name: "Aria Admin", email: "admin@gmail.com", number: "09123456789", password: "Admin123", role: "admin" };
  var DEMO_USER  = { id: 2, name: "Demo Customer", email: "demo@gmail.com", number: "09987654321", password: "Demo1234", role: "user" };

  function readUsers() {
    try { return JSON.parse(localStorage.getItem("users")) || []; } catch (e) { return []; }
  }
  function writeUsers(list) {
    try { localStorage.setItem("users", JSON.stringify(list)); } catch (e) {}
  }
  function seed() {
    var users = readUsers();
    [DEMO_ADMIN, DEMO_USER].forEach(function (d) {
      if (!users.some(function (u) { return u.email === d.email; })) users.push(d);
    });
    writeUsers(users);
  }
  seed();

  /* ---------- 2. answer the old backend calls locally ---------- */
  function reply(status, body) {
    return Promise.resolve(new Response(JSON.stringify(body), {
      status: status, headers: { "Content-Type": "application/json" }
    }));
  }
  function bodyOf(init) {
    try { return JSON.parse((init && init.body) || "{}"); } catch (e) { return {}; }
  }
  function safeUser(u) {
    return { id: u.id, name: u.name, fullname: u.name, email: u.email, number: u.number, role: u.role };
  }

  var realFetch = window.fetch ? window.fetch.bind(window) : null;
  window.fetch = function (url, init) {
    var u = String(url);

    if (u.indexOf("localhost:3000/login") !== -1) {
      var b = bodyOf(init);
      var found = readUsers().filter(function (x) {
        return x.email.toLowerCase() === String(b.email || "").trim().toLowerCase() && x.password === b.password;
      })[0];
      if (!found) return reply(401, { message: "Invalid email or password" });
      return reply(200, { message: "Login successful", user: safeUser(found) });
    }

    if (u.indexOf("localhost:3000/register") !== -1) {
      var r = bodyOf(init);
      var list = readUsers();
      var email = String(r.email || "").trim().toLowerCase();
      if (list.some(function (x) { return x.email.toLowerCase() === email; })) {
        return reply(400, { message: "Email already registered" });
      }
      list.push({
        id: Date.now(), name: r.name, email: email, number: r.number,
        password: r.password, role: "user"          // public sign-ups are always customers
      });
      writeUsers(list);
      return reply(201, { message: "Registered" });
    }

    return realFetch ? realFetch(url, init) : Promise.reject(new Error("fetch unavailable"));
  };

  /* ---------- 3. friendly placeholder if a photo is missing ---------- */
  function placeholder(label) {
    var t = String(label || "Aria's Cafe").replace(/[<>&"]/g, "").slice(0, 28);
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>" +
      "<rect width='100%' height='100%' fill='#efe3d3'/>" +
      "<text x='50%' y='45%' font-size='54' text-anchor='middle'>&#9749;</text>" +
      "<text x='50%' y='66%' font-size='18' font-family='Arial' fill='#6b4f3a' text-anchor='middle'>" + t + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  window.addEventListener("error", function (e) {
    var el = e.target;
    if (el && el.tagName === "IMG" && !el.dataset.ariaFallback) {
      el.dataset.ariaFallback = "1";
      el.src = placeholder(el.alt);
    }
  }, true);

  /* ---------- 4. show demo logins on the login page only ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    if (!/login\.html$/i.test(location.pathname)) return;
    var box = document.querySelector(".login-box");
    var note = document.createElement("div");
    note.style.cssText = "margin-top:18px;padding:10px 14px;border-radius:10px;background:#f6ede2;" +
      "color:#4a3a2c;font:13px/1.6 Arial,sans-serif;text-align:left";
    note.innerHTML = "<strong>Demo accounts</strong><br>" +
      "Customer: demo@gmail.com / Demo1234<br>Admin: admin@gmail.com / Admin123";
    (box || document.body).appendChild(note);
  });
})();
