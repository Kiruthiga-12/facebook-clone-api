const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const dotenv = require('dotenv');

dotenv.config();

server.use(middlewares)
server.use('/api/posts', router)
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
})
