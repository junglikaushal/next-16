import Link from "next/dist/client/link";

const UserDetails = async ({ params }: { params: Promise<{ id: string }>}) => {
    const { id } = await params;
    return (
        <div>
            <div>Showing {id} User Details</div>
            <div><Link href={"/dashboard/users"}>Back</Link></div>
        </div>
    )
}
export default UserDetails
