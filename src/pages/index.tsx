export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/detalhe-produto",
            permanent: false,
        },
    };
}

export default function Index(){
    return null;
}
