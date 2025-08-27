export default function LayoutGuide() {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-100">
            <div className="h-screen w-[1px] absolute left-[40px] bg-lime-500" />
            <div className="h-screen w-[1px] absolute right-[40px] bg-lime-500" />
            <div className="h-screen w-[1px] absolute right-[340px] bg-lime-500" />
            <div className="h-screen w-[1px] absolute right-[356px] bg-lime-500" />
            <div className="h-[1px] w-screen absolute top-[64px] bg-lime-500" />
            <div className="h-[1px] w-screen absolute top-[80px] bg-lime-500" />
            <div className="h-[1px] w-screen absolute top-[280px] bg-lime-500" />
            <div className="h-[1px] w-screen absolute top-[296px] bg-lime-500" />
            <div className="h-[1px] w-screen absolute bottom-[40px] bg-lime-500" />
        </div>
    );
}
