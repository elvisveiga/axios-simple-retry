import { AxiosError, AxiosInstance } from "axios";

export interface AxiosRetryProps {
    retries?: number;
    retryStatus?: number[];
    retryDelay?: number;
    incrementalDelay?: boolean;
}

function canRetry(currentRetry: number, retries: number, retryStatus: number[], error: AxiosError) {
    return retries > 0 && currentRetry < retries && retryStatus.some(s => s == error.response?.status);
}

export default function axiosSimpleRetry(axios: AxiosInstance, {
    retries = 3,
    retryDelay = 1000,
    retryStatus = [500, 501, 502, 503, 504],
    incrementalDelay = false,
}: AxiosRetryProps) {
    let currentRetry = 0;

    axios.interceptors.response.use(res => {
        return res;
    }, async (error: AxiosError) => {
        if (canRetry(currentRetry, retries, retryStatus, error)) {
            currentRetry++;
            const delay = incrementalDelay ? retryDelay * currentRetry : retryDelay;
            await new Promise(ms => setTimeout(ms, delay));
            return axios.request(error.config)
        }
        return Promise.reject(error)
    })
}