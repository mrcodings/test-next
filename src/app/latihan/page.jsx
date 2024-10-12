"use client"
import { useEffect, useState } from "react";

const Latihan = () => {
    const [username, setUsername] = useState("");
    const submitForm = (e) => {
        e.preventDefault()
        alert("Username: "+username+" lorem ipsum dolor sit amet "+username+" test");

        return;
    }

    useEffect(() => {
        if(username == "Arief"){
            alert(`Saya adalah: ${username}`);
        }
    }, [username]);

    return (
        <form className="flex gap-4 p-10" onSubmit={submitForm}>
            <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border border-primary"
                    placeholder="Name"
                    type="text"
                    id="name"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                    Send Enquiry
                </button>
            </div>
        </form>
    );
}

export default Latihan;