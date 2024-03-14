import { currentUser } from "@clerk/nextjs";
import Details from "./_components/Detail";

const Page = async ({ params }) => {
  const user = await currentUser();
  console.log(user);
  return (
    <>
      {user ? (
        <Details
          params={params}
          userEmail={user.emailAddresses[0].emailAddress}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Page;
