 
//    document.addEventListener("DOMContentLoaded", function () {
//     const btn = document.getElementById("toggleBtn");
//     const menu = document.getElementById("mobileMenu");
//     const openIcon = document.getElementById("iconOpen");
//     const closeIcon = document.getElementById("iconClose");

//     btn.addEventListener("click", function () {
//       menu.classList.toggle("hidden");
//       openIcon.classList.toggle("hidden");
//       closeIcon.classList.toggle("hidden");
//     });
//   });
 
//  const menuBtn = document.getElementById("menu-btn");
//   const mobileMenu = document.getElementById("mobile-menu");
//   const hamburger = document.getElementById("hamburger");
//   const closeIcon = document.getElementById("close");

//   menuBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//     hamburger.classList.toggle("hidden");
//     closeIcon.classList.toggle("hidden");
//   });

//   // Draggable Elements System
//   class DraggableSystem {
//     constructor() {
//       this.heroSection = document.getElementById('heroSection');
//       this.container = document.getElementById('draggableContainer');
//       this.elements = [];
//       this.activeElement = null;
//       this.offset = { x: 0, y: 0 };

//       this.init();
//     }

//     init() {
//       // Your SVG file paths - UPDATE THESE WITH YOUR ACTUAL FILE PATHS
//       const icons = [
//         { src: 'assets/download (2).svg', name: 'Icon1' },
//         { src: 'assets/download.svg', name: 'Icon2' },
//         { src: 'assets/download (1).svg', name: 'Icon3' },
//         { src: 'assets/download (3).svg', name: 'Icon4' }
//       ];

//       const sectionRect = this.heroSection.getBoundingClientRect();
//       const centerX = sectionRect.width / 2;
//       const sectionHeight = sectionRect.height;

//       icons.forEach((icon, index) => {
//         const element = this.createElement(icon, index, centerX, sectionHeight);
//         this.container.appendChild(element);
//         this.elements.push(element);
//       });

//       // Add event listeners
//       this.addEventListeners();
//     }

//     createElement(icon, index, centerX, sectionHeight) {
//       const div = document.createElement('div');
//       div.className = 'draggable-element';

//       // Position elements at the bottom in a row
//       const spacing = 150;
//       const totalWidth = (spacing * 3);
//       const startX = centerX - (totalWidth / 2);
//       const x = startX + (index * spacing) - 60; // -60 to center the 120px image
//       const y = sectionHeight - 180; // 180px from bottom

//       div.style.left = `${x}px`;
//       div.style.top = `${y}px`;

//       div.innerHTML = `<img src="${icon.src}" alt="${icon.name}" />`;
//       div.dataset.icon = icon.name;

//       return div;
//     }

//     addEventListeners() {
//       // Mouse events
//       this.container.addEventListener('mousedown', (e) => this.handleStart(e));
//       document.addEventListener('mousemove', (e) => this.handleMove(e));
//       document.addEventListener('mouseup', () => this.handleEnd());

//       // Touch events
//       this.container.addEventListener('touchstart', (e) => this.handleStart(e), { passive: false });
//       document.addEventListener('touchmove', (e) => this.handleMove(e), { passive: false });
//       document.addEventListener('touchend', () => this.handleEnd());

//       // Window resize
//       window.addEventListener('resize', () => this.handleResize());
//     }

//     getEventPosition(e) {
//       if (e.type.includes('touch')) {
//         return {
//           x: e.touches[0].clientX,
//           y: e.touches[0].clientY
//         };
//       }
//       return {
//         x: e.clientX,
//         y: e.clientY
//       };
//     }

//     handleStart(e) {
//       const target = e.target.closest('.draggable-element');
//       if (!target) return;

//       e.preventDefault();
//       this.activeElement = target;

//       const pos = this.getEventPosition(e);
//       const rect = target.getBoundingClientRect();

//       this.offset.x = pos.x - rect.left;
//       this.offset.y = pos.y - rect.top;

//       // Bring to front
//       this.elements.forEach(el => el.style.zIndex = '10');
//       target.style.zIndex = '20';
//     }

//     handleMove(e) {
//       if (!this.activeElement) return;

