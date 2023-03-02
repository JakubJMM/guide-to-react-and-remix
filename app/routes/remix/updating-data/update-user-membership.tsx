import Heading from "~/components/Heading";

interface UpdateUserMembershipProps {
  children: React.ReactNode;
}

const UpdateUserMembership = ({ children }: UpdateUserMembershipProps) => {
  return (
    <>
      <Heading level="h2" isCentre>
        Update User Membership
      </Heading>
    </>
  );
};

export default UpdateUserMembership;
