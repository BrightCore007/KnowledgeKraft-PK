document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <!-- Footing Section -->

<footer
  class="relative bg-surface-light dark:bg-surface-dark pt-20 pb-10 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
>
  <!-- Decorative Background Blurs -->
  <div
    class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none"
  >
    <div
      class="absolute top-[-20%] right-[-10%] w-150 h-150 bg-primary/5 rounded-full blur-[120px]"
    ></div>
    <div
      class="absolute bottom-[-20%] left-[-10%] w-150 h-125 bg-secondary/5 rounded-full blur-[100px]"
    ></div>
  </div>
  <!-- Footer Content coulmn 01-->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
    >
      <div class="space-y-6">
        <div class="flex items-center gap-2 group cursor-pointer">
          <!-- Footer Logo & Text -->
          <div class="relative w-10 h-10">
            <img
              alt="KnowledgeKraft Logo"
              class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              src="assests/images/kk-logo.png"
            />
          </div>
          <span
            class="font-display font-bold text-2xl text-slate-800 dark:text-white tracking-tight"
            >KnowledgeKraft.pk</span
          >
        </div>
        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          Empowering the next generation of tech leaders with free, practical,
          and accessible computer education. Join our mission to make learning
          technology accessible to everyone.
        </p>
        <div class="flex items-center gap-2 text-sm font-semibold text-primary">
          <span class="material-icons-round text-base">verified</span>
          Trusted by 10,000+ Students
        </div>
      </div>
      <!-- Footer Content column 02 -->
      <div class="lg:pl-8">
        <h3
          class="font-display font-bold text-lg text-slate-800 dark:text-white mb-6 flex items-center gap-2"
        >
          Quick Links
          <div class="h-1 w-8 bg-primary rounded-full"></div>
        </h3>
        <ul class="space-y-3 text-sm">
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary group-hover:w-3 transition-all"
              ></span
              >Home</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary group-hover:w-3 transition-all"
              ></span
              >About Us</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary group-hover:w-3 transition-all"
              ></span
              >All Courses</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary group-hover:w-3 transition-all"
              ></span
              >Latest Tutorials</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary group-hover:w-3 transition-all"
              ></span
              >Success Stories</a
            >
          </li>
        </ul>
      </div>
      <!-- Footer Content Column 03 -->
      <div>
        <h3
          class="font-display font-bold text-lg text-slate-800 dark:text-white mb-6 flex items-center gap-2"
        >
          Resources
          <div class="h-1 w-8 bg-secondary rounded-full"></div>
        </h3>
        <ul class="space-y-3 text-sm">
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-secondary group-hover:w-3 transition-all"
              ></span
              >Help Center</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-secondary group-hover:w-3 transition-all"
              ></span
              >Privacy Policy</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-secondary group-hover:w-3 transition-all"
              ></span
              >Terms of Service</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-secondary group-hover:w-3 transition-all"
              ></span
              >Community Forum</a
            >
          </li>
          <li>
            <a
              class="text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary transition-all flex items-center gap-2 group"
              href="#"
              ><span
                class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-secondary group-hover:w-3 transition-all"
              ></span
              >Contact Support</a
            >
          </li>
        </ul>
      </div>
      <!-- Footer Content Column 04 -->
      <div>
        <h3
          class="font-display font-bold text-lg text-slate-800 dark:text-white mb-6 flex items-center gap-2"
        >
          Stay Updated
          <div class="h-1 w-8 bg-accent rounded-full"></div>
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Subscribe to our newsletter for the latest blogs news tutorials and
          course updates.
        </p>
        <form class="mb-6" onsubmit="event.preventDefault();">
          <div class="relative group">
            <input
              class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-sm rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm"
              placeholder="Enter your email"
              type="email"
            />
            <button
              class="absolute right-1.5 top-1.5 bg-primary hover:bg-secondary text-white p-1.5 rounded-md transition-all shadow-md hover:scale-105"
              type="submit"
            >
              <span class="material-icons-round text-lg">send</span>
            </button>
          </div>
        </form>
        <!-- Social Media Links -->
        <div class="flex flex-wrap gap-3">
          <a
            class="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            href="https://www.facebook.com/profile.php?id=61584785823077"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              ></path>
            </svg>
          </a>
          <a
            class="w-9 h-9 flex items-center justify-center rounded-lg bg-pink-600/10 text-pink-600 dark:text-pink-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            href="#"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              ></path>
            </svg>
          </a>
          <a
            class="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            href="#"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
              ></path>
            </svg>
          </a>
          <a
            class="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/10 text-slate-800 dark:bg-white/10 dark:text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            href="#"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
          </a>
          <a
            class="w-9 h-9 flex items-center justify-center rounded-lg bg-red-600/10 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            href="#"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path>
            </svg>
          </a>
  <a
  class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900/10 text-gray-900 dark:bg-white/10 dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
  href="https://www.tiktok.com/@yourusername"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Follow us on TikTok"
>
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.02v10.95c0 3.32-2.68 6.01-6 6.01s-6-2.69-6-6.01 2.68-6.01 6-6.01c.47 0 .93.06 1.37.17v4.06c-.44-.13-.9-.23-1.37-.23-1.07 0-1.93.87-1.93 1.94s.86 1.94 1.93 1.94 1.93-.87 1.93-1.94V.02z"
    ></path>
  </svg>
</a>
        </div>
      </div>
    </div>
    <!-- Footer Bottom -->
    <div
      class="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <p
        class="text-sm text-slate-500 dark:text-slate-500 text-center md:text-left"
      >
        © 2026 KnowledgeKraft.pk. All rights reserved.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <a
          class="text-xs text-slate-500 hover:text-primary transition-colors"
          href="#"
          >Sitemap</a
        >
        <a
          class="text-xs text-slate-500 hover:text-primary transition-colors"
          href="#"
          >Cookie Settings</a
        >
        <p
          class="text-xs text-slate-400 flex items-center gap-1 border-l pl-4 border-gray-200 dark:border-gray-700"
        >
          Made with
          <span class="material-icons-round text-red-500 text-sm animate-pulse"
            >favorite</span
          >
          in Pakistan
        </p>
      </div>
    </div>
  </div>
</footer>

    `;

  document.getElementById("footer-placeholder").innerHTML = footerHTML;
});
