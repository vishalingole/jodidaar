import React, { useEffect } from "react";
import { getProfileDetail } from "../../utils/webRequest";
import { useParams } from "react-router-dom";

const ProfileDetail = () => {
  const { profileId } = useParams();

  useEffect(() => {
    getProfileDetail({ profileId: profileId });
  }, []);

  return (
    <>
      <div className="widget">Profile Details</div>
    </>
  );
};

export default ProfileDetail;
