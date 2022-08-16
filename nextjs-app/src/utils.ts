import { GetServerSidePropsResult } from "next";

// dispatch server vars
export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<any>
> => {
  try {
    const data = await fetch(
      "https://random-data-api.com/api/address/random_address"
    );
    const mockAddress = await data.json();
    return { props: { mockAddress: mockAddress } };
  } catch (error) {
    return { props: { mockAddress: {} } };
  }
};

export const getStaticProps = async (): Promise<any> => {
  try {
    const data = await fetch(
      "https://random-data-api.com/api/address/random_address"
    );
    const mockAddress = await data.json();
    return { props: { mockAddress: mockAddress } };
  } catch (error) {
    return { props: { mockAddress: {} } };
  }
};
