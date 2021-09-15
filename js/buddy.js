const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => setBuddies(data))
}
loadBuddies();
const setBuddies = data => {
    const buddiesDiv = document.getElementById('buddies');
    const buddies = data.results;
    for (const buddie of buddies) {
        const p = document.createElement('p');
        p.innerText = `
        Name:${buddie.name.first} ${buddie.name.last} Email:${buddie.email}
        `
        buddiesDiv.appendChild(p);
    }
}