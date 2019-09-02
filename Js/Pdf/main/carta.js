function template2() {
    const pdf = new jsPDF();
    const fecha = document.getElementById('carta-fecha').value;
    const hora = document.getElementById('carta-reloj').value;  
    const name = document.getElementById('carta-nom1').value;
    const edad = document.getElementById('carta-edad').value;
    const mas = document.getElementById('carta-sexo').value;
    const fem = document.getElementById('carta-sexoF').value;

    const sOn = document.getElementById('carta-answ').value;
    const diag = document.getElementById('carta-diag').value;
    const proc = document.getElementById('carta-proc').value;
    
    const ben = document.getElementById('carta-ben').value;
    const ries = document.getElementById('carta-ries').value;
    const alt = document.getElementById('carta-alt').value;

    const med = document.getElementById('carta-med').value;
    const cedu = document.getElementById('carta-cedu').value;

    const paciente = {
        "Fecha: ":{
            text: fecha,
            xStart: 25
        },
        "Hora: ":{
            text: hora,
            xStart: 25
        },
         "Nombre del paciente: ": {
            text: name,
            xStart: 52
        },
         "Edad: ":{
            text: edad,
            xStart: 25
        },
         "Genero: ":{
            text: mas ? "Masculino":"Femenino",
            xStart: 27
        }
    }

    const paciente2 = {
        "La edad y estado de conciencia del paciente, permite a este firmar este documento.":{
            text: sOn,
            xStart: 170
        },
        "Diagnostico: ":{
            text: diag,
            xStart: 35
        },
        "Procedimientos propuestos: ":{
            text: proc,
            xStart: 65
        }

    }
    const paciente3 = {
        "Beneficios: ":{
            text: ben,
            xStart: 35
        },
        "Riesgos: ":{
            text: ries,
            xStart: 35
        },
        "Alternativas: ":{
            text: alt,
            xStart: 35
        }
    }
    const paciente4 = {
        "Nombre del Medico tratante: ":{
            text: med,
            xStart: 65
        },
        "Cedula profecional: ": {
            text: cedu,
            xStart: 48
        }
    }

    mainGenerator(paciente, yStart, pdf);
    pdf.text('Con base en los fundamentos bioéticos, la presente carta tiene por objeto asentar que la ', 20, 140)
    pdf.text('comunicación en relación médico paciente familia sobre el diagnóstico y tratamiento de la ', 20, 150)
    pdf.text('enfermedad ha sido establecida.', 20,160)
    mainGenerator(paciente2, 175,pdf);
    pdf.text('Información sobre:', 20,210)
    mainGenerator(paciente3, 220,pdf);
    
        
    title(pdf,{
        title: 'CARTA DE CONSENTIMIENTO INFORMADO',
        x: 65,
        y: 75
    })
    footer(pdf)
    
    pdf.addPage(pdf);
    
    pdf.text('Nombre y Cedula Profesional de quien proporción la información realiza el procedimiento ', 20,20);
    mainGenerator(paciente4,30,pdf);
    pdf.text(`Yo, ${name} de ${edad} años de edad, con capacidades mentales  para ello: `,20,70);
    pdf.text('acepto que se me explico mi enfermedad y/o padecimiento así como los procedimientos',20,80);
    pdf.text('necesarios para diagnostico y/o tratamientos con sus alternativas, incluyendo beneficios',20,90);
    pdf.text('y riegos; y en el entendido que se busca un beneficio y no un daño a mi persona doy mi',20,100);
    pdf.text('consentimiento voluntario, sin presión alguna y por decisión propia para que se efectúen',20,110);
    pdf.text('todas las medidas medicas y/o quirúrgicas que se requieran, comprendiendo que con -',20,120);
    pdf.text('base a mi evolución, algunas nuevas acciones serán necesarias, informándome sobre ',20,130);
    pdf.text('ellas, y podré optar por rechazarlas ó aceptarlas. Así mismo reconozco y acepto que si',20,140);
    pdf.text('se presentan  contingencias y  urgencias  derivadas  de los actos  autorizados,  estos -',20,150);
    pdf.text('sean atendidos con las medidas necesarias con base a la libertad de prescripción de mi ',20,160);
    pdf.text('médico médico tratante.',20,170);
    pdf.text('En caso que el procedimiento sea una mini liposucción ambulatoria de cualquier área - ',20,180);
    pdf.text('del cuerpo, será obligatorio realizar los masajes en esta unidad médica para poder hacer ',20,190);
    pdf.text('válida la garantía del procedimiento, además de que la garantía solo se refiere a proce-',20,200);
    pdf.text('dimientos para corregir cualquier situación NO  la devolución del dinero.',20,210);



    pdf.text('_________________________                         _________________________', 30,240);
    pdf.text('  Nombre y firma del paciente                                      Lugar, fecha y hora.', 30,245);
    pdf.text('    y/o representante legal.', 30,250);

    footer(pdf)
    pdf.save("Carta de Concentimiento - "+name)
}


function whichPdf(page,type) {
    debugger;
    if (page === 'indicaciones') {
        if (type === 3) return template3();
        else if (type === 4) return template4();
        return template5()
    } else {
        switch (page) {
            case 'histo':
                return template1();
            case 'carta':
                return template2();
            case 'receta':
                return template6();
        }
    }
}
const yStart = 70;
const pathname = window.location.pathname;
function getPage (path) { 
    let dashIndex = 0;
    let dotIndex = 0;
    for (let i = path.length; i >= 0; i--) {
        const letter = path[i];
        if (letter === '.') {
            dotIndex = i;
        }
        if (letter === '/') {
            dashIndex = i;
            break;
        }
    }
    return { dashIndex, dotIndex };
}

function whichButton(route, active) {
    debugger;
    if (route === 'indicaciones') {
        return `pdf${active}`;
    }
    return 'pdf';
}

let active = 4;
const { dashIndex, dotIndex } = getPage(pathname);
const whichPage = pathname.substring(dashIndex + 1, dotIndex);
const button = document.getElementById(whichButton(whichPage, active));
button.addEventListener('click', () => whichPdf(whichPage, active));
debugger;