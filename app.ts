import { serve } from 'https://deno.land/std@0.142.0/http/server.ts'

const employeeName = 'Max'
console.log(employeeName)

const handler = (req: Request) => {
 return new Response('Hello World!')
}

serve(handler, { port: 8000 })
