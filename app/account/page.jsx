import Link from "next/link";

export default function Page () {
    return (
        <div className="w-container">
            <Link href='/account/setting'>
                setting page
            </Link>
        </div>
    )
}