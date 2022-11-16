const express = require("express")
const {Router} = express
const Container = require('./container')



const app = express()
const router = new Router()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api", express.static(__dirname + "/public"))
app.use("/api/productos", router)

const container = new Container();


//getAll

router.get("/", (req, res) => {

    const products = container.getAll();
    res.send(products);

})


//getById

router.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const product = container.getById(id)
    
    res.send(product)

}) 



router.post("/", (req, res)=>{
    container.createProduct(req.body)
    res.json("Se ingreso el producto")
})


router.delete("/:id", (req, res)=>{
    const id = Number(req.params.id)
    container.deleteById(id)
    res.json(`Se elimino el producto con el id ${id}`)
})




const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

server.on("error", (error) => {
    console.log(`Error con el servidor ${error}`);
});

