// import * as CRUD from "/src/js/crud-provider";

import { init } from "./js/archivos-page";


// //de esta manera se consume informacion de una API

// import { init } from "./js/usuarios-page";

// import { obtenerChiste } from "./js/http-provider";

// // fetch( urlJoke ).then( ( resp ) => {
// //     // Se puede usar desestructuracion de objetos para poder recibir los datos del json
// //     resp.json().then( ( { id, value } ) => {
// //         console.log( id );
// //         console.log( value );
// //     });
// // } );

// fetch ( urlJoke )
//     .then( ( resp ) => resp.json() )
//     .then( ({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     } )


// obtenerChiste()
//     .then( ( { icon_url, id, value } ) => {
//         console.log( icon_url, id, value );
//     } )


// init();


// CRUD.getUsuario( 2 )
//     .then( console.log )


// CRUD.crearUsuario( {
//     name: 'Santiago',
//     job: 'developer'
// } )
//     .then( console.log );


    // CRUD.actualizarUsuario(1, {
    //     name: "Melissa",
    //     job: "prosti"
    // })
    //     .then( console.log );

    // CRUD.borrarUsuario(1)
    //     .then( console.log );


init();

