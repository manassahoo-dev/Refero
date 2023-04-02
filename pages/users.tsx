import { getAllUsers } from '../prisma/user';

const users = ({ users }) => {
  return (
    <div className='row'>
      {users.map((user, index) => (
        <div className='col-3'>
          <div className='card'>
            <img
              src={user.image}
              className='card-img-top'
              alt='Profile Image'
            />
            <div className='card-body'>
              <h5 className='card-title'>{user.name}</h5>
              <p className='card-text'>{user.email}</p>
              <div className='d-grid gap-2'>
                <a href='#' className='btn btn-primary'>
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const users = await getAllUsers();

  return { props: { users } };
};
export default users;
