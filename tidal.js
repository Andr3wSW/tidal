const createOverlayMenu = () => {
  // Create elements
  const overlay = document.createElement('div');
  const popup = document.createElement('div');

  // Style Overlay
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '9999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  });

  // Style Popup
  Object.assign(popup.style, {
    backgroundColor: '#FF8C00',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    textAlign: 'center',
    minWidth: '250px'
  });

  // Button Factory
  const createBtn = (text) => {
    const btn = document.createElement('button');
    btn.innerText = text;
    
    Object.assign(btn.style, {
      display: 'block',
      width: '100%',
      margin: '10px 0',
      padding: '10px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: '#FF8C00',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px'
    });

    btn.onclick = () => {
      console.log('Action triggered:', text);
      if (text !== 'Close Menu') alert('You clicked: ' + text);
      overlay.remove();
    };
    
    return btn;
  };

  // Build Menu
  popup.appendChild(createBtn('Unpause Activity'));
  popup.appendChild(createBtn('Desync Activity'));
  popup.appendChild(createBtn('
  popup.appendChild(createBtn('Close Menu'));

  // Close on backdrop click
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.remove();
  };

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
};

// createOverlayMenu();
