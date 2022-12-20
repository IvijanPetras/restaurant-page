function createHome(content){
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    const header = document.createElement('h1');
    header.innerText = 'Luigis pasta!!!';
    homeContainer.append(header);
    content.append(homeContainer);
}

export default createHome;