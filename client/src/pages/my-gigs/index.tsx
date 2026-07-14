import React, { type FC } from "react";
import { useProfile } from "../../service/auth";
import { useGetAllGigs } from "../../service/gig";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const MyGigs: FC = () => {
  const { user } = useProfile();

  const { isLoading, error, data, refetch } = useGetAllGigs({
    userId: user?.id,
  });

  console.log(data);

  return (
    <div className="container max-sm:px-5 py-5">
      <h1 className="title">My Services</h1>

      <div>
        {isLoading ? (
          <Loader designs="my-40" />
        ) : error ? (
          <Error message={error?.message} refetch={refetch} />
        ) : (
          <div className="layout">
            {data?.length === 0 ? (
              <div className="text-center my-40">
                <p className="font-semibold">
                  You haven't created a service yet.
                </p>
              </div>
            ) : (
              data?.map((item) => (
                <Card item={item} key={item.id} expand={true} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGigs;
