import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
type Repo = {
    name: string
    stargazers_count: number
}
export default function index({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>index</div>
    )


}
export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo: Repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>
