import createMain from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import './style.scss';


const content = document.getElementById('content');

const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tab-container');
    const mainTabBtn = document.createElement('button');
    mainTabBtn.classList.add('main-tab-btn' ,'btn', 'btn-primary', 'btn-lg', 'btn-success');
    mainTabBtn.innerText = 'Main';
    mainTabBtn.addEventListener('click', () => {
        tabsContainer.nextElementSibling.remove();
        createMain(content);
    })
    const menuTabBtn = document.createElement('button');
    menuTabBtn.classList.add('menu-tab-btn','btn', 'btn-primary', 'btn-lg', 'btn-success');
    menuTabBtn.innerText = 'Menu';
    menuTabBtn.addEventListener('click', ( )=> {
        tabsContainer.nextElementSibling.remove();
        createMenu(content);
    })
    const contactTabBtn = document.createElement('button');
    contactTabBtn.classList.add('contact-tab-btn','btn', 'btn-primary', 'btn-lg', 'btn-success');
    contactTabBtn.innerText = 'Contact';
    contactTabBtn.addEventListener('click', () => {
        tabsContainer.nextElementSibling.remove();
        createContact(content);
    });

    tabsContainer.append(mainTabBtn,menuTabBtn,contactTabBtn);
    content.append(tabsContainer);

createMain(content);
