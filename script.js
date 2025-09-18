document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Reset previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        // Validate Full Name
        const fullName = document.getElementById('fullName').value.trim();
        if (fullName === '') {
            document.getElementById('nameError').textContent = 'Full name is required';
            isValid = false;
        } else if (fullName.length < 2) {
            document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
            isValid = false;
        }
        
        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        // Validate Subject
        const subject = document.getElementById('subject').value.trim();
        if (subject === '') {
            document.getElementById('subjectError').textContent = 'Subject is required';
            isValid = false;
        } else if (subject.length < 5) {
            document.getElementById('subjectError').textContent = 'Subject must be at least 5 characters long';
            isValid = false;
        }
        
        // Validate Message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters long';
            isValid = false;
        }
        
        return isValid;
    }
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // In a real application, you would send the form data to a server here
            // For this example, we'll just show a success message
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            successMessage.style.display = 'block';
            
            // Reset the form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
    
    // Real-time validation for better UX
    form.addEventListener('input', function(e) {
        const target = e.target;
        const errorId = target.id + 'Error';
        const errorElement = document.getElementById(errorId);
        
        if (!errorElement) return;
        
        // Clear error when user starts typing
        errorElement.textContent = '';
        target.classList.remove('error');
    });
});
