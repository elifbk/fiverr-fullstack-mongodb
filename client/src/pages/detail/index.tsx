import React, { type FC } from "react";
import { useParams } from "react-router-dom";
import { useGetoneGig } from "../../service/gig";
import Loader from "../../components/loader";
import Error from "../../components/error";
import BreadCrumb from "./bread-crumb";
import GigInfo from "./gig-info";
import PackageInfo from "./package-info";
import UserInfo from "./user-info";

type Props = {};

const Detail: FC = (props: Props) => {
  const { id } = useParams();
  const { isLoading, error, data } = useGetoneGig(id!);

  if (isLoading) return <Loader designs="my-40" />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  if (!data) return <p className="warning">No content or content removed.</p>;

  return (
    <div className="container max-sm:px-5">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="overflow-y-auto ">
          <BreadCrumb category={data.category} />
          <GigInfo gig={data} />
          <UserInfo user={data.user} />
        </div>

        <PackageInfo gig={data} />
      </div>
    </div>
  );
};

export default Detail;