//       e.preventDefault();
//       const pos = this.getEventPosition(e);
//       const containerRect = this.heroSection.getBoundingClientRect();

//       // Calculate new position relative to container
//       let newX = pos.x - containerRect.left - this.offset.x;
//       let newY = pos.y - containerRect.top - this.offset.y;

//       // Get element dimensions
//       const elementRect = this.activeElement.getBoundingClientRect();
//       const elementWidth = elementRect.width;
//       const elementHeight = elementRect.height;

//       // Constrain to container bounds
//       newX = Math.max(0, Math.min(newX, containerRect.width - elementWidth));
//       newY = Math.max(0, Math.min(newY, containerRect.height - elementHeight));

//       this.activeElement.style.left = `${newX}px`;
//       this.activeElement.style.top = `${newY}px`;
//     }

//     handleEnd() {
//       if (this.activeElement) {
//         this.activeElement = null;
//       }
//     }

//     handleResize() {
//       // Reposition elements proportionally on resize
//       const sectionRect = this.heroSection.getBoundingClientRect();
      
//       this.elements.forEach((element) => {
//         const currentLeft = parseFloat(element.style.left);
//         const currentTop = parseFloat(element.style.top);
        
//         // Keep elements within bounds
//         const elementRect = element.getBoundingClientRect();
//         const newLeft = Math.min(currentLeft, sectionRect.width - elementRect.width);
//         const newTop = Math.min(currentTop, sectionRect.height - elementRect.height);
        
//         element.style.left = `${Math.max(0, newLeft)}px`;
//         element.style.top = `${Math.max(0, newTop)}px`;
//       });
//     }
//   }

//   // Initialize draggable system when DOM is loaded
//   document.addEventListener('DOMContentLoaded', () => {
//     new DraggableSystem();
//   });
// {/* <!-- Add this JavaScript at the end of your file, before closing </body> tag --> */}

//   // Draggable Elements System
//   class DraggableSystem {
//     constructor() {
//       this.heroSection = document.getElementById('heroSection');
//       this.container = document.getElementById('draggableContainer');
//       this.elements = [];
//       this.activeElement = null;
//       this.offset = { x: 0, y: 0 };

//       this.init();
//     }

//     init() {
//       // Your SVG file paths - UPDATE THESE WITH YOUR ACTUAL FILE PATHS
//       const icons = [
//         { src: 'assets/download (2).svg', name: 'Icon1' },
//         { src: 'assets/download.svg', name: 'Icon2' },
//         { src: 'assets/download (1).svg', name: 'Icon3' },
//         { src: 'assets/download (3).svg', name: 'Icon4' }
//       ];

//       const sectionRect = this.heroSection.getBoundingClientRect();
//       const centerX = sectionRect.width / 2;
//       const sectionHeight = sectionRect.height;

//       icons.forEach((icon, index) => {
//         const element = this.createElement(icon, index, centerX, sectionHeight);
//         this.container.appendChild(element);
//         this.elements.push(element);
//       });

//       // Add event listeners
//       this.addEventListeners();
//     }

//     createElement(icon, index, centerX, sectionHeight) {
//       const div = document.createElement('div');
//       div.className = 'draggable-element';

//       // Position elements at the bottom in a row
//       const spacing = 150;
//       const totalWidth = (spacing * 3);
//       const startX = centerX - (totalWidth / 2);
//       const x = startX + (index * spacing) - 20; y
//       const y = sectionHeight - 180; // 180px from bottom

//       div.style.left = `${x}px`;
//       div.style.top = `${y}px`;

//       div.innerHTML = `<img src="${icon.src}" alt="${icon.name}" />`;
//       div.dataset.icon = icon.name;

//       return div;
//     }

//     addEventListeners() {
//       // Mouse events
//       this.container.addEventListener('mousedown', (e) => this.handleStart(e));
//       document.addEventListener('mousemove', (e) => this.handleMove(e));
//       document.addEventListener('mouseup', () => this.handleEnd());

//       // Touch events
//       this.container.addEventListener('touchstart', (e) => this.handleStart(e), { passive: false });
//       document.addEventListener('touchmove', (e) => this.handleMove(e), { passive: false });
//       document.addEventListener('touchend', () => this.handleEnd());

