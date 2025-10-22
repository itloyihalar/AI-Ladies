// Full app.js for redesigned project (includes original behavior plus enhancements)
// This file contains the interactive logic for forms, the mobile menu and some UI helpers.

console.log('AI-Medical app.js yuklandi (redesign versiya)');

document.addEventListener('DOMContentLoaded', function() {
  // Contact form handler
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = contactForm.querySelector('input[name="name"]').value.trim();
      var email = contactForm.querySelector('input[name="email"]').value.trim();
      var message = contactForm.querySelector('textarea[name="message"]').value.trim();
      if(!name || !email || !message){
        alert('Iltimos, barcha maydonlarni toldiring.');
        return;
      }
      // Simulate send
      var btn = contactForm.querySelector('button[type="submit"]');
      if(btn){ btn.disabled = true; btn.textContent = 'Yuborilmoqda...'; }
      setTimeout(function(){
        if(btn){ btn.disabled = false; btn.textContent = 'Yuborish'; }
        alert('Rahmat! Xabaringiz yuborildi.');
        contactForm.reset();
      }, 900);
    });
  }

  // Symptoms form handler - simple heuristic result
  var symptomsForm = document.getElementById('symptomsForm');
  if(symptomsForm){
    symptomsForm.addEventListener('submit', function(e){
      e.preventDefault();
      var temp = parseFloat(symptomsForm.querySelector('input[name="temp"]').value) || 0;
      var cough = symptomsForm.querySelector('select[name="cough"]').value || '';
      var sore = symptomsForm.querySelector('select[name="sore"]').value || '';
      var result = document.getElementById('result');
      var messages = [];
      if(temp >= 38) messages.push('Harorat yuqori — yuqumli kasallik ehtimoli bor.');
      if(cough && cough !== 'Yo\'q') messages.push('Yo\'tal mavjud — nafas yo\'llarini tekshiring.');
      if(sore && sore !== 'Yo\'q') messages.push('Tomoq og\'rig\'i bor — shamollash yoki angina bo\'lishi mumkin.');
      if(messages.length===0) messages.push('Jiddiy alomatlar topilmadi. Holatingizni kuzatib boring.');
      if(result){
        result.textContent = messages.join(' ');
        result.classList.add('fade-up');
      }
    });
  }

  // Mobile menu toggle simple behaviour
  var mobileToggle = document.getElementById('mobileMenuToggle');
  if(mobileToggle){
    mobileToggle.addEventListener('click', function(){
      var menu = document.getElementById('mobileMenu');
      if(!menu){
        menu = document.createElement('div');
        menu.id = 'mobileMenu';
        menu.innerHTML = '<a class="nav-link d-block mb-2" href="/html/index.html">Bosh sahifa</a>' +
                         '<a class="nav-link d-block mb-2" href="/html/about.html">Biz haqimizda</a>' +
                         '<a class="nav-link d-block mb-2" href="/html/symptoms.html">Belgilar</a>' +
                         '<a class="nav-link d-block mb-2" href="/html/contact.html">Aloqa</a>';
        document.body.appendChild(menu);
      } else {
        if(menu.style.display === 'none' || getComputedStyle(menu).display === 'none'){
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      }
    });
  }

});

// UI enhancements: smooth anchor scrolling & focus styles
document.addEventListener('DOMContentLoaded', function(){
  // smooth anchor scrolling for intra-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href && href.length>1){
        e.preventDefault();
        var target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // add fade-in to main content
  var main = document.querySelector('main');
  if(main) main.classList.add('fade-in');

  // simple focus style for keyboard users
  document.querySelectorAll('button, a').forEach(function(el){
    el.addEventListener('focus', function(){ el.classList.add('focus-visible'); });
    el.addEventListener('blur', function(){ el.classList.remove('focus-visible'); });
    });
});
