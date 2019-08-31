function template3() {
    const pdf = new jsPDF();
    const fecha1 = document.getElementById('indi-calendar1').value;
    const reloj1 = document.getElementById('indi-reloj1').value;
    const name1 = document.getElementById('indi-name1').value;
    const lugar1 = document.getElementById('indi-place1').value;

    const paciente = {
        "Fecha: ":{
            text: fecha1,
            xStart: 25
        },
        "Hora: ":{
            text: reloj1,
            xStart: 25
        },
        "Nombre del Paciente: ":{
            text: name1,
            xStart: 52
        },
        "Lugar: ":{
            text: lugar1,
            xStart: 25
        }    
    }
    mainGenerator(paciente, yStart, pdf);
    pdf.text('INDICACIONES GENERALES PARA LIPOSUCCIÓN DE PAPADA', 20, 113)
    pdf.text('º Una semana ates de la cirugía no deberá consumir alcohol, tabaco y no desvelarse', 10, 119)
    pdf.text('º Realizar laboratorio TP Y TPT una semana antes y enviarlos al Médico para revisión ', 10, 125)
    pdf.text('  y llevarlos en físico el día de la cirugía', 10, 131)
    pdf.text('º El día de la cirugía deberá presentarse con la cara lavada y si tiene cabello largo recogerlo', 10, 137)
    pdf.text('º Asistir a la cirugía habiendo comido bien, no ayunar', 10, 143)
    pdf.text('º Deberá traer mentonera ', 10, 149)
    pdf.text('º Traer 5 toallas femeninas nocturnas', 10, 155)
    pdf.text('º En el caso de los hombres hay que acudir rasurados', 10, 161)

    pdf.text('INDICACIONES MÉDICAS PARA LIPOSUCCIÓN DE PAPADA',20,170)
    pdf.text('º Moxifloxacino tab de 400 mg tomar una cada 24 horas. Iniciando un día antes de la cirugía', 10, 176)
    pdf.text('º Diprospan  Hy Pack ámpula aplicar intramuscular dosis única un día antes de la cirugía',10,182)
    pdf.text('º Ibuprofeno  tabletas  de 800 mg. Una cada 8 horas por 5 días',10,188)
    pdf.text('º Puede tomar árnica en cualquier presentación',10,194)
    pdf.text('º Vitamina c 2 gr. Cada 24 horas por 3 semanas',10,200)

    pdf.text('RECOMENDACIONES POSTQUIRURGICAS',20,210)
    pdf.text('º Uso de mentonera durante 2 semanas 24 horas al día',10,216)
    pdf.text('º Los primeros 3 días dormir semi sentado',10,222)
    pdf.text('º Los primeros 3 días dieta líquida y blanda',10,228)
    pdf.text('º No realizar esfuerzos físicos',10,234)
    pdf.text('º Tomar abundante agua durante el día y antes de los masajes',10,240)
    pdf.text('º Curación diaria durante el baño',10,246)

    pdf.text('______________________________',75,263)
    pdf.text('  FIRMA DEL MÉDICO TRATANTE',75,270)

    title(pdf,{
        title: 'INDICACIONES PRE Y POST OPERATORIO LIPO-PAPADA',
        x: 45,
        y: 60
    })
    footer(pdf)
    pdf.save("Pre Operatorio Papada - "+name1)

}
function template4() {
    const pdf = new jsPDF();
    const fecha2 = document.getElementById('indi-calendar2').value;
    const reloj2 = document.getElementById('indi-reloj2').value;
    const name2 = document.getElementById('indi-name2').value;
    const lugar2 = document.getElementById('indi-place2').value;

    const paciente = {
        "Fecha: ":{
            text: fecha2,
            xStart: 25
        },
        "Hora: ":{
            text: reloj2,
            xStart: 25
        },
        "Nombre del Paciente: ":{
            text: name2,
            xStart: 52
        },
        "Lugar: ":{
            text: lugar2,
            xStart: 25
        }    
    }
    mainGenerator(paciente, yStart, pdf);
    pdf.text('INDICACIONES GENERALES PARA LIPOSUCCIÓN DE PAPADA', 20, 113)
    pdf.text('º Una semana ates de la cirugía no deberá consumir alcohol, tabaco y no desvelarse', 10, 119)
    pdf.text('º Realizar laboratorio TP Y TPT una semana antes y enviarlos al Médico para revisión ', 10, 125)
    pdf.text('  y llevarlos en físico el día de la cirugía', 10, 131)
    pdf.text('º El día de la cirugía deberá presentarse con la cara lavada y si tiene cabello largo recogerlo', 10, 137)
    pdf.text('º Asistir a la cirugía habiendo comido bien, no ayunar', 10, 143)
    pdf.text('º Deberá traer mentonera ', 10, 149)
    pdf.text('º Traer 5 toallas femeninas nocturnas', 10, 155)
    pdf.text('º En el caso de los hombres hay que acudir rasurados', 10, 161)

    pdf.text('INDICACIONES MÉDICAS PARA LIPOSUCCIÓN DE PAPADA',20,170)
    pdf.text('º Moxifloxacino tab de 400 mg tomar una cada 24 horas. Iniciando un día antes de la cirugía', 10, 176)
    pdf.text('º Diprospan  Hy Pack ámpula aplicar intramuscular dosis única un día antes de la cirugía',10,182)
    pdf.text('º Ibuprofeno  tabletas  de 800 mg. Una cada 8 horas por 5 días',10,188)
    pdf.text('º Puede tomar árnica en cualquier presentación',10,194)
    pdf.text('º Vitamina c 2 gr. Cada 24 horas por 3 semanas',10,200)

    pdf.text('RECOMENDACIONES POSTQUIRURGICAS',20,210)
    pdf.text('º Uso de mentonera durante 2 semanas 24 horas al día',10,216)
    pdf.text('º Los primeros 3 días dormir semi sentado',10,222)
    pdf.text('º Los primeros 3 días dieta líquida y blanda',10,228)
    pdf.text('º No realizar esfuerzos físicos',10,234)
    pdf.text('º Tomar abundante agua durante el día y antes de los masajes',10,240)
    pdf.text('º Curación diaria durante el baño',10,246)

    pdf.text('______________________________',75,263)
    pdf.text('  FIRMA DEL MÉDICO TRATANTE',75,270)

    title(pdf,{
        title: 'INDICACIONES PRE Y POST OPERATORIO LIPO-PAPADA',
        x: 45,
        y: 60
    })
    footer(pdf)
    pdf.save("Pre Operatorio Papada - "+name1)
}
function template5() {
    const pdf = new jsPDF();
    const fecha3 = document.getElementById('indi-calendar3').value;
    const reloj3 = document.getElementById('indi-reloj3').value;
    const name3 = document.getElementById('indi-name3').value;
    const lugar3 = document.getElementById('indi-place3').value;

    const paciente = {
        "Fecha: ":{
            text: fecha3,
            xStart: 25
        },
        "Hora: ":{
            text: reloj3,
            xStart: 25
        },
        "Nombre del Paciente: ":{
            text: name3,
            xStart: 52
        },
        "Lugar: ":{
            text: lugar3,
            xStart: 25
        }    
    }
    mainGenerator(paciente, yStart, pdf);
    pdf.text('INDICACIONES GENERALES PARA LIPOSUCCIÓN DE PAPADA', 20, 113)
    pdf.text('º Una semana ates de la cirugía no deberá consumir alcohol, tabaco y no desvelarse', 10, 119)
    pdf.text('º Realizar laboratorio TP Y TPT una semana antes y enviarlos al Médico para revisión ', 10, 125)
    pdf.text('  y llevarlos en físico el día de la cirugía', 10, 131)
    pdf.text('º El día de la cirugía deberá presentarse con la cara lavada y si tiene cabello largo recogerlo', 10, 137)
    pdf.text('º Asistir a la cirugía habiendo comido bien, no ayunar', 10, 143)
    pdf.text('º Deberá traer mentonera ', 10, 149)
    pdf.text('º Traer 5 toallas femeninas nocturnas', 10, 155)
    pdf.text('º En el caso de los hombres hay que acudir rasurados', 10, 161)

    pdf.text('INDICACIONES MÉDICAS PARA LIPOSUCCIÓN DE PAPADA',20,170)
    pdf.text('º Moxifloxacino tab de 400 mg tomar una cada 24 horas. Iniciando un día antes de la cirugía', 10, 176)
    pdf.text('º Diprospan  Hy Pack ámpula aplicar intramuscular dosis única un día antes de la cirugía',10,182)
    pdf.text('º Ibuprofeno  tabletas  de 800 mg. Una cada 8 horas por 5 días',10,188)
    pdf.text('º Puede tomar árnica en cualquier presentación',10,194)
    pdf.text('º Vitamina c 2 gr. Cada 24 horas por 3 semanas',10,200)

    pdf.text('RECOMENDACIONES POSTQUIRURGICAS',20,210)
    pdf.text('º Uso de mentonera durante 2 semanas 24 horas al día',10,216)
    pdf.text('º Los primeros 3 días dormir semi sentado',10,222)
    pdf.text('º Los primeros 3 días dieta líquida y blanda',10,228)
    pdf.text('º No realizar esfuerzos físicos',10,234)
    pdf.text('º Tomar abundante agua durante el día y antes de los masajes',10,240)
    pdf.text('º Curación diaria durante el baño',10,246)

    pdf.text('______________________________',75,263)
    pdf.text('  FIRMA DEL MÉDICO TRATANTE',75,270)

    title(pdf,{
        title: 'INDICACIONES PRE Y POST OPERATORIO LIPO-PAPADA',
        x: 45,
        y: 60
    })
    footer(pdf)
    pdf.save("Pre Operatorio Papada - "+name1)

}
