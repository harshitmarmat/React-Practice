import { useCallback, useState } from "react";
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requiredConfig,applyData) => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            requiredConfig.url,{
                method : requiredConfig.method?requiredConfig.method : 'GET' ,
                body : requiredConfig.body ? JSON.stringify(requiredConfig.body) : null,
                header : requiredConfig.header ? requiredConfig.header : {}
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
          applyData(data);
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    },[]);
    return { 
      isLoading,
      error,
      sendRequest
    }
}
export default useHttp ; 