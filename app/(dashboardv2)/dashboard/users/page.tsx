import Link from "next/dist/client/link";

const Users = () => {
    return (
        <>
            <h2 className={"text-2xl"}>Dashboard Users</h2>
            <ul>
                <li><Link href={"/dashboard/users/1"}>User 1</Link></li>
                <li><Link href={"/dashboard/users/2"}>User 2</Link></li>
                <li><Link href={"/dashboard/users/3"}>User 3</Link></li>
                <li><Link href={"/dashboard/users/4"}>User 4</Link></li>
            </ul>
        </>
    )
}
export default Users
