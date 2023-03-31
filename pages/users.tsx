import { Card, Grid, Image, Tag, Text } from '@geist-ui/core';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const users = () => {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    const fetchJobSeekers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setJobSeekers(data);
    };
    fetchJobSeekers();
  }, []);

  return (
    <div>
      <Text h2>Users</Text>
      <Grid.Container gap={2}>
        {jobSeekers.map((jobSeeker) => (
          <Grid xs={6} key={jobSeeker.id}>
            <Card shadow width={'100%'}>
              <Image
                src={jobSeeker.profile_picture}
                className='rounded-full'
                height='100px'
                width='100px'
                draggable={false}
              />
              <Text h3 margin={0}>
                {jobSeeker.name}
              </Text>
              <Text type='secondary' mt={0}>
                {jobSeeker.email}
              </Text>
              <Text h5>{jobSeeker.jobTitle}</Text>
              {jobSeeker.skills.map((skill, index) => (
                <Tag mr={0.5}>{skill}</Tag>
              ))}

              <Card.Footer>
                <Link href={jobSeeker.linkedin} target='_blank'>
                  LinkedIn
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <br />
    </div>
  );
};

export default users;
