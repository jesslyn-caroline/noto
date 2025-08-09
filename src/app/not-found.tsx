import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={`w-screen h-screen flex flex-col justify-center items-center gap-y-5`}>
      <Image src="/404-not-found.png" alt="404-not-found" width={500} height={500} />
      <h1 className={`font-semibold`}>Are you sure this is the right place? 👀</h1>
      <Link href="/">Click me to go back to the home </Link>
    </div>
  )
}
