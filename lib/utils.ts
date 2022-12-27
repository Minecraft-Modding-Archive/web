import { useSession } from "next-auth/react";

export function IsLoggedIn() {
    const { data: session } = useSession();
    return session;
}

export function IsAdmin() {
    const { data: session } = useSession();
    const admins = ["765621644097486888", "810863994985250836"]
    if (session) {
        const id = session.user?.image?.split("avatars/")[1].split("/")[0];
        return admins.includes(id as string);
    }
    return false;
}

export function IsURL(content: string) {
    let url;
    try { url = new URL(content); }
    catch (_) { return false; }
    return url.protocol === "http:" || url.protocol === "https:";
}
