const http = require('http')

http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, {'Content-Type': 'application/json'})

    res.writeHead(200, {'Content-Type': 'application/csv'})


    //const persona = {
    //    id: 1,
    //    nombre: 'Fernando'
    //}

    //res.write(JSON.stringify(persona))

    res.write('id,\t nombre\n')
    res.write('1,\t Fernando\n')
    res.write('2,\t Maria\n')
    res.write('3,\t Juan\n')
    res.write('4,\t Pedro\n')


    res.end()
}).listen(5000)

console.log('escuchando el puerto', 5000)
