import { useEffect, useRef, useState } from 'react';

interface UseQueryOptions<Data> {
  enable?: boolean;
  onSuccess?: (data: Data) => void;
  onError?: (error: Error) => void;
  initialData?: Data | (() => Data);
  placeholderData?: Data;
}

export const useQuery = <Data>(
  queryFn: () => Promise<Data>,
  { enable = true, onSuccess, onError, initialData, placeholderData }: UseQueryOptions<Data> = {},
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(initialData);

  const queryFnRef = useRef(queryFn);

  const fetchData = () => {
    setIsLoading(true);
    queryFnRef
      .current()
      .then((data) => {
        setError(null);
        setData(data);
        onSuccess?.(data);
      })
      .catch((error: Error) => {
        setError(error);
        setData(undefined);
        onError?.(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    queryFnRef.current = queryFn;
  }, [queryFn]);

  useEffect(() => {
    if (enable) {
      fetchData();
    }
  }, [enable]);

  return { data: data ?? placeholderData, error, isLoading, isError: !!error, refetch: fetchData };
};
