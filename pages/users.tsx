import { getAllUsers } from '../prisma/user';

const users = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <h1>{user.email}</h1>
      ))}
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const users = await getAllUsers();

  return { props: { users } };
};
export default users;
