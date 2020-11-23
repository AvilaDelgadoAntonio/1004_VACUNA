
/* Sintaxis para que la consulta nos devuelva todos los mienbros del ensayo clínico nacidos en 1955" */


db.vacuna.find( { fecha_nacimiento: { $regex: /^1955/ } } ).pretty()


/* Sintaxis para que la consulta nos devuelva todos los miembros del ensayo clínico nacidos en los años 50, solo nombre y apellidos " */


db.vacuna.find( { fecha_nacimiento: { $regex: /195./ } }, {_id: 0,nombre: 1,apellido: 1} ).pretty()


/* Sintaxis para que la consulta nos devuelva el número de miembros del ensayo clínico nacidos el siglo pasado" */


db.vacuna.find( { fecha_nacimiento: { $regex: /19../ } } ).count()



/* Sintaxis para que la consulta nos devuelva todos los miembros del ensayo clínico que tienen problemas de hipertensión (da igual que sea mayúscula o minúscula) */


db.vacuna.find( { enfermedades_previas: { $regex: /hipertensión/, $options:'i' } } ).pretty()


/* Sintaxis para que la consulta nos devuelva  el número de miembros del ensayo clínico que son hipocondriacos (da igual que sea mayúscula o minúscula) */


db.vacuna.find( { enfermedades_previas: { $regex: /hipocondriaco/i } } ).count()



/* Sintaxis para que la consulta nos devuelva  el número de miembros del ensayo clínico que son hipocondriacos (solo con minúscula) */


db.vacuna.find( { enfermedades_previas: { $regex: /hipocondriaco/ } } ).count()


/* Sintaxis para que la consulta nos devuelva  el número de miembros del ensayo clínico que son Hipocondriacos (solo con mayúscula) */


db.vacuna.find( { enfermedades_previas: { $regex: /Hipocondriaco/ } } ).count()


/* Sintaxis para que la consulta nos devuelva  el número de miembros del ensayo clínico que tienen alergia o alergias o algo relacionado */


db.vacuna.find( { enfermedades_previas: { $regex: /alerg*/i } } ).pretty()


/* Sintaxis para que la consulta nos devuelva  los que nunca han estado enfermos, solo nombre, apellidos y fecha de nacimiento */


db.vacuna.find( { enfermedades_previas: { $regex: /nunc. *enferm./, $options:'mix' } }, {_id: false,nombre: 1,apellido: true, fecha_nacimiento: 1, enfermedades_previas: 1}).pretty()


/* Sintaxis para que la consulta nos devuelva solo los documentos donde en enfermedades previas tenga "tensión" en cualquier parte de la secuencia o multiples líneas */


db.vacuna.find( { enfermedades_previas: { $regex: /tensión/, $options: 'm' } } ).pretty()


/* Sintaxis para que la consulta nos devuelva todos los miembros del ensayo clínico que son niños y niñas (menores de 10 años), solo nombre, apellidos y género " */


db.vacuna.find( { fecha_nacimiento: { $regex: /201./ } }, {_id: 0,nombre: 1,apellido: 1, sexo: 1} ).pretty()



/* Sintaxis para que la consulta nos devuelva quienes está siendo vacunados realmente, usando $eq */

db.vacuna.find( { placebo: { $eq: "N" } } ).pretty()



/* Sintaxis para que la consulta nos devuelva todas las medicaciones que tomaban antes de iniciar el ensayo cuya dosis fuera menor que 3.80 mg, usando $lt */

db.vacuna.find( { tratamiento_preexistente_dosis_mg: { $lt: 3.80 } } ).pretty()



/* Sintaxis para que la consulta nos devuelva todas las medicaciones que tomaban antes de iniciar el ensayo cuya dosis fuera mayor o igual que 100 mg, usando $gte */

db.vacuna.find( { tratamiento_preexistente_dosis_mg: { $gte: 100 } } ).pretty()


/* Sintaxis para que la consulta nos devuelva todas las medicaciones que tomaban antes de iniciar el ensayo cuya dosis fuera menor o igual que 50 mg, usando $lte */

db.vacuna.find( { tratamiento_preexistente_dosis_mg: { $lte: 50 } } ).pretty()


/* Sintaxis para que la consulta nos devuelva el número de personas que no han participado antes en un ensayo, usando $ne */

db.vacuna.find( { miembro_ensayos_anteriores: { $ne: "S" } } ).count()


/* Sintaxis para que la consulta nos devuelva quienes están tomando o bien las dosis más altas (200 mg) y o bien las más bajas (1.25 mg) de cualquier medicamento, usando $in */

db.vacuna.find( { tratamiento_preexistente_dosis_mg: { $in: [ 200, 1.25 ] } } ).pretty()


/* Sintaxis para que la consulta nos devuelva quienes no están tomando ni las dosis más altas (200 mg), ni las más bajas (1.25 mg) de cualquier medicamento, usando $nin */

db.vacuna.find( { tratamiento_preexistente_dosis_mg: { $nin: [ 200, 1.25 ] } } ).pretty()


/* Sintaxis para que la consulta nos devuelva los datos de los miembros el ensayo que toman el medicamento Excedrin en dosis superiores a 50 mg, usando $and */

db.vacuna.find( { $and: [ { tratamiento_preexistente_dosis_mg: { $gte: 50 } }, { tratamiento_preexistente: { $eq: "Excedrin" } } ] } ).pretty()


/* Sintaxis para que la consulta nos devuelva los datos de los miembros el ensayo que toman el medicamento Excedrin (da igual la dosis) y cualquier otro medicamento en dosis superiores a 200 mg, usando $or */

db.vacuna.find( { $or: [ { tratamiento_preexistente_dosis_mg: { $gte: 200 } }, { tratamiento_preexistente: { $eq: "Excedrin" } } ] } ).pretty()


/*Sintaxis para que la consulta nos devuelva los miembros del ensayo que no sean de Uganda ni hombres (Masculino), usando $nor */

db.vacuna.find( { $nor: [ { localidad: { $eq:"Uganda" }}, { sexo: { $eq: "M" } } ] } ).pretty()


/* Sintaxis para que la consulta nos devuelva todos los medicamentos cuya dosis no sea mayor o igual que 4, usando $not */

db.vacuna.find( { tratamiento_preexistente_dosis_mg: {$not: { $gte: 4 } } } ).pretty()