app.post('/admin/producto', (req, res) => { 
    let Newproduct=req.body;
    console.log(req.body); 
    let date = new Date();  //Generar la fecha actual 
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    console.log(output);
    Newproduct.fecha_creacion=output; 
    let file=fs.readFileSync('scr/datos/productos.json');
    if(file==0){ //si el json productos esta vacio 
        fs.writeFile('scr/datos/productos.json',Newproduct = JSON.stringify(req.body,null,2),function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
            res.status(200).send({message:'Producto agregado satisfactoriamente'})
        });
    }
    else{ //si ya tiene contenido el json productos 
        fs.appendFile('scr/datos/productos.json',Newproduct = JSON.stringify(req.body,null,2),function (err){
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
            res.status(200).send({message:'Producto agregado satisfactoriamente'})
        });
    }
    /*
    fs.writeFile('scr/datos/productos.json',Newproduct = JSON.stringify(req.body,null,2),function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
        res.status(200).send({message:'Producto agregado satisfactoriamente'})
    
     /*
    var obj={productos:[]};
    let Newproduct=req.body;
    let file=fs.readFileSync('scr/datos/productos.json');
    if (file.length == 0) {
        fs.writeFile('scr/datos/productos.json',Newproduct,function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
            res.status(200).send({message:'Producto agregado satisfactoriamente'})
         });
        res.status(200).send({message:'Producto agregado satisfactoriamente'})
    } 
    else {
        //append data to jso file
        var productos = JSON.parse(file)
        //add json element to json object
        console.log(typeof productos);
        fs.appendFile('scr/datos/productos.json',Newproduct,function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
            res.status(200).send({message:'Producto agregado satisfactoriamente'})
         });
    }
    */

});