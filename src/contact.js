

function loadContact() {
  const content = document.getElementById('content');

  const contact = document.createElement('div');
  contact.id = 'Contact';

  const h2 = document.createElement('h2');
  h2.textContent = 'Reach Out To Us Now';

  const ul = document.createElement('ul');
  const number = document.createElement('li');
  number.innerHTML = '<strong>Number:</strong> 09877654321';
  const address = document.createElement('li');
  address.innerHTML =
    '<strong>Address:</strong> XYZ Road, Near ABC, City (000000)';

  ul.appendChild(number);
  ul.appendChild(address);

  contact.appendChild(h2);
  contact.appendChild(ul);

  content.appendChild(contact);
}

export default loadContact;
