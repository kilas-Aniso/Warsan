
import { BASE_URL } from "@/app/config";

export async function GET (){
    try{
        if (!BASE_URL){
            return new Response('Base url not found', {
                status : 404,
                statusText : 'failed'
            })
        }
        const response = await fetch(`${BASE_URL}/immunization-records`)
        const result = await response.json();
        return new Response(JSON.stringify(result), {
            status:200,
            statusText : 'success'
        })
    }
    catch(error:any){
        return new Response(error.message,{
            status : 501,
            statusText : "failed"
        })
    }
}