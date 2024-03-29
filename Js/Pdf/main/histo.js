function template1() {
    const pdf = new jsPDF();
    const lugar = document.getElementById('histo-lugar').value;
    const fecha = document.getElementById('histo-fecha').value;
    const hora = document.getElementById('histo-reloj').value;   
    const name = document.getElementById('histo-name').value;
    const edad = document.getElementById('histo-edad').value;
    const sexo = document.getElementById('histo-sexo').value;
    const civil = document.getElementById('histo-civil').value;
    const antesFam = document.getElementById('histo-antes-fam').value;
    const antesPer = document.getElementById('histo-antes-per').value;
    const antesQui = document.getElementById('histo-antes-qui').value;
    const alerg = document.getElementById('histo-aler').value;
    const explo = document.getElementById('histo-ex').value;
    const exams = document.getElementById('histo-exam').value;
    const sig = document.getElementById('histo-sig').value;
    const trat = document.getElementById('histo-trat').value;
    const ovs = document.getElementById('histo-ovs').value;


    const paciente = {
        "Lugar: ":{
            text: lugar,
            xStart: 25
        },
        "Fecha: ":{
            text: fecha,
            xStart: 25
        },
        "Hora: ":{
            text: hora,
            xStart: 25
        },
        "Nombre del Paciente: ": {
            text: name,
            xStart: 52
        },
        "Edad: ": {
            text: edad,
            xStart: 25
        },
        "Genero: ":{
            text: sexo,
            xStart: 27
        },
        "Estado civil: ":{
            text: civil,
            xStart: 35
        },
        "Antecedentes familiares: ":{
            text: antesFam,
            xStart: 60
        },
        "Antecedentes personales patológicos: ":{
            text: antesPer,
            xStart: 85
        },
        "Antecedentes quirúrgicos: ":{
            text: antesQui,
            xStart: 60
        },
        "Alergias: ":{
            text: alerg,
            xStart: 28
        },
        "Exploración Física: ":{
            text: explo,
            xStart: 45
        },
        "Exámenes de laboratorio: ":{
            text: exams,
            xStart: 60
        },
        "Signos vitales: ":{
            text: sig,
            xStart: 41
        },
        "Tratamiento propuesto: ":{
            text: trat,
            xStart: 56
        },
        "Ovservaciones y condiciones: ":{
            text: ovs,
            xStart: 69
        }       
    }
    mainGenerator(paciente, yStart, pdf);

    pdf.text(55,260, '__________________________________________')
    pdf.text(60,270, ' NOMBRE Y FIRMA DE PERSONA TRATANTE')
   
    title(pdf,{
        title: 'HISTORIA CLÍNCA Y FICHA DE IDENTIDAD PARA PROCEDIMIENTOS',
        x: 35,
        y: 75
    })
    footer(pdf)
    pdf.save("Historia Clinica - "+name)
}
// const yStart = 85;
// const button = document.getElementById('pdf');
// button.addEventListener('click', () => makePdf());