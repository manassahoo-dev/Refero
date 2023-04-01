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
            <h1>Welcome to Refero</h1>
            <h2>The app that connects learners and job seekers!</h2>
          </div>
        </section>

        <section id='features'>
          <h1 className='text-center my-4'>Features</h1>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <i className='fas fa-users'></i>
                    <h3>Networking</h3>
                    <p>
                      Connect with other job seekers, grow your professional
                      network, and find new job opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <i className='fas fa-bullhorn'></i>
                    <h3>Job Referrals</h3>
                    <p>
                      When someone refers you for a job, they are essentially
                      vouching for your skills and abilities to the employer.
                      This can be a valuable endorsement.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <i className='fas fa-lightbulb'></i>
                    <h3>Tips &amp; Tricks</h3>
                    <p>
                      Share and learn job search strategies, resume and cover
                      letter tips, and interview techniques from other job
                      seekers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </main>
    </div>
  );
}
