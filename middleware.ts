import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

/**
 * This middleware will check if the user is logged in and if they are an admin
 * by looking for the presence of the "firebaseAuthToken" cookie and decoding
 * the JWT to see if the "admin" claim is present. If the user is not logged in
 * or is not an admin, they will be redirected to the home page.
 * @param {NextRequest} request The NextRequest object
 * @returns {Promise<NextResponse>} The NextResponse object
 */
export default async function middleware(request: NextRequest) {
  console.log("MIDDLEWARE", request.url);
  if(request.method === "POST") {
    return NextResponse.next();}
const cookieStore = await cookies(); 
const token = cookieStore.get("firebaseAuthToken")?.value;
if(!token) return NextResponse.redirect(new URL("/", request.url));
const decodedToken = decodeJwt(token)

if(!decodedToken.admin){
  return NextResponse.redirect(new URL("/", request.url));

}

else {

  return NextResponse.next();
}



}

export const config = {
  matcher: ["/admin-dashboard"],
};
