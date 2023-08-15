import Head from 'next/head'
import 'twin.macro'

import { Button } from 'antd'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next tailwindcss emotion antd boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="w-screen h-screen flex items-center justify-center">
        <div tw="text-center space-y-5">
          <Button>HelloWorld Ant.d</Button>
          <h1 tw="text-red-500">Styled with twin.macro</h1>
        </div>
      </main>
    </div>
  )
}
