import Link from 'next/link'

export default function NotFound() {
    return (

        <div className="mt-4 p-5 bg-info text-white rounded">
            <h1>Could not find requested resource</h1>
            <Link href="/">Return Home</Link>
        </div>

        // <div>
        //   <h2>Not Found</h2>
        //   <p>Could not find requested resource</p>
        //   <Link href="/">Return Home</Link>
        // </div>
    )
}