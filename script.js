
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});




// Add to cart functionality for store type
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`${productName}이(가) 장바구니에 추가되었습니다!`);
        
        // Add visual feedback
        this.textContent = '추가됨!';
        this.style.background = '#27ae60';
        setTimeout(() => {
            this.textContent = '장바구니 추가';
            this.style.background = '';
        }, 2000);
    });
});

// Contact form handling (if exists)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('메시지가 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.');
        this.reset();
    });
}