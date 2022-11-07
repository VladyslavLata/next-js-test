import { FC, useEffect } from "react";
import { useRouter } from "next/router";
 
const ErrorPage: FC = () => {
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
},[router])

  return (<>
    <h1>Error 404</h1>
    <b>Page not found</b>
  </>
  )
}

export default ErrorPage;