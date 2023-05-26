import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/sidebar.css'
import '@/styles/EmployeesList.css'
import '@/styles/AddEmployee.css'
import '@/styles/table.css'
import '@/styles/Login.css'

import Head from 'next/head'
import Layout from '@/Components/Layout'

export default function App({ Component, pageProps }) {
  return <>
  <Layout>
  <Component {...pageProps} />
  </Layout>

<Head>
{/* cdn links */}
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}

{/* <!-- Latest compiled and bootstrap minified CSS --> */}
{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link> */}
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


</Head>


  </>
 
}
