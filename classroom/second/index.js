document.addEventListener('DOMContentLoaded', function () {
    const handleMenu = () => {
        const menu = document.getElementById('menu');
        let isOpen = false;
        menu.addEventListener('click', () => {
            isOpen = !isOpen;
            isOpen ? menu.classList.add('open') : menu.classList.remove('open');
        });
    };
    
    const showUsers = () => {
        const uSection = document.getElementById('users');
    
        // Extract only used data with destructuring assignment
        const usersData = users.map(user => {
            const { login, avatar_url } = user;
            return { login, avatar_url };
        });
        console.log(usersData);
    
        // Add user on section
        usersData.map(user => {
            const content = document.createElement('div');
            content.classList.add('user');
            content.innerHTML = `
                <img src=${user.avatar_url}>
                <h3>${user.login}</h3>
            `;
            uSection.appendChild(content);
        })
    };
    
    const getUsers = () => {
        const spinner = document.getElementsByClassName('lds-ring')[0];
        fetch('https://api.github.com/users?since=135')
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                users = jsonData;
                console.log(users);
                spinner.classList.add('hide');
                showUsers();
            });
    };
    
    const addCustomUser = () => {
        fetch('https://api.github.com/users/mmenara')
            .then((response) => {
                return response.json();
            })
            .then((user) => {
                users = [...users, user];
                console.log(users);
                showUsers();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            });
    };
    
    const handleAddUserBtn = () => {
        const btn = document.getElementById('addUser');
        btn.addEventListener('click', () => {
            addCustomUser();
            btn.setAttribute("style", "display:none;");
        }, { once: true });
    };
    
    let users = [];
    
    getUsers();
    handleMenu();
    handleAddUserBtn();

}, false);
