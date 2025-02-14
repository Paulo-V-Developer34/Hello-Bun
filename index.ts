import figlet from "figlet"

const server = Bun.serve({ //iniciando o servidor
    port: 3000, 
    fetch(request, server) {
        const body =  figlet.textSync("Hello Bun!")
        return new Response(body)
    },
})

console.log(`Rodando na porta: ${server.port}`)