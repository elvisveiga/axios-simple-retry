import { AxiosInstance } from "axios";
export interface AxiosRetryProps {
    retries?: number;
    retryStatus?: number[];
    retryDelay?: number;
    incrementalDelay?: boolean;
}
export default function axiosSimpleRetry(axios: AxiosInstance, { retries, retryDelay, retryStatus, incrementalDelay, }: AxiosRetryProps): void;