//       // Window resize
//       window.addEventListener('resize', () => this.handleResize());
//     }

//     getEventPosition(e) {
//       if (e.type.includes('touch')) {
//         return {
//           x: e.touches[0].clientX,
//           y: e.touches[0].clientY
//         };
//       }
//       return {
//         x: e.clientX,
//         y: e.clientY
//       };
//     }

//     handleStart(e) {
//       const target = e.target.closest('.draggable-element');
//       if (!target) return;

//       e.preventDefault();
//       this.activeElement = target;

//       const pos = this.getEventPosition(e);
//       const rect = target.getBoundingClientRect();

//       this.offset.x = pos.x - rect.left;
//       this.offset.y = pos.y - rect.top;

//       // Bring to front
//       this.elements.forEach(el => el.style.zIndex = '10');
//       target.style.zIndex = '20';
//     }

//     handleMove(e) {
//       if (!this.activeElement) return;

//       e.preventDefault();
//       const pos = this.getEventPosition(e);
//       const containerRect = this.heroSection.getBoundingClientRect();

//       // Calculate new position relative to container
//       let newX = pos.x - containerRect.left - this.offset.x;
//       let newY = pos.y - containerRect.top - this.offset.y;

//       // Get element dimensions
//       const elementRect = this.activeElement.getBoundingClientRect();
//       const elementWidth = elementRect.width;
//       const elementHeight = elementRect.height;

//       // Constrain to container bounds
//       newX = Math.max(0, Math.min(newX, containerRect.width - elementWidth));
//       newY = Math.max(0, Math.min(newY, containerRect.height - elementHeight));

//       this.activeElement.style.left = `${newX}px`;
//       this.activeElement.style.top = `${newY}px`;
//     }

//     handleEnd() {
//       if (this.activeElement) {
//         this.activeElement = null;
//       }
//     }

//     handleResize() {
//       // Reposition elements proportionally on resize
//       const sectionRect = this.heroSection.getBoundingClientRect();
      
//       this.elements.forEach((element) => {
//         const currentLeft = parseFloat(element.style.left);
//         const currentTop = parseFloat(element.style.top);
        
//         // Keep elements within bounds
//         const elementRect = element.getBoundingClientRect();
//         const newLeft = Math.min(currentLeft, sectionRect.width - elementRect.width);
//         const newTop = Math.min(currentTop, sectionRect.height - elementRect.height);
        
//         element.style.left = `${Math.max(0, newLeft)}px`;
//         element.style.top = `${Math.max(0, newTop)}px`;
//       });
//     }
//   }

//   // Initialize draggable system when DOM is loaded
//   document.addEventListener('DOMContentLoaded', () => {
//     new DraggableSystem();
//   });
// // <!-- Add this JavaScript at the end of your file, before closing </body> tag -->

//   // Draggable Elements System
//   class DraggableSystem {
//     constructor() {
//       this.heroSection = document.getElementById('heroSection');
//       this.container = document.getElementById('draggableContainer');
//       this.elements = [];
//       this.activeElement = null;
//       this.offset = { x: 0, y: 0 };

//       this.init();
//     }

//     init() {
//       // Your SVG file paths - UPDATE THESE WITH YOUR ACTUAL FILE PATHS
//       const icons = [
//         { src: 'assets/download (2).svg', name: 'Icon1' },
//         { src: 'assets/download.svg', name: 'Icon2' },
//         { src: 'assets/download (1).svg', name: 'Icon3' },
//         { src: 'assets/download (3).svg', name: 'Icon4' }
//       ];

//       const sectionRect = this.heroSection.getBoundingClientRect();
//       const centerX = sectionRect.width / 2;
//       const sectionHeight = sectionRect.  
//       icons.forEach((icon, index) => {
//         const element = this.createElement(icon, index, centerX, sectionHeight);
//         this.container.appendChild(element);
//         this.elements.push(element);
//       });

//       // Add event listeners
//       this.addEventListeners();
//     }

//     createElement(icon, index, centerX, sectionHeight) {
//       const div = document.createElement('div');
//       div.className = 'draggable-element';

