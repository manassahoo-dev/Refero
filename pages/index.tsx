import { Card, Grid, Text } from '@geist-ui/core';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section id='hero'>
          <div style={{ padding: '5rem 0', textAlign: 'center' }}>
            <Text font='5rem' margin={0} b>
              Welcome to Refero
            </Text>
            <Text font='2rem' margin={0}>
              The app that connects learners and job seekers!
            </Text>
          </div>
        </section>

        <section id='features'>
          <h2>Features</h2>
          <Grid.Container gap={2} justify='center'>
            <Grid xs={8}>
              <Card shadow>
                <div className='feature'>
                  <i className='fas fa-users'></i>
                  <h3>Networking</h3>
                  <p>
                    Connect with other job seekers, grow your professional
                    network, and find new job opportunities.
                  </p>
                </div>
              </Card>
            </Grid>
            <Grid xs={8}>
              <Card shadow>
                <div className='feature'>
                  <i className='fas fa-bullhorn'></i>
                  <h3>Job Referrals</h3>
                  <p>
                    Post job referrals and get referred by others to increase
                    your chances of getting hired.
                  </p>
                </div>
              </Card>
            </Grid>
            <Grid xs={8}>
              <Card shadow>
                <div className='feature'>
                  <i className='fas fa-lightbulb'></i>
                  <h3>Tips &amp; Tricks</h3>
                  <p>
                    Share and learn job search strategies, resume and cover
                    letter tips, and interview techniques from other job
                    seekers.
                  </p>
                </div>
              </Card>
            </Grid>
          </Grid.Container>
        </section>
        <br />
      </main>
    </div>
  );
}
