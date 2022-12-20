function createContact(content){
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.innerText = 'Call us at 555-666-7777';
    content.append(contactContainer);
}

export default createContact;