//       // Position elements at the bottom in a row
//       const spacing = 120;
//       const totalWidth = (spacing * 3);
//       const startX = centerX - (totalWidth / 2);
//       const x = startX + (index * spacing) - 40; // -40 to center the 80px image
//       const y = sectionHeight - 150; // 150px from bottom

//       div.style.left = `${x}px`;
//       div.style.top = `${y}px`;

//       div.innerHTML = `<img src="${icon.src}" alt="${icon.name}" />`;
//       div.dataset.icon = icon.name;

//       return div;
//     }

//     addEventListeners() {
//       // Mouse events
//       this.container.addEventListener('mousedown', (e) => this.handleStart(e));
//       document.addEventListener('mousemove', (e) => this.handleMove(e));
//       document.addEventListener('mouseup', () => this.handleEnd());

//       // Touch events
//       this.container.addEventListener('touchstart', (e) => this.handleStart(e), { passive: false });
//       document.addEventListener('touchmove', (e) => this.handleMove(e), { passive: false });
//       document.addEventListener('touchend', () => this.handleEnd());

//       // Window resize
//       window.addEventListener('resize', () => this.handleResize());
//     }

//     getEventPosition(e) {
//       if (e.type.includes('touch')) {
//         return {
//           x: e.touches[0].clientX,
//           y: e.touches[0].clientY
//         };
//       }
//       return {
//         x: e.clientX,
//         y: e.clientY
//       };
//     }

//     handleStart(e) {
//       const target = e.target.closest('.draggable-element');
//       if (!target) return;

//       e.preventDefault();
//       this.activeElement = target;

//       const pos = this.getEventPosition(e);
//       const rect = target.getBoundingClientRect();

//       this.offset.x = pos.x - rect.left;
//       this.offset.y = pos.y - rect.top;

//       // Bring to front
//       this.elements.forEach(el => el.style.zIndex = '10');
//       target.style.zIndex = '20';
//     }

//     handleMove(e) {
//       if (!this.activeElement) return;

//       e.preventDefault();
//       const pos = this.getEventPosition(e);
//       const containerRect = this.heroSection.getBoundingClientRect();

//       // Calculate new position relative to container
//       let newX = pos.x - containerRect.left - this.offset.x;
//       let newY = pos.y - containerRect.top - this.offset.y;

//       // Get element dimensions
//       const elementRect = this.activeElement.getBoundingClientRect();
//       const elementWidth = elementRect.width;
//       const elementHeight = elementRect.height;

//       // Constrain to container bounds
//       newX = Math.max(0, Math.min(newX, containerRect.width - elementWidth));
//       newY = Math.max(0, Math.min(newY, containerRect.height - elementHeight));

//       this.activeElement.style.left = `${newX}px`;
//       this.activeElement.style.top = `${newY}px`;
//     }

//     handleEnd() {
//       if (this.activeElement) {
//         this.activeElement = null;
//       }
//     }

//     handleResize() {
//       // Reposition elements proportionally on resize
//       const sectionRect = this.heroSection.getBoundingClientRect();
      
//       this.elements.forEach((element) => {
//         const currentLeft = parseFloat(element.style.left);
//         const currentTop = parseFloat(element.style.top);
        
//         // Keep elements within bounds
//         const elementRect = element.getBoundingClientRect();
//         const newLeft = Math.min(currentLeft, sectionRect.width - elementRect.width);
//         const newTop = Math.min(currentTop, sectionRect.height - elementRect.height);
        
//         element.style.left = `${Math.max(0, newLeft)}px`;
//         element.style.top = `${Math.max(0, newTop)}px`;
//       });
//     }
//   }

//   // Initialize draggable system when DOM is loaded
//   document.addEventListener('DOMContentLoaded', () => {
//     new DraggableSystem();
//   });



 
  let currentIndex = 0;
  const slider = document.getElementById("slider");

  function getVisibleSlides() {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // mobile
  }

  function updateSlide() {
    const visible = getVisibleSlides();
    const maxIndex = slider.children.length - visible;

    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    const slideWidth = slider.parentElement.offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    const visible = getVisibleSlides();
    if (currentIndex < slider.children.length - visible) {
      currentIndex++;
      updateSlide();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  }

  window.addEventListener("resize", updateSlide);
  updateSlide();
