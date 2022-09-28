import React from 'react'
import { Helmet } from "react-helmet"




export default function CustomHeadScripts() {
  const script = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "56bckigajz");
  `

  return (
    <Helmet>
      <script type="text/javascript">{script}</script>
    </Helmet>
  )
}