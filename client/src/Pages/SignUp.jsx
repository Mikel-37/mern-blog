import React from 'react';
import {Link} from "react-router-dom";
import {Button, Label, TextInput} from "flowbite-react";

function SignUp(props) {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <Link to="/" className="font-bold
             dark:text-white text-4xl">
                <span className="px-2 py-2 bg-gradient-to-r from-indigo-500
                via-purple-500 to-pink-500 rounded-lg text-white">Mike</span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5">
                    this is a demo project. You can sign up with your email and password.
                    </p>

                </div>
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div>
                            <Label value="Your username"/>
                            <TextInput
                                type="text"
                                placeholder="Username"
                                id="username"/>
                        </div>
                        <div className="">
                            <Label value="Your email"/>
                            <TextInput
                                type="text"
                                placeholder="Email"
                                id="email"/>
                        </div>
                        <div className="">
                            <Label value="Your password"/>
                            <TextInput
                                type="text"
                                placeholder="Password"
                                id="password"/>
                        </div>
                        <Button gradientDuoTone="purpleToPink" type="submit">
                            Sign up
                        </Button>

                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account</span>
                        <Link to="/sign-in" className="text-blue-500" >
                            Sign In
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default SignUp;