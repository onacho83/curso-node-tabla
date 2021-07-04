const fs = require('fs');
const colors = require('colors');

const tablas = async(base, listar, hasta)=>{

    try{
        // console.log('==============');
        // console.log( `  TABLA DEL ${base}` );
        // console.log('==============');

        let salida = '==============\n';
        salida += ` TABLA DEL ${base}\n`,
        salida += '==============\n';

        for(let i = 1; i<=hasta; i++){
           salida += `${base} x ${i} = ${base*i}\n`;
        };
        
        if(listar){
            console.log(salida.trap);
        };
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        
        return(`tabla-${base}.txt`);
        

    }catch(err){
        throw err;
    }

}

module.exports={
    tablas
}