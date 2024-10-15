import { useMutation, UseMutationOptions } from "react-query";

import { ILoginPayload, ILoginResponse } from "./index.model";

import { apiClient } from "@/services/api/axios";

import { API } from "@/utils/constant";

/* -------------------------------- LOGIN ------------------------------- */
export const serviceLogin = async (payload: ILoginPayload) => {
  return apiClient
    .post<ILoginResponse>(API.ENDPOINT.LOGIN_SERVICE.LOGIN, payload)
    .then((res) => {
      return res.data;
    });
};

export const useLoginMutation = (
  options?: UseMutationOptions<ILoginResponse, Error, ILoginPayload>
) => {
  return useMutation(serviceLogin, {
    ...options,
  });
};
