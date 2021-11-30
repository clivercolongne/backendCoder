const fs = require('fs')

class Contenedor {
    constructor(filename) {
        console.log("Iniciando Contenedor")
        this.countID = 0
        this.file = filename
        this.lista = []

    }

    async save( objeto ) {
        this.countID++;
        objeto["id"] = this.countID

        this.lista.push(objeto)

        await this.write()

        return this.countID;
    }

    async deleteById(id) {

        for(const index in this.lista) {
            let element = this.lista[index]
            if(element.id == id) {
                this.lista.splice(index, 1)                                        
                break;
            }
        }

        await this.write()
    }

    async write() {
        let string = JSON.stringify(this.lista)
        await fs.promises.writeFile(this.file, string)
    }

    getAll() {
        return this.lista
    }

    async getById(id) {
        
        return this.lista.find(item => item.id === id)
    }
    async deleteAll(){
        this.lista = []
        await this.write()
    }
    
}

module.exports = Contenedor