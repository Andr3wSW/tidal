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
  const createExitBtn = (text) => {
    const ExitBtn = document.createElement('button');
    ExitBtn.innerText = text;
    
    Object.assign(ExitBtn.style, {
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

    ExitBtn.onclick = () => {
      overlay.remove();
    };
    
    return btn;
  };


  const createDesyncBtn = (text) => {
    const desyncBtn = document.createElement('button');
    desyncBtn.innerText = text;
    
    Object.assign(desyncBtn.style, {
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

    desyncBtn.onclick = () => {
      console.log('Lesson Desync activated. Move freely between slides')
    };
    
    return desyncBtn;
  };
  // Build Menu
  popup.appendChild(createBtn('Unpause Activity'));
  popup.appendChild(createDesyncBtn('Desync Activity'));
  popup.appendChild(createBtn('Close Menu'));

  // Close on backdrop click
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.remove();
  };

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
};

createOverlayMenu();
