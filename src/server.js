const app = require('./app')
const { envs } = require('./config/enviroments/enviroments')



app.listen(envs.PORT, () => {
    console.log("Server running on port:" + envs.PORT);
})