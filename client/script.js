let form = document.getElementById('geo-form');
let district = document.getElementById('district');
let submit = document.getElementById('submit');

async function districtList() {
    const res = await fetch('http://localhost:3000/api/district');
    const data = await res.json();

    for (let i in data.list) {
        const opt = document.createElement('option');
        opt.setAttribute('value', `${data.list[i]}`);
        opt.innerText = data.list[i];
        district.appendChild(opt);
    }
}

districtList();

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submit.toggleAttribute('disabled', true);

    const formData = new FormData(form);

    const response = await fetch('http://localhost:3000/api/geoprocessing/default', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    console.log(data);

    submit.toggleAttribute('disabled', false);
})