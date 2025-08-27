import Image from "next/image";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 px-[56px] ">
            <div className="flex-1">
                <h1 className="text-2xl font-bold normal-case">PlotTurn</h1>
            </div>
            <div className="flex-none flex flex-row items-center gap-2">
                <Image
                    src="/temp-images/profile-george.png"
                    alt="PlotTurn"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </div>
        </div>
    );
}
