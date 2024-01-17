import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'

export default function index({
    repo2,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(repo2)
    return (
        <div>index</div>
    )
}

type Repo = {
    name: string
    stargazers_count: number
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo2 = await res.json()
    return { props: { repo2 } }
}) satisfies GetStaticProps<{
    repo2: Repo
}>