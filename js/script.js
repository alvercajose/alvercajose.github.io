// Educación
const educacionDatos = [
    { titulo: 'Bachillerato Técnico en el Área Técnica de Servicios. Especialización Informática', institucion: 'Colegio Cayetano Tarruell', periodo: '2017 - 2022' },
    { titulo: 'Ingeniería en Ciencias de la Computación', institucion: 'Universidad Politécnica Salesiana', periodo: '2022 - 2026' }
];

const educacionLista = document.getElementById('educacion-lista');
educacionDatos.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = `<strong>${item.titulo}</strong><br>${item.institucion}<br>${item.periodo}`;
    educacionLista.appendChild(li);
});

// Experiencia Laboral
const ExperienciaDatos = [
    { puesto: 'Puesto Bahia', empresa: 'Mi-Sub', periodo: '2018 - 2019', descripcion: 'Venta de camisetas deportivas.' },
];

const experienciaLista = document.getElementById('experiencia-lista');
ExperienciaDatos.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = `<strong>${item.puesto}</strong> - ${item.empresa}<br>${item.periodo}<br>${item.descripcion}`;
    experienciaLista.appendChild(li);
});


let div_cajita= document.getElementById('brillo')
div_cajita.addEventListener('onmouse', function(valor){})
