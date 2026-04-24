export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/produto",
            permanent: false,
        },
    };
}

export default function Index(){
    return null;
}
