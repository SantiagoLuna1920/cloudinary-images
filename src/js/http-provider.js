import { crearFilaUsuario } from "./usuarios-page";

const urlJoke     = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";


//cluodinary

const cloudPreset = "yewuqd7h";
const cloudinary = "https://api.cloudinary.com/v1_1/duai9awes/upload";

// const obtener =  async () => {
//     const resp = await fetch( urlJoke );
//     try {
//         return resp;
//     } catch ( err ) {
//         throw err;
//     }
// }

const obtenerChiste = async () => {
    
    try {

    const resp = await fetch( urlJoke );

    if ( !resp.ok ) throw `No se pudo realizar la peticion`;

        const { icon_url, id, value }  = await resp.json();

        return { 
            icon_url,
            id,
            value
         }

    } catch ( err ) {
        throw err;
    }

}

const obtenerUsuarios = async () => {

    try {
        const resp = await fetch( urlUsuarios );

        if ( !resp.ok ) throw `No se pudo conectar con la api`;

        const { data } = await resp.json();

        return data;

    } catch ( err ) {
        throw err;
    }


}

const subirImagen = async ( archivoSubir ) => {

    const formData = new FormData();
    formData.append( "upload_preset", cloudPreset );
    formData.append( "file", archivoSubir );


    try {

        const resp = await fetch( (cloudinary), {
            method: 'POST',
            body: formData
        } )

        if ( resp.ok ) {
            return await resp.json();
        } else {
            throw await resp.json();
        }

    } catch ( e ) {
        throw e;
    }

}


export {

    obtenerChiste,
    obtenerUsuarios,
    subirImagen

}