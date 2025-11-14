 //use both getElementById and querySelector (to play arouund)
      const toggleBtn = document.getElementById('toggleBtn');
      const dynamicPara = document.querySelector('#dynamicText');

      // initial state: dark mode
      let isDark = true;

      // helper to apply the current state to content and inline styles
      function applyState() {
        if (isDark) {
          dynamicPara.innerHTML = 'Dark mode is active. Click the button to switch to Light Mode.';
          //use .style to change colors dynamically
          dynamicPara.style.color = '#e6f1e6';
          dynamicPara.style.backgroundColor = '#0f172a';
          toggleBtn.innerHTML = 'Switch to Light Mode';
          toggleBtn.classList.remove('bg-yellow-400', 'text-slate-900');
          toggleBtn.classList.add('bg-gray-800', 'text-white');
          toggleBtn.setAttribute('aria-pressed', 'false');
        } else {
          dynamicPara.innerHTML = 'Light mode is active. Click the button to switch to Dark Mode.';
          dynamicPara.style.color = '#0f172a'; 
          dynamicPara.style.backgroundColor = '#f8fafc';
          toggleBtn.innerHTML = 'Switch to Dark Mode';
          toggleBtn.classList.remove('bg-gray-800', 'text-white');
          toggleBtn.classList.add('bg-yellow-400', 'text-slate-900');
          toggleBtn.setAttribute('aria-pressed', 'true');
        }
      }

      // wire up the click handler
      toggleBtn.addEventListener('click', () => {
        isDark = !isDark;
        applyState();
      });

      // apply initial visuals
      applyState();