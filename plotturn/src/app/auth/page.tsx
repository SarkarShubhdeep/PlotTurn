"use client";

import { EyeOffIcon } from "lucide-react";
import Link from "next/link";

export default function Auth() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-base-200">
            <h1 className="text-2xl font-bold text-center mb-10">PlotTurn</h1>
            <div className="flex flex-row gap-2">
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <p className="">Sign into your account</p>
                    <div className="form-control">
                        <label className="floating-label mt-2">
                            <span>Email</span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="floating-label flex flex-row items-center gap-2">
                            <span>Password</span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input w-full password-input"
                            />
                            <button
                                type="button"
                                className="btn btn-ghost btn-sm btn-circle"
                            >
                                <EyeOffIcon className="w-4 h-4" />
                            </button>
                        </label>
                    </div>
                    <Link
                        type="submit"
                        className="btn btn-primary rounded-full mt-4"
                        href="/home"
                    >
                        Login
                    </Link>
                </form>
                <div className="divider divider-horizontal" />
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <p className="">Create an account</p>
                    <div className="form-control">
                        <label className="floating-label mt-2">
                            <span>Email</span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="floating-label">
                            <span>Username</span>
                            <input
                                type="text"
                                placeholder="Set a username"
                                className="input w-full"
                            />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="floating-label flex flex-row items-center gap-2">
                            <span>Password</span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input w-full password-input"
                            />
                            <button
                                type="button"
                                className="btn btn-ghost btn-sm btn-circle"
                            >
                                <EyeOffIcon className="w-4 h-4" />
                            </button>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary rounded-full mt-4"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="divider divider-horizontal" />
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <p className="">Anonymous Sign In</p>
                    <div className="form-control">
                        <label className="floating-label mt-2">
                            <span>Username</span>
                            <input
                                type="text"
                                placeholder="Username"
                                className="input w-full"
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary rounded-full mt-4"
                    >
                        Enter
                    </button>
                </form>
            </div>
        </main>
    );
}
