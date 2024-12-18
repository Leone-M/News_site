import Image from "next/image";
import Link from "next/link";

export default function HeaderBlock() {
    return (
        <div className="grid grid-flow-col bg-[#a01616]">
            <div>
                <Link className="flex flex-row" href="/">
                    <div className="justify-start ps-4 px-2 py-4">
                        <Image className="rounded-full" width={32} height={32} alt="Site icon" src="https://i.pinimg.com/564x/45/ad/f7/45adf7cbe7ec177a4841b2deaa66b4bc.jpg" />
                    </div>
                    <div className="justify-start">
                        <h1 className="text-4xl font-black text-left px-1 py-3 text-black font-serif" >DEZMETLL</h1>
                    </div>
                </Link>
            </div>
        </div>)
}