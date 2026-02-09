  
  
  
 let active = null;
  let offsetX = 0;
  let offsetY = 0;

  document.querySelectorAll('.draggable').forEach(el => {
    el.addEventListener('mousedown', startDrag);
    el.addEventListener('touchstart', startDrag, { passive: false });
  });

  function startDrag(e) {
    e.preventDefault();
    active = this;

    const rect = active.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;

    active.style.zIndex = 50;
  }

  document.addEventListener('mousemove', drag);
  document.addEventListener('touchmove', drag, { passive: false });

  function drag(e) {
    if (!active) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    active.style.left = `${clientX - offsetX}px`;
    active.style.top = `${clientY - offsetY}px`;
    active.style.right = 'auto';
    active.style.bottom = 'auto';
  }

  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);

  function endDrag() {
    if (!active) return;
    active.style.zIndex = '';
    active = null;
  }