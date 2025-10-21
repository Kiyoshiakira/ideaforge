// main.js: Shared JS for navigation, button handlers, modals, and utilities for IdeaForge

document.addEventListener('DOMContentLoaded', function () {
  // ========== DYNAMIC NAVIGATION HIGHLIGHT ==========
  // Highlight current navigation item
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    if (
      window.location.pathname.endsWith(link.getAttribute('href')) ||
      (link.getAttribute('href') === 'index.html' &&
        (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')))
    ) {
      link.style.color = '#ffd86b';
      link.style.fontWeight = 'bold';
    }
  });

  // ========== HERO/MAIN BUTTONS (INDEX) ==========
  // "Submit" and "Audition" on index.html
  const submitBtn = document.getElementById('submit-btn');
  const auditionBtn = document.getElementById('audition-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      openModal(`
                <h2>Submit Artwork</h2>
                <form onsubmit="event.preventDefault(); showToast('Submission coming soon!'); closeModal();">
                    <label>Title:<br><input type="text" placeholder="Artwork title" required></label><br>
                    <label>File:<br><input type="file" required></label><br>
                    <label>Description:<br><textarea placeholder="Describe your work"></textarea></label><br>
                    <button type="submit" class="cta-btn">Submit</button>
                </form>
            `);
    });
  }
  if (auditionBtn) {
    auditionBtn.addEventListener('click', function () {
      openModal(`
                <h2>Audition System</h2>
                <p>Browse or apply for open roles.<br>(Audition features coming soon!)</p>
                <button onclick="window.location.href='auditions.html'" class="cta-btn">Go to Auditions Page</button>
            `);
    });
  }

  // ========== START A PROJECT BUTTONS ==========
  // For forge.html and my-projects.html
  const startProjectBtn = document.querySelector(
    '.cta-btn, .start-project-btn, #start-project-btn'
  );
  // Only attach if this is the Forge page or a page with a start-project button
  if (
    startProjectBtn &&
    (document.title.includes('Forge') || document.title.includes('My Projects'))
  ) {
    startProjectBtn.addEventListener('click', function () {
      openModal(`
                <h2>Start a New Project</h2>
                <form onsubmit="event.preventDefault(); showToast('Project creation coming soon!'); closeModal();">
                    <label>Project Type:<br>
                        <select required>
                            <option value="">Select type</option>
                            <option value="art">Art / Illustration</option>
                            <option value="writing">Writing</option>
                            <option value="music">Music / Audio</option>
                            <option value="animation">Animation / Film</option>
                            <option value="game">Game</option>
                            <option value="mixed">Mixed Media / Other</option>
                        </select>
                    </label><br>
                    <label>Project Title:<br><input type="text" required maxlength="100" placeholder="Your project title"></label><br>
                    <label>Description:<br><textarea maxlength="500" placeholder="Describe your project"></textarea></label><br>
                    <label>Import Existing?
                        <input type="checkbox" id="import-existing-toggle" onchange="toggleImportFields(this.checked)">
                    </label><br>
                    <div id="import-fields" style="display: none;">
                        <label>Import from:<br>
                            <select>
                                <option value="">-- Select --</option>
                                <option value="github">GitHub</option>
                                <option value="drive">Google Drive</option>
                                <option value="dropbox">Dropbox</option>
                                <option value="upload">Upload Files</option>
                            </select>
                        </label><br>
                        <label>URL or File:<br><input type="text" placeholder="Paste link or browse files (future)"></label><br>
                    </div>
                    <button type="submit" class="cta-btn">Create Project</button>
                </form>
                <script>
                    function toggleImportFields(checked) {
                        document.getElementById('import-fields').style.display = checked ? 'block' : 'none';
                    }
                </script>
            `);
    });
  }

  // ========== MODAL UTILITIES ==========
  function openModal(html) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    if (!overlay || !body) return;
    body.innerHTML = html;
    overlay.style.display = 'flex';
    overlay.focus();
    document.body.style.overflow = 'hidden';
    // Trap focus for accessibility
    trapModalFocus();
  }
  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.onclick = closeModal;
  const overlay = document.getElementById('modal-overlay');
  if (overlay)
    overlay.onclick = function (e) {
      if (e.target === overlay) closeModal();
    };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Trap focus in modal for accessibility
  function trapModalFocus() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay || overlay.style.display === 'none') return;
    const focusable = overlay.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    let first = focusable[0];
    let last = focusable[focusable.length - 1];
    overlay.onkeydown = function (e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    setTimeout(() => first.focus(), 50);
  }

  // ========== TOAST/ALERT UTILITIES ==========
  window.showToast = function (msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    toast.style.position = 'fixed';
    toast.style.bottom = '28px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#421e7c';
    toast.style.color = '#ffd86b';
    toast.style.padding = '16px 26px';
    toast.style.borderRadius = '14px';
    toast.style.fontWeight = 'bold';
    toast.style.boxShadow = '0 2px 14px rgba(80,30,140,.19)';
    toast.style.zIndex = 9999;
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2600);
  };

  // ========== GENERIC "COMING SOON" HANDLER ==========
  document.querySelectorAll('button[aria-label="Coming Soon"], .plan-btn').forEach((btn) => {
    btn.addEventListener('click', () => showToast('Feature coming soon!'));
  });

  // ========== GALLERY/SHOWCASE POPULATION EXAMPLE ==========
  const gallery = document.getElementById('gallery');
  if (gallery) {
    const items = [
      { img: 'https://placehold.co/400x300', caption: 'Artwork 1' },
      { img: 'https://placehold.co/400x300', caption: 'Artwork 2' },
      { img: 'https://placehold.co/400x300', caption: 'Artwork 3' },
    ];
    gallery.innerHTML = items
      .map(
        (item) => `
            <div class="gallery-item">
                <img src="${item.img}" alt="${item.caption}">
                <div class="caption">${item.caption}</div>
            </div>
        `
      )
      .join('');
  }
});
