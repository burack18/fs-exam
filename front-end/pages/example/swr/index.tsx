import React from 'react'
import useSWR from 'swr'


export default function index() {
    const p=async()=>await new Promise((res)=>res('e'))
    
    const { data, error } = useSWR('/api/profile-data', p)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div>index</div>
    )
}
