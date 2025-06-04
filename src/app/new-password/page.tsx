"use client";

import React, { Suspense } from "react";
import ResetPasswordComponent from "@/components/resetPasswordComponent";

const ResetPassword = () => {
  return (
    <Suspense>
      <ResetPasswordComponent />
    </Suspense>
  );
};

export default ResetPassword;
