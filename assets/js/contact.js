const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const subject = form.elements.subject.value;
  const message = form.elements.message.value;

  // Here you can send the form data to your backend or do whatever you want with it
  console.log({ name, email,subject, message });

  // Here you can show a success message or redirect the user to a thank you page
  alert('Thank you for contacting us!');
});

// Resize the textarea height as the user types
const textarea = form.elements.message;
textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
});
