function handleForm(event) {
  event.preventDefault();
  const name = $('#name').val();
  const email = $('#email').val();
  if (name !== '' && email !== '') {
    alert(`Sending email to: ${name} with email address: ${email}`);
    $('#name').val('');
    $('#email').val('');
  }
}
