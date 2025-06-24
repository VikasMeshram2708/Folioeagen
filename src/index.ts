import { env } from '../env'
import app from './app'

const port = env.PORT ?? 5000

app.listen(8080, () => {
  console.log(`Listening at http://localhost:${port}`)
})
