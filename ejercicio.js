var fs=require('fs')

// fs.mkdirSync('Solucion',(error)=>{
//     if(error){
//          throw error;
// }
// console.log('La carpeta se creo con éxito')
//  })


// fs.writeFileSync('./Solucion/Ejercicio.txt','Holi',(error)=>{
//     if(error){
//         throw error;
// }
// console.log('El archivo se creo con éxito')
// })

// fs.unlinkSync('./Solucion/Ejercicio.txt')

fs.rmdir('./Solucion', (err) => {
    if (err) {
     console.error(err);
   } else {
     console.log('Carpeta eliminada con éxito');
   }
})



