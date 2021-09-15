const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCounties(data))
}
loadCountries();
const displayCounties = countries => {
    const countriesDiv = document.getElementById('countries');
    /* for (const countrie of countries) {
        console.log(countrie);
    } */
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.subregion;
        // div.appendChild(h3);
        // div.appendChild(p);
        div.innerHTML = `
        <h3>${country.name}</h3> 
        <p>${country.subregion}</p>
        <button onclick="loadCoundryByName('${country.name}')">Detail</button>
        `
        countriesDiv.appendChild(div);
    })
}
const loadCoundryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setCountryDetail(data[0]))
}
const setCountryDetail = country => {
    // console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h4>${country.name}</h4>
    <p>Population: ${country.population}</P>
    <img width="200px" src="${country.flag}">
    `
}