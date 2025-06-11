import sqlite3 from "sqlite3";
// import { open, Database } from "sqlite";

import db from "../../../utils/dbconnect"
export async function GET(request: Request) {


  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  let items :any



  if (slug){
items = await db.all(`SELECT * FROM practice where slug='${slug}' `);
  } else {
items = await db.all("SELECT * FROM practice");
  }

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}


 
// export async function POST(request: Request) {
//   // Parse the request body
//   const body = await request.json();
//   const { name } = body;
 
//   // e.g. Insert new user into your DB
//   const newUser = { id: Date.now(), name };
 
//   return new Response(JSON.stringify(newUser), {
//     status: 201,
//     headers: { 'Content-Type': 'application/json' }
//   });
// }