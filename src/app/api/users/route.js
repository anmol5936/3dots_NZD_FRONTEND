export async function GET(req,res,next){

let users = [
{
id:1,
name:"praveen",
email:" praveen@123gmail.com"
},
{
    id:1,
    name:"praveen",
    email:" praveen@123gmail.com"
    },
];

let data = JSON.stringify(users);

return new Response(data,{status:200});

}