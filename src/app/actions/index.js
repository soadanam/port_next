"use server";

import { signIn, signOut } from "@/auth";

export async function doSingOut() {
    await signOut();
}
export async function doGoogleSingIn() {
    await signIn("google", {callbackUrl: 'http://localhost:3000'});
}

export async function login(formData){
    try{
        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        return response;
    }
    catch(err){
        throw err;
    }
}