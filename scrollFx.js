const scrollFX = (function() {
   const elements = [].slice.call(document.querySelectorAll('[data-fx]'));
   const parents  = [].slice.call(document.querySelectorAll('.fx-container'));

   function inView(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) return true;
   }

   // RUN ON DEFAULT
   if (window.innerWidth < 769) {
      elements.forEach(function(el) {
         if (el.getAttribute('data-fx') !== 'slide-in-up') {
            el.removeAttribute('data-fx');
         }
      });
   }

   // PUBLIC METHODS
   const publicMethods = {
      runFX: function() {
         parents.forEach(function(container) {
            if (inView(container)) {
               let children = [].slice.call(container.querySelectorAll('[data-fx]'));
               children.forEach(function(child) {
                  if (inView(child)) {
                     if (child.hasAttribute('data-fx-delay')) {
                        let delay = parseInt(child.getAttribute('data-fx-delay')) * 1000;

                        setTimeout(function() {
                           child.classList.add(child.getAttribute('data-fx'));
                        }, delay);
                     }
                     else {
                        child.classList.add(child.getAttribute('data-fx'));
                     }
                  }
               });
            }
         });
      }
   };
   publicMethods.runFX();

   return publicMethods;
})();

