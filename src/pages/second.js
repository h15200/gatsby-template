import React, { Fragment } from 'react'

import Head from '../components/helmetHead'
import Layout from '../components/layout'

import secondStyles from '../styles/Modules/secondPage.module.scss'

const SecondPage = () => {
  return (
    <Fragment>
      <Head title="Index" />
      <Layout>
        <main className={secondStyles.main}>
          <section className={secondStyles.sectionOne}>
            <div className={secondStyles.u_center}>
              <h2 className={secondStyles.headerSecondary}>2nd Page - Section 1</h2>
            </div>
          </section>
        </main>
      </Layout>
    </Fragment>
  )
}


export default SecondPage
