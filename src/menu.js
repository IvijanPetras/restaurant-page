function createMenu(content){
    
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const item1 = document.createElement('div');
    item1.classList.add('items');
    item1.innerText = 'Spaghetti Bolognese';

    const item2 = document.createElement('div');
    item2.classList.add('items');
    item2.innerText = 'Lassagne';

    const item3 = document.createElement('div');
    item3.classList.add('items');
    item3.innerText = 'Frutti di Mare'
    menuItems.append(item1,item2,item3);
    menuContainer.append(menuItems);
    content.append(menuContainer);

}

export default createMenu;