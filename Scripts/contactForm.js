// Contact Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validation
      let isValid = true;
      let errorMessage = '';
      
      // Name validation
      if (name.length < 2) {
        isValid = false;
        errorMessage += 'Name must be at least 2 characters long.\n';
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
      }
      
      // Subject validation
      if (subject.length < 3) {
        isValid = false;
        errorMessage += 'Subject must be at least 3 characters long.\n';
      }
      
      // Message validation
      if (message.length < 10) {
        isValid = false;
        errorMessage += 'Message must be at least 10 characters long.\n';
      }
      
      if (isValid) {
        // Form is valid - show success message
        showMessage('success', 'Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
        
        // In a real application, you would send the data to a server here
        console.log('Form submitted:', { name, email, subject, message });
      } else {
        // Show error message
        showMessage('error', errorMessage);
      }
    });
  }
  
  // Function to show messages
  function showMessage(type, text) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = text;
    
    // Style the message
    messageDiv.style.padding = '1rem';
    messageDiv.style.marginTop = '1rem';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.fontSize = 'var(--fs6)';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.animation = 'slideIn 0.3s ease-out';
    
    if (type === 'success') {
      messageDiv.style.background = 'rgba(34, 197, 94, 0.2)';
      messageDiv.style.border = '1px solid rgba(34, 197, 94, 0.5)';
      messageDiv.style.color = 'rgb(134, 239, 172)';
    } else {
      messageDiv.style.background = 'rgba(239, 68, 68, 0.2)';
      messageDiv.style.border = '1px solid rgba(239, 68, 68, 0.5)';
      messageDiv.style.color = 'rgb(252, 165, 165)';
      messageDiv.style.whiteSpace = 'pre-line';
    }
    
    // Insert after the form
    contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      messageDiv.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
  }
  
  // Add input validation feedback
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateInput(this);
    });
    
    input.addEventListener('input', function() {
      // Remove error styling on input
      this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
  });
  
  function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    
    switch(input.id) {
      case 'name':
        isValid = value.length >= 2;
        break;
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'subject':
        isValid = value.length >= 3;
        break;
      case 'message':
        isValid = value.length >= 10;
        break;
    }
    
    if (!isValid && value.length > 0) {
      input.style.borderColor = 'rgba(239, 68, 68, 0.8)';
    } else if (isValid && value.length > 0) {
      input.style.borderColor = 'rgba(34, 197, 94, 0.8)';
    }
  }
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
document.head.appendChild(style);
