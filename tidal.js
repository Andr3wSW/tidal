const createOverlayMenu = () => {
  const overlay = document.createElement('div');
  const popup = document.createElement('div');
  const header = document.createElement('h1');

  // Background Overlay (Blurred)
  Object.assign(overlay.style, {
    position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)',
    zIndex: '9999', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', fontFamily: 'sans-serif'
  });

  // Popup Box
  Object.assign(popup.style, {
    backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '40px 30px', 
    borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', 
    textAlign: 'center', width: '300px'
  });

  // TIDAL Header
  header.innerText = 'TIDAL';
  Object.assign(header.style, {
    margin: '0 0 30px 0', color: '#FF8C00', fontSize: '32px',
    letterSpacing: '6px', fontWeight: '900'
  });
  popup.appendChild(header);

  // Button Factory
  const createMenuButton = (text, isPrimary, onClickAction) => {
    const btn = document.createElement('button');
    btn.innerText = text;
    
    Object.assign(btn.style, {
      display: 'block', width: '100%', margin: '12px 0', padding: '14px',
      border: 'none', borderRadius: '12px', fontWeight: 'bold', 
      cursor: 'pointer', fontSize: '13px', transition: 'all 0.2s ease',
      textTransform: 'uppercase', letterSpacing: '1px',
      backgroundColor: isPrimary ? '#FF8C00' : '#333',
      color: isPrimary ? 'white' : '#bbb'
    });

    btn.onmouseover = () => { btn.style.opacity = '0.8'; btn.style.transform = 'scale(1.02)'; };
    btn.onmouseout = () => { btn.style.opacity = '1'; btn.style.transform = 'scale(1)'; };
    btn.onclick = onClickAction;
    return btn;
  };

  // 1. Desync Button (Now uses alert)
  popup.appendChild(createMenuButton('Desync Button', true, () => {
    alert('Activity Desynced');
  }));

  // 2. Unpause Button (Now uses alert)
  popup.appendChild(createMenuButton('Unpause Button', true, () => {
    alert('Activity Unpaused');
  }));

  // 3. Exit Button
  popup.appendChild(createMenuButton('Exit', false, () => overlay.remove()));

  // Close on backdrop click
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
};

createOverlayMenu();
