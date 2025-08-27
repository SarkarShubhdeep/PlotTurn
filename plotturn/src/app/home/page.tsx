import LayoutGuide from "../components/LayoutGuide";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-base-200 px-[40px]">
            {/* <LayoutGuide /> */}
            <Navbar />

            {/* main content */}

            <div className="flex flex-row w-full h-screen  relative gap-4">
                <div className="flex flex-col w-full h-full pt-[80px] pb-[40px] gap-4">
                    <div className="flex flex-col w-full h-[240px] rounded-lg shadow-lg bg-base-300"></div>
                    <div className="flex flex-col w-full h-full rounded-lg shadow-lg bg-base-300"></div>
                </div>
                <div className="flex flex-row w-[340px] h-full pt-[80px] pb-[40px]">
                    <div className="flex flex-col w-full h-full rounded-lg shadow-lg bg-base-300"></div>
                </div>
            </div>
        </main>
    );
}
